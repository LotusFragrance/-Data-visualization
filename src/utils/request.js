import axios from 'axios'
const request = axios.create({
  baseURL: 'http://127.0.0.1:3000/api',
  timer: 5000
})
export default request
