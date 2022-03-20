import axios from "axios"

const URL = ''

export const fetchLogin = (payload) => axios.get(`https://jsonplaceholder.typicode.com/posts`)