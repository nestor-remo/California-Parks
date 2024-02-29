import React from "react";

const Card = (props) => {
    return (
        <div className="card">
            <h5>{props.name}</h5>
            <h6>{props.event}</h6>
        </div>
    )
}

export default Card;