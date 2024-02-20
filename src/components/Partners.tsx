"use client";
import useSWR from 'swr';
import { Provider } from '../../interfaces';
import { useEffect } from 'react';
import { usePartnerDispatch,PARTNER_ACTIONS, usePartners } from './PartnerContext';
import Partner from './Partner/Partner';

const GetPartners = () => {
  const state = usePartners();
  const dispatch = usePartnerDispatch();

  
  

  useEffect(() => {
    const fetchParners = async () => {
      const response = await fetch("/api/providers");
      const data = await response.json();
      dispatch({
        type: PARTNER_ACTIONS.GET_PARTNERS,
        payload: data,
      });
    };
    fetchParners();
  }, [dispatch]);



    return (
      <div className="mx-auto">
          {state.Partners.map((partner, index) => (
            <Partner key={index} partner={partner} />
          ))}
        </div>
    )
}

export default GetPartners