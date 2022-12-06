import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


const CardComponent = ({ name, username, id }) => {


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

      // <div className="card">
      //     {/* En cada card deberan mostrar en name - username y el id */}
      //     <img src="./images/doctor.jpg" alt="Odontologo" style={{width: '100%'}}/>
      //     <Link to={`/dentist/${id}`}>{name}</Link>

      //     {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      //     {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      //     <button onClick={addFav} className="favButton">Add fav</button>
      // </div>
  return (
    <>
      <Card sx={{ width: window.innerWidth < 800 ? '50vw' : '15vw', display: {xs: 'flex',flexDirection: 'column', justifyContent: 'space-between'}}}>
        <Link to={`/dentist/${id}`}> 
          <CardActionArea>
            <CardMedia
              component="img"
              width="100%"
              image="./images/doctor.jpg"
              alt="doctor image"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2" color='#000'>
                  {name}
                </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
        <CardActions>
          <Button size="small" color="primary" onClick={addFav}>
            Add fav
          </Button>
        </CardActions>
    </Card>
  </>
  );
};

export default CardComponent;