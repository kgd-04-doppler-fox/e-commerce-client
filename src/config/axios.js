import axios from 'axios'

const server = axios.create({
  baseURL: 'https://still-dusk-72630.herokuapp.com'
})

export default server
