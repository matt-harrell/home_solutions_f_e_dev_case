import React from 'react';

interface props {
  starValue: string;
  handleChange: (value: string) => void;
}

const StarFilterComp: React.FC<props> = ({ starValue, handleChange }) => {
  return (
    <select value={starValue} onChange={(e) => handleChange(e.target.value)}>
      <option value="">Star Rating</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
  );
};

export default StarFilterComp;