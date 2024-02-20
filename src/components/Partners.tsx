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
import { filterProvidersByReviewScore } from "@/utils/filterFuncions";

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
      let filteredPartners = filterProvidersByReviewScore(state.Partners,state.starFilter);
      //TODO cascade function for each filter
      dispatch({
        type:PARTNER_ACTIONS.SET_SORTED_PARTNERS,
        payload:filteredPartners
      })
    }
    filterParners();
  },[state.Partners, state.starFilter])

  return (
    <div className="mx-auto">
      <StarFilter/>
      {state.loading && <LoadingAnimation />}
      {!state.loading &&
        state.SortedPartners.map((partner, index) => (
          <Partner key={index} partner={partner} />
        ))}
    </div>
  );
};

export default GetPartners;
