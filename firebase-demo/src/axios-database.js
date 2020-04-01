import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://vue-auth-demo-babde.firebaseio.com/',
    headers: { 'Content-Type': 'application/json' }
});

// Add token to every request
instance.interceptors.request.use(config => {
    config.url = `${config.url}?auth=${localStorage.getItem('token')}`;

    return config; 
});

export default instance;