import React from "react";
import { Link } from "react-router-dom";


const Card = ({ name, username, id }) => {


  const addFav = ()=>{
    const odontologosArray = JSON.parse(localStorage.getItem("favs"));
    if(odontologosArray){
      const odontologoInArray = odontologosArray.find(odontologo => odontologo.id === id);
      if(odontologoInArray === undefined){
        const newArray = [...odontologosArray, {name, username, id}]
        localStorage.setItem("favs", JSON.stringify(newArray));
      }
      else {
        console.log("Nothing happens");
      }
    }
    else{
      localStorage.setItem("favs", JSON.stringify([{name, username, id}]));
    }
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <img src="./images/doctor.jpg" alt="Odontologo" style={{width: '100%'}}/>
        <Link to={`/dentist/${id}`}>{name}</Link>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;