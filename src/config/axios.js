import axios from 'axios'
const instance = axios.create({
  baseURL: 'https://system76admin-cms.herokuapp.com'
})

export default instance
