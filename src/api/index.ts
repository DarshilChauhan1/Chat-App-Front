import axios from 'axios';
import { RegisterUser } from '../interface/register.interface';

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URI,
    timeout: 100000,
});

const register = async (data: RegisterUser) => {
    const response = await api.post('/auth/signup', data);
    console.log(response, data);
    return response;
}

export {
    api,
    register
};