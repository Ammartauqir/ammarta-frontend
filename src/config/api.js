// API Configuration
// Automatically detects if running locally or in production
const isDevelopment = process.env.NODE_ENV === 'development' || 
                     window.location.hostname === 'localhost' || 
                     window.location.hostname === '127.0.0.1';

const API_BASE_URL = isDevelopment 
  ? 'http://localhost:5000' 
  : 'https://ammarta-backend.onrender.com';

export const API_ENDPOINTS = {
  BASE_URL: API_BASE_URL,
  SUBSCRIBE: `${API_BASE_URL}/api/subscribe`,
  STRAVA_ACTIVITIES: `${API_BASE_URL}/api/strava/activities`,
  CONTACT: `${API_BASE_URL}/api/contact`,
  INFO: `${API_BASE_URL}/api/info`,
};

export default API_ENDPOINTS;

