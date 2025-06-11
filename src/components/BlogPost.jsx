import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BlogPost = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState(null);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/subscribe', {
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
    <article className="min-h-screen bg-zinc-200 dark:bg-zinc-900 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
            Agentic AI: The Rise of Your Next "Digital Teammate"
          </h1>
          
          {/* Author Details */}
          <div className="flex items-center space-x-4 mb-6">

            <div>
              <p className="font-medium text-zinc-900 dark:text-white">Ammar Tauqir</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Software Developer & AI Enthusiast</p>
            </div>
          </div>

          <div className="flex items-center text-zinc-600 dark:text-zinc-400">
            <span className="mr-4">9th June 2025</span>
            <span>•</span>
            <span className="ml-4">5 min read</span>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-lg dark:prose-invert max-w-none"
        >
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
              A Day in the Life—with an AI Intern
            </h2>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Imagine this: it's Monday morning. You open your inbox to find a project update drafted, 
              highlighted priorities laid out, and a bug fix proposal already awaiting review—all handled 
              by an AI agent you'd briefly chatted with last week. It's not perfect, but it's proactive. 
              It thinks, it learns, it acts on multi-step tasks. It doesn't replace your job — it augments it.
            </p>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mt-4">
              That's Agentic AI: not a reactive chatbot, but a self-directed digital intern that executes 
              tasks and learns from feedback—a true junior team member, not just a tool.
            </p>
          </section>

          {/* What Makes It Tick */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
              What Makes It Tick
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-zinc-900 dark:text-white mr-2">•</span>
                <span className="text-zinc-700 dark:text-zinc-300">
                  <strong>Reasoning & Planning:</strong> Agentic AI connects the dots—formulating goals, 
                  laying out steps, and anticipating roadblocks.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-zinc-900 dark:text-white mr-2">•</span>
                <span className="text-zinc-700 dark:text-zinc-300">
                  <strong>Tool Use:</strong> It talks to APIs, databases, file systems—turning abstract 
                  intent into concrete action.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-zinc-900 dark:text-white mr-2">•</span>
                <span className="text-zinc-700 dark:text-zinc-300">
                  <strong>Adaptation:</strong> Finds errors, tweaks itself, refines its strategy—learning on the go.
                </span>
              </li>
            </ul>
            <p className="text-zinc-700 dark:text-zinc-300 mt-4 italic">
              In simple terms: It's like having a junior employee who actually thinks, not just follows instructions.
            </p>
          </section>

          {/* Real-World Examples */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
              Behind the Scenes: Real-World Agents
            </h2>
            <div className="space-y-6">
              <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                  NVIDIA's Morpheus
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300">
                  Automatically detects and stops cybersecurity threats in real time—guarding systems while you sleep.
                </p>
              </div>
              <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                  Adobe Express
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300">
                  Now has an agentic assistant that crafts visual campaigns, suggesting fonts, layouts, 
                  even posting-ready motion graphics.
                </p>
              </div>
              <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                  Amazon's Robotics
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300">
                  Building agents that understand natural commands to orchestrate warehouse operations, 
                  turning orders into actions.
                </p>
              </div>
            </div>
          </section>

          {/* Sam Altman Quote */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
              Sam Altman: AI Agents = Junior Employee Team
            </h2>
            <blockquote className="border-l-4 border-zinc-300 dark:border-zinc-700 pl-6 py-2">
              <p className="text-zinc-700 dark:text-zinc-300 italic">
                "It sounds a lot like how [people] work with a team of still relatively junior employees"
              </p>
              <footer className="text-zinc-600 dark:text-zinc-400 mt-2">
                — Sam Altman, OpenAI
              </footer>
            </blockquote>
          </section>

          {/* Why It Matters */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
              Why It Matters — for You & Me
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                  Boosts Productivity
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300">
                  Mundane tasks—emails, tickets, basic code—get off your plate. You focus on creative and strategic work.
                </p>
              </div>
              <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                  Level Playing Field
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300">
                  Small businesses get access to sophisticated workflows once reserved for enterprises—no long development cycles.
                </p>
              </div>
              <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                  New Career Paths
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300">
                  Say hello to roles like AI Agent Engineer, Agent Orchestrator, and Agent Supervisor.
                </p>
              </div>
              <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                  Creative Superpowers
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300">
                  Imagine your TikTok content calendar designed, generated, edited, and published—all by agentic assistants you built.
                </p>
              </div>
            </div>
          </section>

          {/* Challenges */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
              The Flip Side: Challenges & Risks
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-zinc-900 dark:text-white mr-2">•</span>
                <div>
                  <strong className="text-zinc-900 dark:text-white">Trust & Liability</strong>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    If your agent goes rogue—who's responsible? Governance is critical.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-zinc-900 dark:text-white mr-2">•</span>
                <div>
                  <strong className="text-zinc-900 dark:text-white">Human Reaction</strong>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    Tenured staff may resist digital interns; newcomers often embrace them—shift management is key.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-zinc-900 dark:text-white mr-2">•</span>
                <div>
                  <strong className="text-zinc-900 dark:text-white">Ethical Guardrails</strong>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    Fairness, privacy, transparency—these aren't optional. They need design from Day 1.
                  </p>
                </div>
              </div>
            </div>
          </section>


          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
              Final Word
            </h2>
            <p className="text-zinc-700 dark:text-zinc-300">
              Agentic AI is not "AI hype." It's a paradigm shift—from AI as tool, to AI as thinking teammate. 
              Those who learn to build, guide, and audit these agents will redefine how we work, learn, and create.
            </p>
          </section>

          {/* References */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
              References
            </h2>
            <div className="space-y-4">
              <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                  Sam Altman on AI Agents
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300 mb-2">
                  Business Insider (2025). "Sam Altman is betting an AI agent could soon become your coworker"
                </p>
                <a 
                  href="https://www.businessinsider.com/sam-altman-betting-ai-agent-could-soon-become-your-coworker-2025-6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zinc-900 dark:text-white hover:underline"
                >
                  Read the full article →
                </a>
              </div>

              <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                  Amazon's AI-Driven Warehouse Innovation
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300 mb-2">
                  Reuters (2025). "Amazon's delivery logistics will get an AI boost"
                </p>
                <a 
                  href="https://www.reuters.com/business/retail-consumer/amazons-delivery-logistics-will-get-an-ai-boost-2025-06-04/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zinc-900 dark:text-white hover:underline"
                >
                  Read the full article →
                </a>
              </div>

              <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                  Amazon's Agentic AI Group
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300 mb-2">
                  Investopedia (2025). "Amazon Launches Agentic AI Group to Enhance Its Warehouse Robots"
                </p>
                <a 
                  href="https://www.investopedia.com/amazon-launches-agentic-ai-group-to-enhance-its-warehouse-robots-reports-say-11749004" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zinc-900 dark:text-white hover:underline"
                >
                  Read the full article →
                </a>
              </div>

              <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                  AI Regulation Insights
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300 mb-2">
                  Financial Times (2025). "The Future of AI Regulation" by Gaia Marcus, Ada Lovelace Institute
                </p>
                <a 
                  href="https://www.ft.com/content/c572a796-258b-433f-b005-9a3ff6f56062" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zinc-900 dark:text-white hover:underline"
                >
                  Read the full article →
                </a>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="p-8 rounded-lg text-center">
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
          </section>
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
    </article>
  );
};

export default BlogPost; 