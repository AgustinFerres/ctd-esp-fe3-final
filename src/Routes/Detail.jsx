/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const url = "https://jsonplaceholder.typicode.com/users"
  
  const params = useParams()

  const [data, setData] = useState(null)

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  useEffect(() => {
    axios.get(`${url}/${params.id}`).then(res => setData(res.data)).catch(err => console.log(err));
  },[])

  return (
    <>
      <h1>Detail Dentist id </h1>
      <div>
        <p>Hello, my name is: {data?.name}</p>
        <p>You can contact me in this 3 places</p>
        <ul>
          <li>Email: {data?.email}</li>
          <li>Phone: {data?.phone}</li>
          <li>Website: {data?.website}</li>
        </ul>
      </div>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail