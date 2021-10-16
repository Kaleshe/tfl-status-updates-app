import './Notice.css';

function Notice(props) {

   let reason;

   if ( props.disruption ) {
      reason = props.service.lineStatuses.map((i) => {
         return <p className="disruptionReason">{i.reason}</p>;
      })
   }

  return (
   <div className="notice">
      <h2>{props.service.name}</h2>
      <p className="disruptionStatusNotice">{props.disruption ? 'Service currently suffering disruptions' : 'No Service Disruptions'}</p>
      {reason}
   </div>
  );
}

export default Notice;
