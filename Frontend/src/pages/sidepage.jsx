import React from 'react';

const WelcomeMessage = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center px-4">
      <div className="max-w-2xl text-center p-3">
        <blockquote className="text-2xl font-semibold text-gray-800 leading-snug">
          "Welcome to <span className="text-blue-300">PayMe</span>, your trusted platform for managing 
          seamless and secure transactions. We’re excited to have you onboard!"
        </blockquote>
        <p className="mt-4 text-lg text-gray-900 font-medium">Team PayMe</p>
        <p className="text-sm text-gray-500">Secure • Reliable • Fast</p>
      </div>
    </div>
  );
};

export default WelcomeMessage;
