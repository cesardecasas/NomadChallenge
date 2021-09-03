import {Client, Backend} from "./Api"


export const getQuote =async()=>{
    try {
        const res = await Client.get('/advice')
        return res.data.slip
    } catch (error) {
        console.log(error)
    }
}

export const createAppointment =(to, from)=>{
    try {
        $.ajax({
            url: `${Backend}/appointments`,
            type: "POST",
            data: { appointmet: { to: to, from: from } },
            success: response => {
              console.log("it worked!", response);
              return('success')
            }
          });
    } catch (error) {
        console.log(error)
    }
}

export const getCoaches =()=>{
    try {
        const res = await Backend.get('/coaches')
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const getDays =(coachId)=>{
    try {
        const res = await Backend.get('/days', coachId)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const getAvailability =(coachId)=>{
    try {
        const res = await Backend.get('/availabilities', coachId)
        return res.data
    } catch (error) {
        console.log(error)
    }
}