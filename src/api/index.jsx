import axios from "axios"
import axiosInstance from '../utils/axiosInstance'

const URL = ''

export const fetchLogin = (payload) => axiosInstance.post(`user/login`, payload)