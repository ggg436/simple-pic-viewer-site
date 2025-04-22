
import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

const jobTitles = [
  "Senior Data Scientist",
  "Software Engineer",
  "Product Manager",
  "UX Designer",
  "DevOps Engineer",
  "Full Stack Developer"
];

interface SearchBoxProps {
  onSearch: (query: string) => void;
}

export const SearchBox = ({ onSearch }: SearchBoxProps) => {
  const [placeholder, setPlaceholder] = useState(jobTitles[0]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % jobTitles.length;
      setPlaceholder(jobTitles[currentIndex]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="relative w-full md:w-1/2">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
      <input 
        type="text" 
        value={searchQuery}
        onChange={handleSearch}
        placeholder={`Search for ${placeholder}`}
        className="w-full bg-gray-900 border-none rounded-full py-2 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};
