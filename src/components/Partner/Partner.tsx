import Image from "next/image";
import { Provider } from "../../../interfaces";

interface props {
  partner: Provider;
}

const Partner = ({ partner }: props) => {
  const { distance, review_count, slug, name, website, address, services } =
    partner;
  const isPartnerNearby =
    distance < 5 ? (
      <div>
        <i></i>Nearby
      </div>
    ) : (
      ""
    );
  const isPartnerPopular =
    review_count > 99 ? (
      <div>
        <i></i>popular
      </div>
    ) : (
      ""
    );

  return (
    <section>
      <Image
        src={`https://d126ytvel6227q.cloudfront.net/logos/${slug}.jpg`}
        width={500}
        height={500}
        alt={`${name} logo`}
      />
      <a href={website} target="_blank">
        get quote
      </a>
      <h2>{name}</h2>
      <p>{address}</p>
      {isPartnerNearby}
      {isPartnerPopular}
      <article>
        {services.map((service, index) => (
          <div key={index}>{service}</div>
        ))}
      </article>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        ultricies libero eu neque consequat, id vestibulum nulla sagittis. Morbi
        auctor consectetur tellus eu blandit.
      </p>
      <button>See more</button>
    </section>
  );
};

export default Partner;
