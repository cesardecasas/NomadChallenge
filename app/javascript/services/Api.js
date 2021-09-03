import Axios from 'axios'

const Client = Axios.create({baseURL:'https://api.adviceslip.com'})

const Backend = Axios.create({baseURL:'http://localhost:3000/api/v1'})

export default Client

export default Backend