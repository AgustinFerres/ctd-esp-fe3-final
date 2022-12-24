import { Box } from '@mui/material'
import React from 'react'
import { useContext } from 'react'
import { ContextGlobal } from './utils/global.context'
import logo from "./utils/images/DH.png"
import fb from "./utils/images/ico-facebook.png"
import ig from "./utils/images/ico-instagram.png"
import tk from "./utils/images/ico-tiktok.png"
import wpp from "./utils/images/ico-whatsapp.png"



const Footer = () => {


  const { state } = useContext(ContextGlobal)
  return (
    <Box sx={{backgroundColor: state.palette.primary.light}} component='footer'>
      <img src={logo} alt="" />
      <div>
        <img src={fb} alt="" />
        <img src={ig} alt="" />
        <img src={tk} alt="" />
        <img src={wpp} alt="" />
      </div>
    </Box>
  )
}

export default Footer
