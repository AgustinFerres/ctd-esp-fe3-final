import React from "react";
import { Link } from "react-router-dom";


const Card = ({ name, username, id }) => {


  const addFav = ()=>{
    localStorage.setItem("favs", JSON.stringify([id]));
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <img src="#" alt="Odontologo" />
        <Link to={`/dentist/${id}`}>{name}</Link>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;