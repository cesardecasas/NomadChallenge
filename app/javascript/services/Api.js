import Axios from 'axios'

const Client = Axios.create({baseURL:'https://api.adviceslip.com'})

export default Client