import React, { useEffect, useState } from 'react'
import { PARTNER_ACTIONS, usePartnerDispatch, usePartners } from '../PartnerContext';
import ServicesFilterComp from './ServicesFilterComp';

const ServicesFilter = () => {

    const { Partners } = usePartners();
    const dispatch = usePartnerDispatch();  

    const [services, setServices] = useState<string[]>([]);
    const [serviceValue, setServiceValue] = useState<string>('')

    useEffect(() => {
        const allServices = Partners.reduce((accumulator: string[], partner) => {
            accumulator.push(...partner.services);
            return accumulator;
        }, []);

        const uniqueServices = Array.from(new Set(allServices));

        setServices(uniqueServices);
    }, [Partners]);

    const handleChange = (value: string) => {
        setServiceValue(value);
        dispatch({
            type: PARTNER_ACTIONS.SET_SERVICE_FILTER,
            payload: value,
        });
    };


    return (
        <ServicesFilterComp services={services} serviceValue={serviceValue} handleChange={handleChange}/>
    )
}

export default ServicesFilter