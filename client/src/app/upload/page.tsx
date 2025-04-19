"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/app/__components/Navbar";
import Footer from "@/app/__components/Footer";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB in bytes

const UploadPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const validateFile = (file: File) => {
    if (file.size > MAX_FILE_SIZE) {
      setError("File size must be less than 5MB");
      return false;
    }
    setError(null);
    return true;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (validateFile(selectedFile)) {
        setFile(selectedFile);
      } else {
        setFile(null);
      }
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      if (validateFile(droppedFile)) {
        setFile(droppedFile);
      } else {
        setFile(null);
      }
    }
  };

  const handleUpload = () => {
    if (!file) return;

    setIsUploading(true);
    setUploadProgress(0);

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 500);

    // In a real implementation, you would handle the actual file upload here
    // and update the progress based on the actual upload status
  };

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

        {/* Upload Section */}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-6">
              Upload Your Files
            </h1>
            <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto">
              Drag and drop your files here or click to browse
            </p>
            <p className="mt-2 text-sm text-gray-500">Maximum file size: 5MB</p>

            {/* Upload Area */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-10">
              <div
                className={`relative p-12 border-2 border-dashed rounded-xl transition-all duration-300 ${
                  isDragging
                    ? "border-purple-500 bg-purple-500/10"
                    : error
                    ? "border-red-500"
                    : "border-gray-700 hover:border-purple-500"
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}>
                <input
                  type="file"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={handleFileChange}
                />
                <div className="text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    />
                  </svg>
                  <div className="mt-4 text-sm">
                    {file ? (
                      <p className="font-medium text-purple-400">{file.name}</p>
                    ) : error ? (
                      <p className="font-medium text-red-400">{error}</p>
                    ) : (
                      <>
                        <p className="font-medium text-gray-400">
                          Drop your file here
                        </p>
                        <p className="mt-1 text-gray-400">or click to browse</p>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Upload Button */}
              <button
                onClick={handleUpload}
                className="mt-6 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg 
                         hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105
                         focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 cursor-pointer
                         disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!file || !!error || isUploading}>
                {isUploading ? "Uploading..." : "Upload File"}
              </button>

              {/* Upload Progress */}
              {isUploading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-400">
                      Upload Progress
                    </span>
                    <span className="text-sm font-medium text-purple-400">
                      {uploadProgress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2.5 rounded-full transition-all duration-300"
                      style={{ width: `${uploadProgress}%` }}></div>
                  </div>
                  <div className="mt-2 text-sm text-gray-400">
                    {uploadProgress < 100
                      ? "Uploading your file..."
                      : "Upload complete!"}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default UploadPage;
