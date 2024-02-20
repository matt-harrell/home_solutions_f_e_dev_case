import { Provider } from "../../interfaces";

export const filterProvidersByReviewScore = (Partners: Provider[],value: number): Provider[] => {
     return Partners.filter(provider => {
      const reviewScore = provider.review_score;
      return reviewScore > value;
    });
  };

  export const filterProvidersByDistance = (Partners: Provider[],value: number): Provider[] => {
    if(value > 0){
      return Partners.filter(provider => {
       const distance = provider.distance;
       return distance < value;
     });
    }
    return Partners;
 };