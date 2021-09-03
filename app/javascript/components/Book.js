import React,{useState,useEffect} from "react";

const Booking =(props)=>{
    const {name} = props

    const [today, setToday] = useState('')
    const [date, setDate] = useState('')
    const [min, setMin] = useState('')
    const [max, setMax] = useState('')
    
    const getDate = ()=>{
        let d = new Date()
        setToday(d.toLocaleString().split(',')[0].replace('/','-'))
    }

    useEffect(()=>{

    },[])

    return(
        <div>
            <h2 style={{textAlign:'center'}}>Book Appointment with {name}</h2>
        <div className='form'>
            <label for="date">Choose a day for your meeting:</label>
            <input type='date' id='date' min={today} />
            <label for="time">Choose a time for your meeting:</label>
            <input type='time' id='time' min={min} max={max}/>
            <br/>
            <input className="btn btn-primary" type="submit" value="Submit"></input>

        </div>

        </div>
    )
}

export default Booking