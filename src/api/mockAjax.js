import axios from 'axios'
const mockRequest = axios.create({
    baseURL: "/mock",
    timeout: 5000,
})
export default mockRequest