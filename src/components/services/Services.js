import React, { useEffect, useState } from 'react';
import Service from './service/Service';
import "./services.css"

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id="services">
            <h1 className="text-info fw-bolder">HealthCare Services</h1>
            <div className="services row row-cols-2 row-cols-sm-2 row-cols-md-3 col-12 ">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;
