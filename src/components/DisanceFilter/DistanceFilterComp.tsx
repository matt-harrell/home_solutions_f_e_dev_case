import React from 'react';

interface props {
  distanceValue: string;
  handleChange: (value: string) => void;
}

const distanceValueComp: React.FC<props> = ({ distanceValue, handleChange }) => {
  return (
    <select value={distanceValue} onChange={(e) => handleChange(e.target.value)}>
      <option value="">Distance</option>
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
      <option value="25">25</option>
      <option value="35">35</option>
      <option value="50">50</option>
    </select>
  );
};

export default distanceValueComp;