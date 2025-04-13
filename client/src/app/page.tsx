"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "./__components/Navbar";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <main className="relative">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-40 -left-32 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-6">
              Upload, Download & Monetize Files,{" "}
              <span className="block mt-2">Decentralized</span>
            </h1>
            <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto">
              A secure, decentralized alternative to traditional file uploads.
              Take control of your data with blockchain technology.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-10">
              <button
                onClick={() => router.push("/upload")}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg 
                         hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105
                         focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 cursor-pointer">
                Get Started
              </button>
            </motion.div>

            {/* Stats Section */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="p-6 bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700">
                <div className="text-3xl font-bold text-purple-400">100%</div>
                <div className="mt-2 text-gray-400">Decentralized</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="p-6 bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700">
                <div className="text-3xl font-bold text-pink-400">24/7</div>
                <div className="mt-2 text-gray-400">Availability</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="p-6 bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700">
                <div className="text-3xl font-bold text-red-400">Secure</div>
                <div className="mt-2 text-gray-400">End-to-End</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
