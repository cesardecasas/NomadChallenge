import React from "react";

const CoachCard =(props)=>{
    const {name, description} = props
    return(
        <div className="card">
        <h5 className="card-header">{name}</h5>
        <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">{description}</p>
            <a href="#" className="btn btn-primary">Book</a>
        </div>
        </div>
    )
}

export default CoachCard