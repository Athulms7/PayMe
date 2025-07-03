import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10 flex items-center justify-center">
      <div className="max-w-3xl bg-white p-8 rounded-xl shadow-md text-center">
        <h1 className="text-3xl font-bold text-gray-600 mb-4">About Us</h1>
        <p className="text-gray-700 text-lg mb-6">
          PayMe is a fast, secure, and user-friendly payment platform that allows you to send, receive, and manage money effortlessly. Whether you’re splitting bills, paying friends, or handling business payments, PayMe makes it seamless.
        </p>
        <div className="text-left text-gray-600 text-sm">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h2>
          <p className="mb-4">
            We aim to empower individuals and businesses by simplifying digital transactions. With PayMe, we believe in financial freedom, transparency, and trust.
          </p>
          
        </div>
        <p className="mt-8 text-sm text-gray-400">© {new Date().getFullYear()} PayMe. All rights reserved.</p>
      </div>
    </div>
  );
};

export default AboutPage;
