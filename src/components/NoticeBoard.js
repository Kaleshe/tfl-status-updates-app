import './NoticeBoard.css';
import React, { useState, useEffect } from 'react';
import Notice from './Notice';

function NoticeBoard({service}) {

  const [isDisruption, setDistruptionStatus] = useState(false);

  useEffect( () => {
    if ( service ) {
      setDistruptionStatus(service.lineStatuses[0].statusSeverity !== 10);
    }
  }, [service]);

  return (
   <div className="noticeBoard">
     {(typeof service === 'object') ? <Notice service={service} disruption={isDisruption} /> : ''}
   </div>
  );
}

export default NoticeBoard;
