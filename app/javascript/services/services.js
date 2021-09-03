import Client from "./Api"

export const getQuote =async()=>{
    try {
        const res = await Client.get('/advice')
        return res.data.slip
    } catch (error) {
        console.log(error)
    }
}