import { useState } from 'react';
import { Search, MapPin, ChevronDown } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { CustomRangeSlider } from './CustomRangeSlider';
import { cn } from "@/lib/utils";

const locations = ["New York, NY", "San Francisco, CA", "Los Angeles, CA", "Chicago, IL", "Miami, FL"];
const experiences = ["Entry Level", "Mid Level", "Senior Level", "Lead", "Manager"];
const periods = ["Per month", "Per year", "Per hour", "Per project"];
const suggestions = ["UI Designer", "Product Designer", "Frontend Developer", "UX Designer", "Web Designer"];

interface FilterBarProps {
  onSearch: (query: string) => void;
}

export const FilterBar = ({ onSearch }: FilterBarProps) => {
  const [salaryRange, setSalaryRange] = useState([1200, 14684]);
  const [searchValue, setSearchValue] = useState("");
  
  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    onSearch(value);
  };

  return (
    <div className="w-full bg-black text-white py-4">
      <div className="max-w-7xl mx-auto px-4 xl:px-12">
        <div className="flex items-center gap-6">
          {/* Search with suggestions */}
          <div className="relative flex flex-col w-[200px]">
            <div className="relative">
              <Search className="absolute left-3 text-white w-4 h-4 top-1/2 -translate-y-1/2" />
              <input 
                type="text"
                value={searchValue}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Search role"
                className="w-full bg-gray-900 border-none rounded-lg py-2 pl-9 pr-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
            </div>
            {searchValue && (
              <div className="absolute top-full left-0 w-full mt-1 bg-gray-900 rounded-lg py-2 z-10">
                {suggestions.filter(s => s.toLowerCase().includes(searchValue.toLowerCase())).map((suggestion) => (
                  <div 
                    key={suggestion}
                    className="px-3 py-1.5 text-sm hover:bg-gray-800 cursor-pointer transition-colors duration-200"
                    onClick={() => handleSearchChange(suggestion)}
                  >
                    {suggestion}
                  </div>
                ))}
              </div>
            )}
          </div>

          <Separator orientation="vertical" className="h-6 bg-gray-700" />

          {/* Location Dropdown */}
          <Select>
            <SelectTrigger 
              className={cn(
                "bg-gray-900 border-none w-[160px] h-9 text-sm text-white transition-all duration-300",
                "data-[placeholder]:text-gray-500"
              )}
            >
              <MapPin className="w-4 h-4 mr-2 text-white" />
              <SelectValue placeholder="Location" />
              <ChevronDown className="w-4 h-4 text-white" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((location) => (
                <SelectItem key={location} value={location} className="text-sm">
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Separator orientation="vertical" className="h-6 bg-gray-700" />

          {/* Experience Dropdown */}
          <Select>
            <SelectTrigger 
              className={cn(
                "bg-gray-900 border-none w-[140px] h-9 text-sm text-white transition-all duration-300",
                "data-[placeholder]:text-gray-500"
              )}
            >
              <SelectValue placeholder="Experience" />
              <ChevronDown className="w-4 h-4 text-white" />
            </SelectTrigger>
            <SelectContent>
              {experiences.map((exp) => (
                <SelectItem key={exp} value={exp} className="text-sm">{exp}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Separator orientation="vertical" className="h-6 bg-gray-700" />

          {/* Period Dropdown */}
          <Select>
            <SelectTrigger 
              className={cn(
                "bg-gray-900 border-none w-[120px] h-9 text-sm text-white transition-all duration-300",
                "data-[placeholder]:text-gray-500"
              )}
            >
              <SelectValue placeholder="Per month" />
              <ChevronDown className="w-4 h-4 text-white" />
            </SelectTrigger>
            <SelectContent>
              {periods.map((period) => (
                <SelectItem key={period} value={period} className="text-sm">{period}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Separator orientation="vertical" className="h-6 bg-gray-700" />

          {/* Salary Range */}
          <div className="flex flex-col min-w-[180px]">
            <span className="text-xs text-gray-400 mb-2">Salary</span>
            <CustomRangeSlider
              value={salaryRange}
              onChange={setSalaryRange}
              min={1200}
              max={50000}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
