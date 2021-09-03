import React from "react";
import { Link } from 'react-router-dom'

const CoachCard =(props)=>{


    const {name, description} = props
    let location = {
        pathname:'/book',
        state:props
     }

    return(
        <div className="card">
        <h5 className="card-header">{name}</h5>
        <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">{description}</p>
            <a className="btn btn-primary"><Link to={location}>Book</Link></a>
        </div>
        </div>
    )
}

export default CoachCard