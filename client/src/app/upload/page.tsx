"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/app/__components/Navbar";
import Footer from "@/app/__components/Footer";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB in bytes

const TTL_OPTIONS = [
  { label: "1 minute", value: 60 },
  { label: "5 minutes", value: 300 },
  { label: "15 minutes", value: 900 },
  { label: "1 hour", value: 3600 },
  { label: "6 hours", value: 21600 },
  { label: "12 hours", value: 43200 },
  { label: "1 day", value: 86400 },
  { label: "Custom", value: "custom" },
];

const ENCRYPTION_OPTIONS = [
  { label: "No Encryption", value: "none" },
  { label: "RSA (2048-bit)", value: "rsa" },
  { label: "AES-256", value: "aes" },
  { label: "ChaCha20", value: "chacha" },
];

const UploadPage = () => {
  const [step, setStep] = useState(1);
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [ttlError, setTtlError] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [config, setConfig] = useState({
    ttl: TTL_OPTIONS[0].value,
    customTtl: "",
    encryption: ENCRYPTION_OPTIONS[0].value,
    password: "",
  });

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

  const handleConfigChange = (key: string, value: string | number) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  };

  const handleCustomTtlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      // Only allow numbers
      handleConfigChange("customTtl", value);
    }
  };

  const getTtlValue = () => {
    if (config.ttl === "custom") {
      return config.customTtl ? parseInt(config.customTtl) : 0;
    }
    return config.ttl as number;
  };

  const validateTtl = () => {
    const ttlValue = getTtlValue();
    if (ttlValue < 60) {
      setTtlError("Time to Live must be at least 1 minute (60 seconds)");
      return false;
    }
    if (ttlValue > 86400) {
      setTtlError("Time to Live cannot exceed 1 day (86400 seconds)");
      return false;
    }
    setTtlError(null);
    return true;
  };

  const handleStep2Next = () => {
    if (validateTtl()) {
      setStep(3);
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

  const renderStep1 = () => (
    <motion.div
      key="step1"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="text-center">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-6">
        Upload Your Files
      </h1>
      <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto">
        Drag and drop your files here or click to browse
      </p>
      <p className="mt-2 text-sm text-gray-500">Maximum file size: 5MB</p>

      <div
        className={`relative p-12 border-2 border-dashed rounded-xl transition-all duration-300 mt-10 ${
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
                <p className="font-medium text-gray-400">Drop your file here</p>
                <p className="mt-1 text-gray-400">or click to browse</p>
              </>
            )}
          </div>
        </div>
      </div>

      <button
        onClick={() => setStep(2)}
        disabled={!file || !!error}
        className="mt-6 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg 
                 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105
                 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 cursor-pointer
                 disabled:opacity-50 disabled:cursor-not-allowed">
        Continue
      </button>
    </motion.div>
  );

  const renderStep2 = () => (
    <motion.div
      key="step2"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="text-center">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-6 leading-tight">
        Configure Your Upload
      </h1>
      <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
        Customize your file settings
      </p>

      <div className="mt-10 space-y-8 max-w-md mx-auto pb-8">
        {/* Time to Live Selector */}
        <div className="text-left">
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Time to Live
          </label>
          <select
            value={config.ttl}
            onChange={(e) => {
              handleConfigChange("ttl", e.target.value);
              setTtlError(null);
            }}
            className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-lg
                     text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                     transition-all duration-300 appearance-none [&>option]:bg-gray-800 [&>option]:text-gray-300">
            {TTL_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          {config.ttl === "custom" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4">
              <input
                type="text"
                value={config.customTtl}
                onChange={(e) => {
                  handleCustomTtlChange(e);
                  setTtlError(null);
                }}
                placeholder="Enter time in seconds"
                className={`w-full px-4 py-3 bg-gray-800/50 backdrop-blur-lg border rounded-lg
                         text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                         transition-all duration-300 [&::placeholder]:text-gray-500
                         ${ttlError ? "border-red-500" : "border-gray-700"}`}
              />
              <p className="mt-2 text-sm text-gray-500">
                Enter the number of seconds (minimum 60, maximum 86400)
              </p>
              {ttlError && (
                <p className="mt-2 text-sm text-red-500">{ttlError}</p>
              )}
            </motion.div>
          )}
        </div>

        {/* Encryption Selector */}
        <div className="text-left">
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Encryption
          </label>
          <select
            value={config.encryption}
            onChange={(e) => handleConfigChange("encryption", e.target.value)}
            className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-lg
                     text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                     transition-all duration-300 appearance-none [&>option]:bg-gray-800 [&>option]:text-gray-300">
            {ENCRYPTION_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Password Input */}
        <div className="text-left">
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Password (Optional)
          </label>
          <input
            type="password"
            value={config.password}
            onChange={(e) => handleConfigChange("password", e.target.value)}
            placeholder="Enter password to protect your file"
            className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-lg
                     text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                     transition-all duration-300 [&::placeholder]:text-gray-500"
          />
        </div>
      </div>

      <div className="mt-10 flex justify-center space-x-4">
        <button
          onClick={() => setStep(1)}
          className="px-8 py-4 bg-gray-800/50 text-white font-semibold rounded-lg 
                   hover:bg-gray-700 transition-all duration-300 transform hover:scale-105
                   focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900">
          Back
        </button>
        <button
          onClick={handleStep2Next}
          disabled={!!ttlError}
          className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg 
                   hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105
                   focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900
                   disabled:opacity-50 disabled:cursor-not-allowed">
          Next
        </button>
      </div>
    </motion.div>
  );

  const renderStep3 = () => (
    <motion.div
      key="step3"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="text-center">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-6 leading-tight">
        Confirm Upload Details
      </h1>
      <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
        Review your file and settings before uploading
      </p>

      <div className="mt-10 space-y-8 max-w-md mx-auto pb-8">
        <div className="p-6 bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700">
          <h3 className="text-xl font-semibold text-purple-400 mb-4">
            File Details
          </h3>
          <div className="space-y-4 text-left">
            <div>
              <p className="text-sm text-gray-400">File Name</p>
              <p className="text-white">{file?.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">File Size</p>
              <p className="text-white">
                {(file?.size ? file.size / 1024 / 1024 : 0).toFixed(2)} MB
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Time to Live</p>
              <p className="text-white">
                {config.ttl === "custom"
                  ? `${config.customTtl} seconds`
                  : TTL_OPTIONS.find((opt) => opt.value === config.ttl)?.label}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Encryption</p>
              <p className="text-white">
                {
                  ENCRYPTION_OPTIONS.find(
                    (opt) => opt.value === config.encryption
                  )?.label
                }
              </p>
            </div>
            {config.password && (
              <div>
                <p className="text-sm text-gray-400">Password Protected</p>
                <p className="text-white">Yes</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-center space-x-4">
        <button
          onClick={() => setStep(2)}
          className="px-8 py-4 bg-gray-800/50 text-white font-semibold rounded-lg 
                   hover:bg-gray-700 transition-all duration-300 transform hover:scale-105
                   focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900">
          Back
        </button>
        <button
          onClick={handleUpload}
          className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg 
                   hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105
                   focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900">
          Upload File
        </button>
      </div>
    </motion.div>
  );

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
          <AnimatePresence mode="wait">
            {step === 1 && renderStep1()}
            {step === 2 && renderStep2()}
            {step === 3 && renderStep3()}
          </AnimatePresence>

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
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default UploadPage;
