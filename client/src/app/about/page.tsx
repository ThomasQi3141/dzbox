"use client";

import { motion } from "framer-motion";
import Navbar from "@/app/__components/Navbar";
import Footer from "@/app/__components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex flex-col">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative flex-grow">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-40 -left-32 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-6">
              About DzBox
            </h1>
            <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto">
              Revolutionizing file sharing with blockchain technology
            </p>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-gray-400 leading-relaxed">
              DzBox is on a mission to transform the way we share and store
              files. By leveraging blockchain technology, we're creating a
              decentralized platform that puts control back in the hands of
              users. Our platform ensures secure, private, and efficient file
              sharing while maintaining complete transparency and trust.
            </p>
          </motion.div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">
                  Decentralized Storage
                </h3>
                <p className="text-gray-400">
                  Files are distributed across a secure network, ensuring
                  maximum uptime and reliability.
                </p>
              </div>
              <div className="p-6 bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold text-pink-400 mb-3">
                  End-to-End Encryption
                </h3>
                <p className="text-gray-400">
                  Your files are encrypted before they leave your device,
                  ensuring complete privacy.
                </p>
              </div>
              <div className="p-6 bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold text-red-400 mb-3">
                  Smart Contracts
                </h3>
                <p className="text-gray-400">
                  Automated, transparent agreements for file sharing and
                  monetization.
                </p>
              </div>
              <div className="p-6 bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">
                  User Control
                </h3>
                <p className="text-gray-400">
                  Complete control over your files, with customizable sharing
                  permissions.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Technology Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-6">
              Our Technology
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700 text-center">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">
                  IPFS
                </h3>
                <p className="text-gray-400">
                  InterPlanetary File System for distributed storage
                </p>
              </div>
              <div className="p-6 bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700 text-center">
                <h3 className="text-xl font-semibold text-pink-400 mb-3">
                  Ethereum
                </h3>
                <p className="text-gray-400">
                  Smart contracts for secure transactions
                </p>
              </div>
              <div className="p-6 bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700 text-center">
                <h3 className="text-xl font-semibold text-red-400 mb-3">
                  Web3
                </h3>
                <p className="text-gray-400">
                  Next-generation decentralized applications
                </p>
              </div>
            </div>
          </motion.div>

          {/* Community Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-6">
              Join Our Community
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              We're building a community of users who believe in the power of
              decentralized technology. Join us in shaping the future of file
              sharing.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">
                  Open Source
                </h3>
                <p className="text-gray-400">
                  Our code is open source and available on GitHub. Contribute to
                  the project and help us improve.
                </p>
              </div>
              <div className="p-6 bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold text-pink-400 mb-3">
                  Community Driven
                </h3>
                <p className="text-gray-400">
                  Join our Discord community to connect with other users and
                  developers.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutPage;
