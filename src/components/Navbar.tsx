
import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <header className="bg-black text-white py-4 px-6 w-full">
      <div className="w-full px-4 xl:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-10">
            <Link to="/" className="flex items-center">
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 10V3L4 14H11V21L20 10H13Z" fill="currentColor"/>
              </svg>
              <span className="text-xl font-semibold">LuckyJob</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link to="/find-job" className="text-sm text-gray-300 hover:text-white transition-colors duration-200">
                Find job
              </Link>
              {['Messages', 'Hiring', 'Community', 'FAQ'].map((item) => (
                <Link 
                  key={item} 
                  to={`/${item.toLowerCase()}`}
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
