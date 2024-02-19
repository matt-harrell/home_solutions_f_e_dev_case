import React from 'react';
import { StarIcon } from "@heroicons/react/20/solid";
import HalfStarIcon from './HalfStarIcon';

interface props{
    rating:number;
}

const StarRating = ({ rating }:props) => {
  const roundedRating = Math.round(rating * 10) / 10;
  const fullStars = Math.floor(roundedRating);
  const hasHalfStar = roundedRating - fullStars >= 0.5;

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<StarIcon key={i}  className='h-5 w-5 text-yellow-400' data-testid="full-star"/>);
    }
    if (hasHalfStar) {
      stars.push(<HalfStarIcon key="half" className='h-5 w-5' data-testid="half-star"/>);
    }
    return stars;
  };

  return <div className="flex gx-1">{renderStars()}</div>;
};

export default StarRating;