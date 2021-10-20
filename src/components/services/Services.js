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
            <h1 className="text-info fw-bolder mt-2 mb-3">HealthCare Services</h1>
            <div className="services col-12 row row-cols-2 row-cols-sm-1 row-cols-md-3 row-cols-xs-1 bg-light ">
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
