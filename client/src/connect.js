import axios from 'axios';


const HTTP = axios.create({
    baseURL: 'http://localhost:3000',
})

export const login = async (formData) => await HTTP.post('/register', formData);