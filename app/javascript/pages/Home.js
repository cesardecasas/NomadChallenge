import React, {useEffect, useState} from "react";
import { getQuote} from '../services/services'
import {Link} from 'react-router-dom'

const Home =()=>{

    const [advice, setAdvice] = useState('')

    const getInf =async()=>{
        let quote = await getQuote()
        setAdvice(quote.advice)
        console.log(quote.advice)
    }

    useEffect(()=>{
        getInf()
    },[])

    return(
        <div style={{textAlign:'center'}}>
            <h1 style={{fontSize:'5rem'}}>Welcome!</h1>
            <br/>
            <p style={{fontSize:'3rem', width:'60%', marginLeft:'20%'}}>Our company specializes in Job Search Coaching. Please feel free to get to know our coaches and schedule some time with them </p>
            <Link to='/info'>
                <button type="button" class="btn btn-primary btn-lg" href='/info'>Here</button>
            </Link>
            <h4>Here's a little piece of advice for you</h4>
            <p style={{fontSize:'2rem'}}>{advice}</p>
            
        </div>
    )
}

export default Home