import { useState } from 'react'

export default useApi = (apiFunc) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const request = async (...args) => {
        setLoading(true)
        const response = await apiFunc(...args) //when calling a server you get a promise. The promise is always resolved even if you get an error
        setLoading(false)

        if (!response.ok) 
            return setError(true)
        
        setError(false)
        setData(response.data)
    }

    return { request, data, error, loading, setLoading, setError }
}