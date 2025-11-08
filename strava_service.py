import os
import requests
from datetime import datetime, timedelta
from dotenv import load_dotenv
import logging

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

load_dotenv()

# Strava API configuration
STRAVA_CLIENT_ID = os.getenv('STRAVA_CLIENT_ID')
STRAVA_CLIENT_SECRET = os.getenv('STRAVA_CLIENT_SECRET')
STRAVA_REFRESH_TOKEN = os.getenv('STRAVA_REFRESH_TOKEN')

# Log configuration status (without exposing secrets)
logger.info(f"Strava Client ID configured: {'Yes' if STRAVA_CLIENT_ID else 'No'}")
logger.info(f"Strava Client Secret configured: {'Yes' if STRAVA_CLIENT_SECRET else 'No'}")
logger.info(f"Strava Refresh Token configured: {'Yes' if STRAVA_REFRESH_TOKEN else 'No'}")

# Cache for Strava data
strava_cache = {
    'data': None,
    'last_updated': None
}

# Request timeout settings
TIMEOUT = 30  # seconds

def get_strava_access_token():
    """Get a new access token using the refresh token"""
    try:
        logger.info("Attempting to get Strava access token...")
        
        if not all([STRAVA_CLIENT_ID, STRAVA_CLIENT_SECRET, STRAVA_REFRESH_TOKEN]):
            missing = []
            if not STRAVA_CLIENT_ID: missing.append('STRAVA_CLIENT_ID')
            if not STRAVA_CLIENT_SECRET: missing.append('STRAVA_CLIENT_SECRET')
            if not STRAVA_REFRESH_TOKEN: missing.append('STRAVA_REFRESH_TOKEN')
            raise ValueError(f"Missing required environment variables: {', '.join(missing)}")

        response = requests.post(
            'https://www.strava.com/oauth/token',
            data={
                'client_id': STRAVA_CLIENT_ID,
                'client_secret': STRAVA_CLIENT_SECRET,
                'refresh_token': STRAVA_REFRESH_TOKEN,
                'grant_type': 'refresh_token'
            },
            timeout=TIMEOUT
        )
        
        logger.info(f"Strava token response status: {response.status_code}")
        
        if response.status_code != 200:
            logger.error(f"Strava token error response: {response.text}")
            response.raise_for_status()
            
        token_data = response.json()
        if 'access_token' not in token_data:
            logger.error(f"Unexpected token response: {token_data}")
            raise ValueError("No access_token in response")
            
        logger.info("Successfully obtained Strava access token")
        return token_data['access_token']
        
    except requests.exceptions.RequestException as e:
        logger.error(f"Request error getting Strava access token: {str(e)}")
        raise
    except ValueError as e:
        logger.error(f"Value error getting Strava access token: {str(e)}")
        raise
    except Exception as e:
        logger.error(f"Unexpected error getting Strava access token: {str(e)}")
        raise

def fetch_strava_activities():
    """Fetch activities from Strava API"""
    try:
        access_token = get_strava_access_token()
        
        # Calculate date range (3 months ago)
        end_date = datetime.now()
        start_date = end_date - timedelta(days=90)
        
        # Convert to Unix timestamp
        after = int(start_date.timestamp())
        
        response = requests.get(
            'https://www.strava.com/api/v3/athlete/activities',
            headers={'Authorization': f'Bearer {access_token}'},
            params={'after': after, 'per_page': 100},
            timeout=TIMEOUT
        )
        response.raise_for_status()
        
        activities = response.json()
        
        # Process activities to include only relevant data
        processed_activities = []
        for activity in activities:
            try:
                processed_activities.append({
                    'id': activity['id'],
                    'name': activity['name'],
                    'type': activity['type'],
                    'distance': activity['distance'],  # in meters
                    'moving_time': activity['moving_time'],  # in seconds
                    'elapsed_time': activity['elapsed_time'],  # in seconds
                    'total_elevation_gain': activity['total_elevation_gain'],  # in meters
                    'start_date': activity['start_date'],
                    'average_speed': activity['average_speed'],  # meters per second
                    'max_speed': activity['max_speed'],  # meters per second
                    'average_heartrate': activity.get('average_heartrate'),
                    'max_heartrate': activity.get('max_heartrate'),
                    'elev_high': activity.get('elev_high'),
                    'elev_low': activity.get('elev_low'),
                    'description': activity.get('description', ''),
                    'calories': activity.get('calories')
                })
            except KeyError as e:
                logger.warning(f"Missing key in activity data: {str(e)}")
                continue
        
        return processed_activities
    except requests.exceptions.RequestException as e:
        logger.error(f"Error fetching Strava activities: {str(e)}")
        raise

def get_cached_activities():
    """Get activities from cache or fetch new data if cache is expired"""
    try:
        if (strava_cache['last_updated'] is None or 
            (datetime.now() - strava_cache['last_updated']).total_seconds() > 21600):  # 6 hours
            
            logger.info("Cache expired, fetching new activities from Strava")
            activities = fetch_strava_activities()
            strava_cache['data'] = activities
            strava_cache['last_updated'] = datetime.now()
            logger.info(f"Successfully cached {len(activities)} activities")
        else:
            logger.info("Using cached activities")
        
        return strava_cache['data']
    except Exception as e:
        logger.error(f"Error in get_cached_activities: {str(e)}")
        # Return cached data even if expired in case of error
        if strava_cache['data'] is not None:
            logger.info("Returning expired cache due to error")
            return strava_cache['data']
        raise 