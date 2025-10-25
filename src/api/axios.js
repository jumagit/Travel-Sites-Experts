import axios from 'axios'

const api = axios.create({
    //baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api',
    baseURL: import.meta.env.VITE_API_URL || 'https://api.travelsitesexperts.com/api',
    timeout: 10000,
})

// Request interceptor — show spinner
api.interceptors.request.use(config => {
    window.dispatchEvent(new Event('api-request-start'))
    return config
})

// Response interceptor — hide spinner
api.interceptors.response.use(
    response => {
        window.dispatchEvent(new Event('api-request-end'))
        return response
    },
    error => {
        window.dispatchEvent(new Event('api-request-end'))
        return Promise.reject(error)
    }
)

export default api