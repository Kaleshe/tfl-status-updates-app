import './Services.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NoticeBoard from './NoticeBoard';

function Services() {

  const [services, setServices] = useState([]);
  const [selectedService, setCurrentService] = useState(false);

  useEffect( () => {
    axios.get('https://api.tfl.gov.uk/Line/Mode/tube,overground,dlr/Status?detail=true')
      .then(response => setServices(response.data));
  }, []);

  return (
   <>
   <div className="services" id="services">
      {services.map(service => 
      <div className="service" id={service.id} onClick={(e) => {
            setCurrentService(service);  
         }}>

         <div key={service.id} className="service-name">{service.name}
            {service.serviceTypes.map(serviceType =>
            <>
               {(serviceType.name === 'Night') ? <span className="service-night">{serviceType.name}</span> : ''}
            </>
            )}

            {service.lineStatuses.map(status =>
            <>
               {(status.statusSeverity !== 10) ? <span className="disruptionStatus">{status.statusSeverityDescription}</span> : ''}
            </>
            )}
         </div>
      </div>)
      }
   </div>

   <NoticeBoard service={selectedService} />

   </>
  );
}

export default Services;
