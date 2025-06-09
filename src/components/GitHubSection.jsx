import React from "react";
import { motion } from "framer-motion";

const GitHubSection = () => {
  return (
    <section className="bg-zinc-100 dark:bg-zinc-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
            GitHub Activity
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Check out my open-source contributions and coding journey on GitHub
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-1 items-center">
          {/* GitHub Stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-zinc-800 rounded-xl shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">
              Contribution Activity
            </h3>
            <img
              src="https://ghchart.rshah.org/ammartauqir"
              alt="GitHub Contribution Chart"
              className="w-full rounded-lg"
            />
          </motion.div>

          {/* GitHub Profile Link */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white dark:bg-zinc-800 rounded-xl shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">
              Connect on GitHub
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6">
              Follow my coding journey, explore my repositories, and let's collaborate on exciting projects.
            </p>
            <a
              href="https://github.com/ammartauqir"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              Visit My GitHub Profile
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GitHubSection; 