import client from './client'

const login = (email, password) => {
    return client.post('/login', { email, password })
} 

const register = async (userData) => {
    const response = await client.post('/register', userData, {
        headers: {
            'Content-Type': 'application/json'
        },
    })
    return response.data
}

export default {
    login,
    register,
}