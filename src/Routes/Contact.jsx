import { Box } from '@mui/material'
import React, { useContext } from 'react'
import Form from '../Components/Form'
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {

  const { state } = useContext(ContextGlobal)

  return (
    <Box component='div' display='flex' gap='10px' flexDirection='column' alignItems='center' width='30%' bgcolor='background.paper' padding='10px 30px'>
      <h2 style={{color: state.palette.mode === 'dark' ? '#fff' : '#000'}}>Want to know more?</h2>
      <p style={{color: state.palette.mode === 'dark' ? '#fff' : '#000'}}>Send us your questions and we will contact you</p>
      <Form/>
    </Box>
  )
}

export default Contact