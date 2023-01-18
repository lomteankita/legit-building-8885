import React from "react";
import Card from "../Pages/Card";
import Home from "../Pages/Home";
import Jeans from "../Pages/Jeans";
import Mens from "../Pages/Mens";
import Women from "../Pages/Women";
import Login from "../Pages/Login";

import { Route,Routes } from "react-router-dom";



const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/card" element={<Card />}> </Route>
        <Route path="/jeans" element={<Jeans />}> </Route>
        <Route path="/mens" element={<Mens />}> </Route>
        <Route path="/login" element={<Login />}> </Route>
        <Route path="/women" element={<Women />}> </Route>
    </Routes>
  )
}

export default AllRoutes