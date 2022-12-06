import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [data, setData] = useState(null)

  const url = "https://jsonplaceholder.typicode.com/users"

  useEffect(() => {
    axios.get(url).then(res => setData(res.data)).catch(err => console.log(err))
  },[])

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {data?.map(odontologo => <Card {...odontologo}/>)}
      </div>
    </main>
  )
}

export default Home