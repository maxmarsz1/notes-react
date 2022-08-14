import axios from "axios";

const base_url  = '127.0.0.1:8000/api';

const axiosInstance = axios.create({
    baseURL: base_url,
    timeout: 5000,
    headers: {
        Authorization: localStorage.getItem('access_token') ? 
        'Bearer ' + localStorage.getItem('access_token') : null,
        'Content-Type': 'application/json',
        accept: 'application/json',
    },
})

export default axiosInstance;