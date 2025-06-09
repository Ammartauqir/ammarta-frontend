import React from 'react';

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 pt-24 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
        
        <div className="space-y-8">
          {/* Blog posts will be mapped here */}
          <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md hover:shadow-lg dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-2">Coming Soon</h2>
            <p className="text-zinc-600 dark:text-zinc-300">
              I'm currently working on some interesting articles about software development, 
              robotics, and machine learning. Stay tuned for updates!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage; 