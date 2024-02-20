import { Provider } from "../../interfaces";

export const filterProvidersByReviewScore = (Partners: Provider[],value: number): Provider[] => {
     return Partners.filter(provider => {
      const reviewScore = provider.third_party_ratings.google_places.review_score;
      return reviewScore > value;
    });
  };