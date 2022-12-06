import React from "react";
import { useState } from "react";
import Input from "./Input";
import Button from '@mui/material/Button';
import { Box } from "@mui/material";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  
  const [errorUserState, setUserErrorState] = useState(false)
  const [errorEmailState, setEmailErrorState] = useState(false)
  const [message, setMessage] = useState("")

  const handleForm = (e) => {
    e.preventDefault();
    if(e.target[0].value.trim().length <= 5){
      setUserErrorState(true)
      setMessage(<p>Por favor verifique su información nuevamente</p>)
    }
    if(!/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(e.target[2].value)){
      setEmailErrorState(true)
      setMessage(<p>Por favor verifique su información nuevamente</p>)
    }
    if(e.target[0].value.length > 5){
      setUserErrorState(false)
    }
    if(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(e.target[2].value)){
      setEmailErrorState(false)
    }
    if(e.target[0].value.length > 5 && /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(e.target[2].value)){
      alert(`Gracias ${e.target[0].value}, te contactaremos cuando antes vía mail`)
    }
  }

  const userNameProps = {
    id: "username",
    label: "Nombre Completo",
    errorState: errorUserState
  }

  const emailProps = {
    id: "email",
    label: "Email",
    errorState: errorEmailState
  }


  return (
    <Box onSubmit={(e) => handleForm(e)} component='form' display='flex' flexDirection='column' gap='10px' sx={{width: '100%'}}>
      <Input {...userNameProps}/>
      <Input {...emailProps}/>
      <Button variant="contained" type="submit" sx={{width: '50%', alignSelf: 'center'}}>Enviar</Button>
      {message}
    </Box>
  );
};

export default Form;
