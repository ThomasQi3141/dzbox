"use client";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gray-800 bg-black/20 backdrop-blur-lg">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-40 -right-32 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Thomas Qi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
