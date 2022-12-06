import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";


const CardComponent = ({ name, username, id }) => {

  const [buttonValue, setButtonValue] = useState("Add Fav")

  useEffect(() => {
    const dentistArray = JSON.parse(localStorage.getItem("favs"));
    const dentistInArray = dentistArray?.find(dentist => dentist.id === id);
    if(dentistInArray){
      setButtonValue("Remove Fav")
    }
    else {
      setButtonValue("Add Fav")
    }
  },[])

  const handleEvent = (e) => {
    if(e.target.innerText === "ADD FAV"){
      addFav();
      setButtonValue("Remove Fav")
    }
    else if(e.target.innerText === "REMOVE FAV") {
      removeFav();
      setButtonValue("Add Fav")
    }
  }


  const addFav = () => {
    const dentistArray = JSON.parse(localStorage.getItem("favs"));
    if(dentistArray){
      const dentistInArray = dentistArray.find(dentist => dentist.id === id);
      if(dentistInArray === undefined){
        const newArray = [...dentistArray, {name, username, id}]
        localStorage.setItem("favs", JSON.stringify(newArray));
      }
      else {
        return;
      }
    }
    else{
      localStorage.setItem("favs", JSON.stringify([{name, username, id}]));
    }
  }

  const removeFav = () => {
    const dentistArray = JSON.parse(localStorage.getItem("favs"));
    const newArray = dentistArray.filter(dentist => dentist.id !== id);
    localStorage.setItem("favs", JSON.stringify(newArray));
  }

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
        <Button size="small" color="primary" onClick={(e) => handleEvent(e)}>
          {buttonValue}
        </Button>
        </CardActions>
    </Card>
  </>
  );
};

export default CardComponent;