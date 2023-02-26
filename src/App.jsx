import { useEffect, useState } from "react"
import axios from "axios"
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

//'https://api.github.com/users/Strifexss/repos'


export default function App() {
  
const [data, setData] = useState([])

  const { isLoading, error} =useQuery('repoData', () =>
     axios.get("https://api.github.com/users/Strifexss/repos")
    .then(response => {
      setData(response.data)
    }),
    {
      retry: 5, //Se a requisição falhar, ele vai tentar mais 5 vezes
      refetchOnWindowFocus: false, //Caso true, ele recarrega o fecth de dados toda vez que o usuario volta pra aba
      
    }
   )
 
   if (isLoading) return <h1>Loading...</h1>
 
   if (error) return <h1>Algo deu errado</h1>
  
   return (
     <div>
        {
          data.map(x => {
            return(
            <h1>
              {x.name}
            </h1>
            )
          })
        }
     </div>
   )
 }
