import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Card from '../Components/Card'
import NavBar from '../Components/Navbar'
import axios from 'axios'
import { useOutlet } from 'react-router-dom'
import Footer from '../Components/Footer'
import { Box } from '@mui/material'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [data, setData] = useState(null)

  const url = "https://jsonplaceholder.typicode.com/users"

  useEffect(() => {
    axios.get(url).then(res => setData(res.data)).catch(err => console.log(err))
  },[])

  const outlet = useOutlet();

  return (
    <Box component='main' sx={{display: {xs: 'flex', flexDirection: 'column', justifyContent: 'space-between'}, height: '100vh'}}>
      <NavBar/>
      {
        outlet || <div className='card-grid'>
                    {data?.map(odontologo => <Card {...odontologo} key={odontologo.id}/>)}
                  </div>
      }
      <Footer/>
    </Box>
  )
}

export default Home