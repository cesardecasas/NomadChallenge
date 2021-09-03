import React, {useEffect, useState} from "react";
import CoachCard from "./CoachCard";

const Info =()=>{

    const [coaches, setCoaches]=useState([])

    const arrCoaches =async()=>{


    }

    useEffect(()=>{
        arrCoaches()
    },[])


    return(
        <div style={{textAlign:'center'}}>
            {coaches[1] ? coaches.map((coach, i)=><CoachCard name={coach.name} description={coach.description}/>) : <h4>Loading</h4>}
            
        </div>
    )
}

export default Info