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
import { filterProvidersByDistance, filterProvidersByReviewScore, filterProvidersByService } from "@/utils/filterFuncions";
import DistanceFilter from "./DisanceFilter/DistanceFilter";
import ServicesFilter from "./ServicesFilter/ServicesFilter";

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
      filteredPartners = filterProvidersByService(filteredPartners,state.serviceFilter);
      //TODO cascade function for each filter
      dispatch({
        type:PARTNER_ACTIONS.SET_SORTED_PARTNERS,
        payload:filteredPartners
      })
    }
    filterParners();
  },[state.starFilter, state.distanceFilter, state.serviceFilter],)

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
      <ServicesFilter/>
      {state.loading && <LoadingAnimation />}
      {!state.loading && partnerList}
    </div>
  );
};

export default GetPartners;
