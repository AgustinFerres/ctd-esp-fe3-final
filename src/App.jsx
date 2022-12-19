import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";


function App() {
  return (
      <BrowserRouter basename="/ctd-esp-fe3-final">
        <Routes>
          <Route path="/" element={<Home/>}>
            <Route path="/favs" element={<Favs/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/dentist/:id" element={<Detail/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
