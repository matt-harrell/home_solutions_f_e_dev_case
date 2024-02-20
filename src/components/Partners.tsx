"use client";
import { useEffect } from "react";
import {
  usePartnerDispatch,
  PARTNER_ACTIONS,
  usePartners,
} from "./PartnerContext";
import Partner from "./Partner/Partner";
import LoadingAnimation from "./LoadingAnimation/LoadingAnimation";

const GetPartners = () => {
  const state = usePartners();
  const dispatch = usePartnerDispatch();

  useEffect(() => {
    const fetchParners = async () => {
      dispatch({
        type: PARTNER_ACTIONS.SET_LOADING,
        payload: true,
      });
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
      {state.loading && <LoadingAnimation />}
      {!state.loading &&
        state.SortedPartners.map((partner, index) => (
          <Partner key={index} partner={partner} />
        ))}
    </div>
  );
};

export default GetPartners;
