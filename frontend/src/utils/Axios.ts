import axios from 'axios';


const Axios = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

const token = localStorage.getItem('token')

if(token){
    Axios.defaults.headers.common['Authorization'] = `JWT ${localStorage.getItem('token')}`
}

export default Axios;