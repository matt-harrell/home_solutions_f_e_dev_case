import React, { useState } from 'react';
import StarFilterComp from './StarFilterComp';
import { PARTNER_ACTIONS, usePartnerDispatch } from '../PartnerContext';

const StarFilter: React.FC = () => {
  const dispatch = usePartnerDispatch();  

  const [starValue, setstarValue] = useState<string>('');

  const handleChange = (value: string) => {
    setstarValue(value);
    dispatch({
      type: PARTNER_ACTIONS.SET_STAR_FILTER,
      payload: Number(value),
    });
  };

  return (
    <div>
      <StarFilterComp starValue={starValue} handleChange={handleChange} />
    </div>
  );
};

export default StarFilter;