import React, { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { format, parseISO } from 'date-fns';
import { API_ENDPOINTS } from '../config/api';

const WorkoutHistory = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedActivity, setSelectedActivity] = useState(null);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        console.log('Fetching activities from Strava...');
        const response = await fetch(API_ENDPOINTS.STRAVA_ACTIVITIES);
        console.log('Response status:', response.status);
        
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(`Failed to fetch activities: ${response.status} ${response.statusText} ${JSON.stringify(errorData)}`);
        }
        
        const data = await response.json();
        console.log('Received activities:', data);
        setActivities(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching activities:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchActivities();
    // Refresh data every 6 hours
    const interval = setInterval(fetchActivities, 6 * 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const formatDistance = (meters) => {
    return (meters / 1000).toFixed(2);
  };

  const formatDuration = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };

  const formatSpeed = (mps) => {
    return (mps * 3.6).toFixed(2); // Convert m/s to km/h
  };

  const chartData = activities.map(activity => ({
    date: format(parseISO(activity.start_date), 'MMM dd'),
    distance: formatDistance(activity.distance),
    duration: activity.moving_time / 60, // Convert to minutes
    speed: formatSpeed(activity.average_speed),
    ...activity
  }));

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          Workout History
        </h2>
        <div className="text-red-500 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
          <p className="font-semibold mb-2">Error loading workout data</p>
          <p className="text-sm">{error}</p>
          <p className="text-sm mt-2">
            This could be because:
            <ul className="list-disc list-inside mt-1">
              <li>The Strava API integration is not set up yet</li>
              <li>The backend service is not running</li>
              <li>There might be an issue with the API credentials</li>
            </ul>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        Workout History
      </h2>
      
      <div className="h-[400px] mb-8">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            onClick={(data) => {
              if (data && data.activePayload) {
                setSelectedActivity(data.activePayload[0].payload);
              }
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
            <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
            <Tooltip />
            <Legend />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="distance"
              stroke="#8884d8"
              name="Distance (km)"
              activeDot={{ r: 8 }}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="speed"
              stroke="#82ca9d"
              name="Speed (km/h)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {selectedActivity && (
        <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            {selectedActivity.name}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Distance</p>
              <p className="text-lg font-medium text-gray-900 dark:text-white">
                {selectedActivity.distance} km
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Duration</p>
              <p className="text-lg font-medium text-gray-900 dark:text-white">
                {formatDuration(selectedActivity.moving_time)}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Avg Speed</p>
              <p className="text-lg font-medium text-gray-900 dark:text-white">
                {selectedActivity.speed} km/h
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Elevation Gain</p>
              <p className="text-lg font-medium text-gray-900 dark:text-white">
                {selectedActivity.total_elevation_gain} m
              </p>
            </div>
          </div>
          {selectedActivity.description && (
            <div className="mt-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">Description</p>
              <p className="text-gray-900 dark:text-white">{selectedActivity.description}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WorkoutHistory; 