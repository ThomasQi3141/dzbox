"use client";

import { motion } from "framer-motion";
import Navbar from "@/app/__components/Navbar";
import Footer from "@/app/__components/Footer";

const FeaturesPage = () => {
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
              Features
            </h1>
            <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto">
              Discover the powerful features that make DzBox the future of file
              sharing
            </p>
          </motion.div>

          {/* Upload Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-16">
            <h2 className="text-3xl font-bold text-white mb-8">
              Upload Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">
                  Secure Transfer
                </h3>
                <p className="text-gray-400">
                  Your files are encrypted during transfer and storage, ensuring
                  complete privacy.
                </p>
              </div>
              <div className="p-6 bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold text-pink-400 mb-3">
                  Fast Uploads
                </h3>
                <p className="text-gray-400">
                  Our distributed network ensures quick and reliable file
                  transfers.
                </p>
              </div>
              <div className="p-6 bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold text-red-400 mb-3">
                  Easy Sharing
                </h3>
                <p className="text-gray-400">
                  Generate secure links to share your files with anyone,
                  anywhere.
                </p>
              </div>
              <div className="p-6 bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">
                  File Management
                </h3>
                <p className="text-gray-400">
                  Track and manage your uploads with our intuitive dashboard.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Security Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-16">
            <h2 className="text-3xl font-bold text-white mb-8">
              Security Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">
                  End-to-End Encryption
                </h3>
                <p className="text-gray-400">
                  Your files are encrypted before they leave your device,
                  ensuring complete privacy.
                </p>
              </div>
              <div className="p-6 bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold text-pink-400 mb-3">
                  Decentralized Storage
                </h3>
                <p className="text-gray-400">
                  Files are distributed across a secure network, ensuring
                  maximum uptime and reliability.
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

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-16">
            <h2 className="text-3xl font-bold text-white mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="p-6 bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-3">
                  What types of files can I upload?
                </h3>
                <p className="text-gray-400">
                  You can upload any type of file, as long as it's under 5MB in
                  size. We support documents, images, videos, and more.
                </p>
              </div>
              <div className="p-6 bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-3">
                  How secure is my data?
                </h3>
                <p className="text-gray-400">
                  Your files are encrypted end-to-end and stored across our
                  decentralized network, ensuring maximum security and privacy.
                </p>
              </div>
              <div className="p-6 bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Can I share my files with others?
                </h3>
                <p className="text-gray-400">
                  Yes! You can generate secure links to share your files with
                  anyone. You can also set expiration dates and access
                  permissions.
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

export default FeaturesPage;
