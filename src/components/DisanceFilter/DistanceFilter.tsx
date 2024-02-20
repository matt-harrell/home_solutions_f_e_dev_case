import React, { useState } from 'react';
import DistanceFilterComp from './DistanceFilterComp';
import { PARTNER_ACTIONS, usePartnerDispatch } from '../PartnerContext';

const DistanceFilter: React.FC = () => {
  const dispatch = usePartnerDispatch();  

  const [distanceValue, setdistanceValue] = useState<string>('');

  const handleChange = (value: string) => {
    setdistanceValue(value);
    dispatch({
      type: PARTNER_ACTIONS.SET_DISTANCE_FILTER,
      payload: Number(value),
    });
  };

  return (
    <div>
      <DistanceFilterComp distanceValue={distanceValue} handleChange={handleChange} />
    </div>
  );
};

export default DistanceFilter;