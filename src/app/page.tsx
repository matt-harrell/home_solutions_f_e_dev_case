import Partner from "@/components/Partner/Partner";

export default function Home() {
  
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
  

  return (
    <main className="container mx-auto min-h-screen md:p-8 p-4 ">
      <div className="mx-auto d-flex flex-col">
        <Partner partner={partner}/>
      </div>
    </main>
  );
}
