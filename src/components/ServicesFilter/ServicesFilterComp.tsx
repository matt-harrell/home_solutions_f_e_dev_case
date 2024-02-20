interface ServicesFilterCompProps {
    services:string[];
    serviceValue:string;
    handleChange: (value: string) => void;
}

const ServicesFilterComp: React.FC<ServicesFilterCompProps> = ({services,serviceValue, handleChange}) => {
  

  return (
    <div>
      <select value={serviceValue} onChange={(e) => handleChange(e.target.value)}>
        <option value="">Select a service</option>
        {services.map((service:string, index:number) => (
          <option key={index} value={service}>
            {service}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ServicesFilterComp;
