"use client";
import { useEffect } from "react";
import {
  usePartnerDispatch,
  PARTNER_ACTIONS,
  usePartners,
} from "./PartnerContext";
import Partner from "./Partner/Partner";
import LoadingAnimation from "./LoadingAnimation/LoadingAnimation";
import StarFilter from "./StarFilter/StarFilter";
import { filterProvidersByDistance, filterProvidersByReviewScore } from "@/utils/filterFuncions";
import DistanceFilter from "./DisanceFilter/DistanceFilter";

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

  useEffect(()=> {
    const filterParners = () => {
      dispatch({
        type: PARTNER_ACTIONS.SET_LOADING,
        payload: true,
      });
      let filteredPartners = filterProvidersByReviewScore(state.Partners,state.starFilter);
      filteredPartners = filterProvidersByDistance(filteredPartners,state.distanceFilter);
      //TODO cascade function for each filter
      dispatch({
        type:PARTNER_ACTIONS.SET_SORTED_PARTNERS,
        payload:filteredPartners
      })
    }
    filterParners();
  },[state.starFilter, state.distanceFilter],)

  let partnerList;
  if (state.SortedPartners.length > 0) {
    partnerList = state.SortedPartners.map((partner, index) => <Partner key={index} partner={partner} />)
  }else{
    partnerList = <p className="text-center">No partners found. Please try adjusting your fitlers</p>
  }

  return (
    <div className="mx-auto">
      <StarFilter/>
      <DistanceFilter/>
      {state.loading && <LoadingAnimation />}
      {!state.loading && partnerList}
    </div>
  );
};

export default GetPartners;
