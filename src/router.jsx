import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Login_Home } from "./pages/Login_Home"
import { Home } from "./pages/Home"

export const RoutesJS = () => {
   return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login_Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
   )
}