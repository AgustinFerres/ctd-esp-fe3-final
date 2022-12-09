import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Card from '../Components/Card'
import NavBar from '../Components/Navbar'
import axios from 'axios'
import { useOutlet } from 'react-router-dom'
import Footer from '../Components/Footer'
import { Box } from '@mui/material'
import { useContext } from 'react'
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const { state } = useContext(ContextGlobal)

  const [data, setData] = useState(null)
  
  useEffect(() => {
    setData(state.data)
  }, [state])

  const outlet = useOutlet();

  return (
    <Box component='main' sx={{display: {xs: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', gap: '50px'}, height: '100vh'}}>
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