import { render, screen } from "@testing-library/react";
import Partner from "../src/components/Partner/Partner";

describe("Partner component", () => {
  const partner = {
    _id: "643817b1eeb62ebdc360736a",
    name: "Az Custom Landscapes | Artificial Turf Specialist",
    slug: "az-custom-landscapes-artificial-turf-specialist-361402",
    phone: "5207716602",
    website: "http://www.azcustomlandscapes.com/",
    social_media: {
      facebook: "https://www.facebook.com/1534320303548898",
    },
    address: "1110 E Pennsylvania St Suite 405, Tucson, AZ 85714",
    street: "1110 E Pennsylvania St Suite 405",
    city: "Tucson",
    state: "AZ",
    zip: "85714",
    latitude: 32.171476,
    longitude: -110.9547565,
    nearest_major_citystate: "TUCSON,AZ",
    geolocation: {
      type: "Point",
      coordinates: [-110.9547565, 32.171476],
    },
    categories: ["lawn"],
    services: [
      "Commercial lawn care",
      "Artificial turf",
      "Pavers",
      "Lawn maintenance",
      "Hardscapes",
      "Sod installation",
      "Residential",
      "Landscaping",
    ],
    highlights: [
      "helps educate customers",
      "free quotes",
      "punctual service",
      "transparent pricing",
    ],
    lowlights: {
      lawn: ["small online presence"],
    },
    certifications: {},
    awards: {},
    third_party_ratings: {
      google_places: {
        review_score: 4.8,
        review_count: 49,
      },
    },
    rating: {
      th: 3.6957003966275015,
      toh: 4.653198163103472,
    },
    google_places_id: {
      data_id: "0x86d67ad741ff5823:0xd37f74388996c98f",
      data_cid: "15240027450220398991",
    },
    is_hidden: false,
    status: {
      is_hidden: false,
      reason: "",
    },
    last_updated: "2023-04-13 11:42:19.993000",
    review_score: 4.8,
    review_count: 49,
    distance: 3.8392407694383315,
  };

  beforeEach(() => {
    render(<Partner partner={partner} />);
  });

  it("displays the partner image", () => {
    const partnerImage = screen.getByAltText(/Az Custom Landscapes \| Artificial Turf Specialist logo/i);
    expect(partnerImage).toBeInTheDocument();
  });

  it("displays the get quote button with the correct URL", () => {
    const getQuoteButton = screen.getByText(/get quote/i);
    expect(getQuoteButton).toBeInTheDocument();
    expect(getQuoteButton.href).toBe(partner.website);
  });

  it("displays the partner title", () => {
    const partnerTitle = screen.getByText(partner.name);
    expect(partnerTitle).toBeInTheDocument();
  });


  it("displays the partner address", () => {
    const partnerAddress = screen.getByText(partner.address);
    expect(partnerAddress).toBeInTheDocument();
  });

  it("displays the nearby location", () => {
    if (partner.distance < 5) {
      const nearbyLocation = screen.getByText(/nearby/i);
      expect(nearbyLocation).toBeInTheDocument();
    }
  });

  it("displays the popularity status", () => {
    if (partner.review_count > 99) {
      const popularityStatus = screen.getByText(/popular/i);
      expect(popularityStatus).toBeInTheDocument();
    }
  });

  it("displays the services offered", () => {
    partner.services.forEach((service) => {
      const serviceElement = screen.getByText(service);
      expect(serviceElement).toBeInTheDocument();
    });
  });

  it("displays the experience of the partner", () => {
    const experienceInfo = screen.getByText(/Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies libero eu neque consequat, id vestibulum nulla sagittis. Morbi auctor consectetur tellus eu blandit./);
    expect(experienceInfo).toBeInTheDocument();
  });

  // Test for read more button would go here
  it("displays the get see more button", () => {
    const readMoreButton = screen.getByRole("button", { name: 'see more button' });
    expect(readMoreButton).toBeInTheDocument();
  });
});
