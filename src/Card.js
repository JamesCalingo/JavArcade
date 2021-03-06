import React from "react";

function Card(props) {
  return (<div className="card mb-3">

    <div className="card-header text-center">
      <h3>{props.name}</h3>
    </div>
    <div className="card-body border-bottom mb-2">
      <p>{props.description}</p>
      <a className="button btn btn-lg btn-primary" href={props.link}>{props.button}</a>
      </div>
    
    </div>
  
  )
}

export default Card