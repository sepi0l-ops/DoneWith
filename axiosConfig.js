import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://192.168.100.104:8000/api'

export default axios