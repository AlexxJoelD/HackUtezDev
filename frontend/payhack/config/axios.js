import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";


const instance = axios.create({
    baseURL: 'https://api.conekta.io',
    timeout: 3000,
})

instance.interceptors.request.use(async (config) => {
    config.headers.Authorization = `Bearer key_mRtflzDbQGCMAp3vMMKzvEs`;
    config.headers.Accept = `application/vnd.conekta-v2.1.0+json`;
    config.headers['Content-Type'] = `application/json`;

    return config;
}, function (error) {
    return Promise.reject(error);
})

export default instance;