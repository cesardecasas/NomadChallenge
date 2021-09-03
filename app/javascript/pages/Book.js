import React,{useState,useEffect} from "react";
import {getAvailability, getDays} from '../services/services'


const Booking =(props)=>{
    const {name, description, id} = props.state.props

    const [today, setToday] = useState('')
    const [date, setDate] = useState('')
    const [min, setMin] = useState('')
    const [max, setMax] = useState('')
    const [days,setDays]=useState([])
    
    const getDate = ()=>{
        let d = new Date()
        setToday(d.toLocaleString().split(',')[0].replace('/','-'))
    }

    const getSchedule =async()=>{
        const a = await getAvailability(id)
        setMin(a.min)
        setMax(a.max)
    }

    const getDay=async()=>{
        let d = await getDays()
        setDays(d)
    }

    useEffect(()=>{
        getDate(),
        getDay()
    },[])

    return(
        <div>
            <h2 style={{textAlign:'center'}}>Book Appointment with {name}</h2>
            <h4>The coach only works on:</h4>
            {days[1] ? days.map((day, i)=><p key={i}>{day}</p>): <p>Loading available days</p>}
        <div className='form'>
            <label for="date">Choose a day for your meeting:</label>
            <input type='date' id='date' min={today} onChange={()=>setDate(e.target.value)}/>
            <label for="time">Choose a time for your meeting:</label>
            {date ? <input type='time' id='time' min={min} max={max} /> : <p>Input date to input time</p>}
            <br/>
            <input className="btn btn-primary" type="submit" value="Submit"/>

        </div>

        </div>
    )
}

export default Booking