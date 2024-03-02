import React from "react";
import '../index.css';

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.image} alt="img" width={300} height={300}/>
            <h5>{props.name}</h5>
            <h6>{props.location}</h6>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                <button>Visit!</button>
            </a>
        </div>
    )
}

export default Card;