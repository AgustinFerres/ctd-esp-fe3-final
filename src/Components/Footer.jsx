import { Box } from '@mui/material'
import React from 'react'
import { useContext } from 'react'
import { ContextGlobal } from './utils/global.context'
const Footer = () => {


  const { state } = useContext(ContextGlobal)
  return (
    <Box sx={{backgroundColor: state.palette.primary.light}} component='footer'>
      <img src="./images/DH.png" alt="" />
      <div>
        <img src="./images/ico-facebook.png" alt="" />
        <img src="./images/ico-instagram.png" alt="" />
        <img src="./images/ico-tiktok.png" alt="" />
        <img src="./images/ico-whatsapp.png" alt="" />
      </div>
    </Box>
  )
}

export default Footer
