import jwt_decode from 'jwt_decode'
import axios from 'axios'

const headers = {}

const axiosInstance = axios.interceptors.request.use(
    async (config) => {
        const currentDate = new Date()
        // if() {

        // }
        // const decoded = jwt_decode(user?.) 
        // if()       
    },
    (error) => {
        return error
    }
)