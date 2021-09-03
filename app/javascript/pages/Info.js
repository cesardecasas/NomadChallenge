import React, {useEffect, useState} from "react";
import CoachCard from "../components/CoachCard";
import {getCoaches} from '../services/services'

const Info =()=>{

    const [coaches, setCoaches]=useState([])

    const arrCoaches =async()=>{
        let arr = await getCoaches()
        setCoaches(arr)
    }

    useEffect(()=>{
        arrCoaches()
    },[])


    return(
        <div style={{textAlign:'center'}}>
            {coaches[1] ? coaches.map((coach, i)=><CoachCard key={i} id={coach.id} name={coach.name} description={coach.description}/>) : <h4>Loading</h4>}
            
        </div>
    )
}

export default Info