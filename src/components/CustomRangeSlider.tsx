
import React from 'react';
import './CustomRangeSlider.css';

interface CustomRangeSliderProps {
  value: number[];
  onChange: (value: number[]) => void;
  min: number;
  max: number;
}

export const CustomRangeSlider = ({ value, onChange, min, max }: CustomRangeSliderProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    onChange([min, newValue]);
  };

  return (
    <div className="custom-range-container">
      <input
        type="range"
        min={min}
        max={max}
        value={value[1]}
        onChange={handleChange}
        className="custom-range-input"
      />
      <div className="range-values">
        <span>${value[0]}</span>
        <span>${value[1]}</span>
      </div>
    </div>
  );
};
