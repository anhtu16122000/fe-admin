import jwtEncode from 'jwt-decode'
import axios from 'axios'

const headers = {}
const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    headers: headers
})

axiosInstance.interceptors.request.use(
    async (config) => {
        const currentDate = new Date()
        const token = localStorage.getItem('token')
        
        if(token) {
            const { exp } = jwtEncode(token)
            config.headers.Authorization = `Bearer ${token}`
        }
        return config     
    },
    (error) => {
        return Promise.reject(error)
    }
)

axiosInstance.interceptors.response.use( 
    (response) => {
        return Promise.resolve(response.data)
    },
    (error) => {
        if(!error.response) {
            return Promise.reject(error)
        }
        const status = error.response.status
        if(status === 401) { // token expired
            console.log('Token expired')   
        }
        return Promise.reject(error.response)
    }
)

export default axiosInstance