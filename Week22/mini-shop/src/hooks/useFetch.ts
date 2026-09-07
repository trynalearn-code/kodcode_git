import { useEffect, useState } from "react";


function useFetch<T>(url:string) {
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    async function fetchData() {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch(url)
        if (!response.ok){
          throw new Error("Failed to fetch data")
        }
        const result = await response.json()
        setData(result)
      } catch (error) {
        setError("something went wrong")
      } finally{
        setLoading(false)
      }

    }
    useEffect(()=>{fetchData()
    }, [url])
  return (
    {
      data,
      loading,
      error
    }

  )
}

export default useFetch