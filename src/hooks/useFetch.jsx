import axios from "axios"
import { useEffect, useState } from "react"

export function useFetch(url) {
    const [data, setData] = useState([undefined])
    
     useEffect(() => {
           axios.get(url)
        .then(response => {
              setData(response.data)
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
        .finally(()=> {
            console.log("Terminou essa Buceta")
        })
    }, [])

    return data
}