from flask import Flask, request, jsonify
from flask_mail import Mail, Message
from flask_cors import CORS
import os
from dotenv import load_dotenv
from datetime import datetime
import logging
from strava_service import get_cached_activities
import traceback

load_dotenv()

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = Flask(__name__)
CORS(app)

# Email configuration
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.getenv('EMAIL_USER')
app.config['MAIL_PASSWORD'] = os.getenv('EMAIL_APP_PASSWORD')

mail = Mail(app)

@app.route('/api/info')
def info():
    """Simple info endpoint for health checks"""
    return jsonify({'message': 'Ammar Tauqir Portfolio API is running!'}), 200

@app.route('/api/contact', methods=['POST'])
def contact():
    """Handle contact form submissions"""
    try:
        data = request.get_json()
        name = data.get('name')
        email = data.get('email')
        subject = data.get('subject')
        message = data.get('message')

        if not all([name, email, subject, message]):
            return jsonify({'message': 'All fields are required'}), 400

        # Send notification email
        msg = Message(
            f'New Contact Form Submission: {subject}',
            sender=os.getenv('EMAIL_USER'),
            recipients=[os.getenv('EMAIL_USER')]  # Send to yourself
        )
        
        msg.html = f"""
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #18181b;">New Contact Form Submission</h2>
            <div style="background-color: #f4f4f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p style="margin: 0; color: #18181b;"><strong>Name:</strong> {name}</p>
                <p style="margin: 10px 0 0 0; color: #18181b;"><strong>Email:</strong> {email}</p>
                <p style="margin: 10px 0 0 0; color: #18181b;"><strong>Subject:</strong> {subject}</p>
                <p style="margin: 10px 0 0 0; color: #18181b;"><strong>Time:</strong> {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}</p>
            </div>
            <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #18181b; margin-top: 0;">Message:</h3>
                <p style="color: #3f3f46; white-space: pre-wrap;">{message}</p>
            </div>
        </div>
        """
        
        mail.send(msg)
        
        return jsonify({'message': 'Message sent successfully!'}), 200

    except Exception as e:
        logger.error(f"Error processing contact form: {str(e)}")
        logger.error(traceback.format_exc())
        return jsonify({'message': 'Error processing contact form'}), 500

@app.route('/api/subscribe', methods=['POST'])
def subscribe():
    try:
        data = request.get_json()
        email = data.get('email')

        if not email:
            return jsonify({'message': 'Email is required'}), 400

        # Send notification email
        msg = Message(
            'New Neuron Notes Subscriber! 🎉',
            sender=os.getenv('EMAIL_USER'),
            recipients=[os.getenv('EMAIL_USER')]  # Send to yourself
        )
        
        msg.html = f"""
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #18181b;">New Subscriber Alert!</h2>
            <p style="color: #3f3f46;">Someone just subscribed to Neuron Notes:</p>
            <div style="background-color: #f4f4f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p style="margin: 0; color: #18181b;"><strong>Email:</strong> {email}</p>
                <p style="margin: 10px 0 0 0; color: #18181b;"><strong>Time:</strong> {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}</p>
            </div>
            <p style="color: #3f3f46;">Keep spreading the knowledge! 🚀</p>
        </div>
        """
        
        mail.send(msg)
        
        return jsonify({'message': 'Subscription successful'}), 200

    except Exception as e:
        print(f"Error processing subscription: {str(e)}")
        return jsonify({'message': 'Error processing subscription'}), 500

@app.route('/api/strava/activities')
def get_strava_activities():
    try:
        # Check if Strava is configured before attempting to fetch
        if not all([os.getenv('STRAVA_CLIENT_ID'), 
                   os.getenv('STRAVA_CLIENT_SECRET'), 
                   os.getenv('STRAVA_REFRESH_TOKEN')]):
            return jsonify({
                "error": "Strava API not configured",
                "message": "Missing required environment variables: STRAVA_CLIENT_ID, STRAVA_CLIENT_SECRET, STRAVA_REFRESH_TOKEN",
                "details": "Please configure Strava API credentials in your environment variables"
            }), 503  # Service Unavailable
        
        activities = get_cached_activities()
        return jsonify(activities)
    except ValueError as e:
        # Handle configuration errors gracefully
        error_message = str(e)
        if "Missing required environment variables" in error_message:
            return jsonify({
                "error": "Strava API not configured",
                "message": error_message,
                "details": "Please configure Strava API credentials in your environment variables"
            }), 503
        else:
            return jsonify({
                "error": "Configuration error",
                "message": error_message
            }), 500
    except Exception as e:
        error_details = {
            "error": "Failed to fetch activities",
            "message": str(e),
            "type": type(e).__name__
        }
        logger.error(f"Error in /api/strava/activities endpoint: {error_details}")
        logger.error(traceback.format_exc())
        return jsonify(error_details), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000) 