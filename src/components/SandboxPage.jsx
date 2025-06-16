import React from 'react';
import WorkoutHistory from './WorkoutHistory';

const SandboxPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          My Sandbox
        </h1>
        <div className="space-y-8">
          <WorkoutHistory />
        </div>
      </div>
    </div>
  );
};

export default SandboxPage; 