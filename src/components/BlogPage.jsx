import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const BlogPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState(null);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('http://localhost:5000/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Subscription failed');
      }

      setSubscriptionStatus("success");
      setEmail("");
    } catch (error) {
      console.error('Subscription error:', error);
      setSubscriptionStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-200 dark:bg-zinc-900 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-8">
            Latest Articles
          </h1>

          {/* Blog Post Preview */}
          <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 mb-8 shadow-sm">
            <Link 
              to="/blog/agentic-ai"
              className="block hover:opacity-90 transition-opacity"
            >
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
                Agentic AI: The Rise of Your Next "Digital Teammate"
              </h2>
            </Link>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              Explore how AI agents are transforming from simple tools into proactive digital teammates, 
              capable of reasoning, planning, and learning from feedback.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-zinc-500 dark:text-zinc-400">9th June 2025</span>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">5 min read</span>
              </div>
              <Link 
                to="/blog/agentic-ai"
                className="text-zinc-900 dark:text-white hover:underline"
              >
                Read More →
              </Link>
            </div>
          </div>

          {/* More articles coming soon */}
          <div className="text-center py-12">
            <p className="text-zinc-600 dark:text-zinc-400 mb-8">
              More articles coming soon...
            </p>

            {/* Subscribe Section */}
            <div className="bg-white dark:bg-zinc-800 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
                Want to Learn More?
              </h3>
              <p className="text-zinc-700 dark:text-zinc-300 mb-6">
                Subscribe to <strong className="text-zinc-900 dark:text-white">Neuron Notes</strong> — because your brain deserves better input than just cat videos and conspiracy theories.
              </p>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-6 py-3 rounded-lg font-semibold transition-colors hover:bg-zinc-800 dark:hover:bg-zinc-100"
              >
                Subscribe Now
              </button>
            </div>
          </div>
        </motion.div>

        {/* Subscription Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
              onClick={() => setIsModalOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white dark:bg-zinc-800 rounded-lg p-6 max-w-md w-full"
                onClick={e => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                    Subscribe to Neuron Notes
                  </h3>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {subscriptionStatus === "success" ? (
                  <div className="text-center py-4">
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                      Welcome to Neuron Notes!
                    </h4>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      Your first dose of brain food is on its way.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white focus:ring-2 focus:ring-zinc-500 dark:focus:ring-zinc-400 focus:border-transparent"
                        placeholder="you@example.com"
                      />
                    </div>
                    {subscriptionStatus === "error" && (
                      <p className="text-red-600 dark:text-red-400 text-sm">
                        Something went wrong. Please try again.
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-6 py-3 rounded-lg font-semibold transition-colors hover:bg-zinc-800 dark:hover:bg-zinc-100 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white dark:text-zinc-900" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Subscribing...
                        </span>
                      ) : (
                        "Subscribe"
                      )}
                    </button>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 text-center">
                      By subscribing, you agree to receive our newsletter and updates. You can unsubscribe at any time.
                    </p>
                  </form>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BlogPage; 