import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Landing = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center px-4">
        <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Task Manager
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Organize your tasks efficiently and boost your productivity
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            {isAuthenticated ? (
              <Link
                to="/dashboard"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg"
              >
                Go to Dashboard
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;