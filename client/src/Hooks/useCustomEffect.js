
import axios from 'axios';
import { useEffect, useState } from 'react';

const useCustomEffect = (url) => {
    const [response, setResponse] = useState([])
    const [error, setError] = useState(null)
    const sortOrder = 'asc'
    const [loading, setLoading] = useState(false)

    const getResponseData = async () => {
        try {
            setLoading(true)
            const result = await axios.post(url, { sortOrder })
            setResponse(result.data)
            setLoading(false)
        } catch (error) {
            setError(error)
        }
    }

    // Use Effect Call 
    useEffect(() => {
        getResponseData();
    }, [sortOrder])

    return { loading, response, error }
}

export default useCustomEffect