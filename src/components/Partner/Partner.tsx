import Image from "next/image";
import { Provider } from "../../../interfaces";
import { MapPinIcon,FireIcon, CheckIcon,ChevronDownIcon } from "@heroicons/react/20/solid";
import HalfStarIcon from "../StarRating/HalfStarIcon";
import StarRating from "../StarRating/StarRating";
interface props {
  partner: Provider;
}

const Partner = ({ partner }: props) => {
  const { distance, review_count, review_score, slug, name, website, address, services } =
    partner;
  const isPartnerNearby =
    distance < 5 ? (
      <div className="flex">
        <MapPinIcon className="w-5 h-5 mr-1 text-green-800"/>Nearby
      </div>
    ) : (
      ""
    );
  const isPartnerPopular =
  review_count > 99 ? (
      <div className="flex">
        <FireIcon className="w-5 h-5 mr-1 text-green-800"/>popular
      </div>
    ) : (
      ""
    );

  return (
    <section className="max-w-4xl mx-auto md:p-8 p-6 rounded-lg border my-10">
      <div className="flex flex-wrap md:justify-between justify-center items-center mb-3 gap-5">
        <Image
          src={`https://d126ytvel6227q.cloudfront.net/logos/${slug}.jpg`}
          width={150}
          height={150}
          alt={`${name} logo`}
        />
        <a href={website} target="_blank" className="d-block bg-blue-600 hover:bg-blue-800 transition-colors ease-in duration-200 text-white font-bold px-10 py-2 capitalize">
          get quote
        </a>
      </div>
      <h2 className="font-bold text-gray-800 text-xl">{name}</h2>
      <div className="flex flex-wrap mt-2">
        <StarRating rating={review_score}/>
        <div className="mx-2 md:block hidden">|</div>
        <p>{address}</p>
      </div>
      <div className="flex flex-wrap font-serif gap-2 mt-5 mb-8">
        {isPartnerNearby}
        {isPartnerPopular}
      </div>
      <div className="mb-10">
        <h3 className="uppercase font-extrabold text-gray-500 my-5">SERVICES OFFERED</h3>
        <div className="font-serif md:flex flex-wrap gap-x-5 md:gap-y-4 gap-y-2">
        {services.map((service, index) => (
          <div key={index} className="flex">
            <CheckIcon className="w-5 h-5 text-green-500"/>
            {service}
          </div>
        ))}
        </div>
      </div>
      <h3 className="uppercase font-extrabold text-gray-500 my-5">SERVICES OFFERED</h3>
      <p className="font-serif italic pl-5">
        &#8220;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        ultricies libero eu neque consequat, id vestibulum nulla sagittis. Morbi
        auctor consectetur tellus eu blandit.&#8221;
      </p>
      <p className="text-end font-serif">
        - Jane Doe.
      </p>
      <button className="ml-auto flex my-5 uppercase font-extrabold text-gray-500 gap-x-1" aria-label="see more button">
        <div>See&nbsp;more</div>
        <ChevronDownIcon className="inline h-6 w-6 text-blue-500"/>
      </button>
    </section>
  );
};

export default Partner;
