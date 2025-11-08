# Local Development Setup Guide

This guide will help you run the portfolio website locally on your machine.

## Prerequisites

- **Node.js** (v18.x or higher) - [Download](https://nodejs.org/)
- **Python** (3.8 or higher) - [Download](https://www.python.org/downloads/)
- **Git** - [Download](https://git-scm.com/downloads)

## Step 1: Clone the Repository

```bash
git clone <your-repo-url>
cd ammarta-frontend
```

## Step 2: Backend Setup (Flask)

### 2.1 Install Python Dependencies

```bash
# Create a virtual environment (recommended)
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

### 2.2 Configure Environment Variables

Create a `.env` file in the root directory:

```env
# Email Configuration (for newsletter subscriptions and contact form)
EMAIL_USER=your-email@gmail.com
EMAIL_APP_PASSWORD=your-gmail-app-password

# Strava API Configuration (optional - only needed for workout history feature)
STRAVA_CLIENT_ID=your-strava-client-id
STRAVA_CLIENT_SECRET=your-strava-client-secret
STRAVA_REFRESH_TOKEN=your-strava-refresh-token
```

**Getting Gmail App Password:**
1. Go to your Google Account settings
2. Enable 2-Step Verification
3. Go to App Passwords
4. Generate a new app password for "Mail"
5. Use this password in `EMAIL_APP_PASSWORD`

**Getting Strava API Credentials (Optional):**
1. Go to https://www.strava.com/settings/api
2. Create an application
3. Note your Client ID and Client Secret
4. Complete OAuth flow to get Refresh Token

### 2.3 Run the Backend Server

```bash
python app.py
```

The backend will run on `http://localhost:5000`

## Step 3: Frontend Setup (React)

### 3.1 Install Node Dependencies

Open a **new terminal window** (keep the backend running):

```bash
npm install
```

### 3.2 Run the Frontend Development Server

```bash
npm start
```

The frontend will automatically open in your browser at `http://localhost:3000`

## Step 4: Verify Everything Works

1. **Backend Health Check:**
   - Visit: http://localhost:5000/api/info
   - Should return: `{"message": "Ammar Tauqir Portfolio API is running!"}`

2. **Frontend:**
   - Should automatically open at http://localhost:3000
   - The site should load with all sections visible

3. **API Integration:**
   - The frontend will automatically use `http://localhost:5000` when running locally
   - No configuration needed - it detects localhost automatically

## Troubleshooting

### Backend Issues

**Port 5000 already in use:**
```bash
# Windows: Find and kill process on port 5000
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# macOS/Linux: Find and kill process on port 5000
lsof -ti:5000 | xargs kill
```

**Module not found errors:**
- Make sure virtual environment is activated
- Run `pip install -r requirements.txt` again

**Email not sending:**
- Verify Gmail app password is correct
- Check that 2-Step Verification is enabled
- Ensure `EMAIL_USER` and `EMAIL_APP_PASSWORD` are set correctly

### Frontend Issues

**Port 3000 already in use:**
- React will automatically ask to use a different port
- Or manually set: `PORT=3001 npm start`

**API calls failing:**
- Ensure backend is running on port 5000
- Check browser console for CORS errors
- Verify backend is accessible at http://localhost:5000/api/info

**Strava workout data not loading:**
- This is expected if Strava credentials are not configured
- The app will show a graceful error message
- To enable: Add Strava credentials to `.env` file

## Development Workflow

1. **Start Backend:**
   ```bash
   cd <project-root>
   python app.py
   ```

2. **Start Frontend (in new terminal):**
   ```bash
   cd <project-root>
   npm start
   ```

3. **Make Changes:**
   - Frontend: Changes auto-reload (Hot Module Replacement)
   - Backend: Restart Flask server after code changes (or use a tool like `flask run` with auto-reload)

## Available Scripts

### Frontend:
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run tailwind:build` - Build Tailwind CSS
- `npm run tailwind:watch` - Watch Tailwind CSS changes

### Backend:
- `python app.py` - Run Flask development server
- `gunicorn app:app -c gunicorn_config.py` - Run production server (for testing)

## Project Structure

```
ammarta-frontend/
├── app.py                 # Flask backend server
├── strava_service.py      # Strava API integration
├── requirements.txt       # Python dependencies
├── Procfile              # Production deployment config
├── gunicorn_config.py     # Gunicorn server config
├── src/                   # React frontend source
│   ├── components/        # React components
│   ├── config/            # Configuration files (API endpoints)
│   └── ...
├── package.json           # Node.js dependencies
└── .env                   # Environment variables (create this)
```

## Next Steps

- Customize the portfolio content in `src/components/`
- Add more API endpoints in `app.py`
- Configure Strava API for workout history feature
- Deploy to production when ready

## Need Help?

- Check the error messages in terminal/console
- Verify all environment variables are set
- Ensure both servers are running
- Check that ports 3000 and 5000 are available

