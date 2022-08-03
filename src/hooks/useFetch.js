import React , { useState } from 'react'

const useFetch = (handleCallApi) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(loading)
    const [error, setError] = useState({
        error: false,
        message: null
    })

    return { data, loading, error, request }
}

export default useFetch