import axios from 'axios'

const token = "d2d6d6b9-b282-403b-9468-e30938560e6c"
const apiKey = "5a71f0ee-4938-4e8c-aa80-f31949fe6765"

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1',
    headers: {
        Authorization: `Bearer ${token}`,
        'API-KEY': apiKey,
    },
})