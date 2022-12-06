/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const [favs, setFavs] = useState([])

  useEffect(() => {
    setFavs(JSON.parse(localStorage.getItem("favs")))
  },[])

  const { state } = useContext(ContextGlobal)
  return (
    <div>
      <h1 style={{color: state.palette.mode === 'dark' ? '#fff' : '#000'}}>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favs?.map(fav => <Card {...fav} key={fav.id}/>)}
      </div>
    </div>
  );
};

export default Favs;
