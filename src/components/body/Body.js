import React from "react";
import Menu from "./Menu";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About"
import { Route,Routes,Navigate } from "react-router-dom";
const Body = () => {
    return(
        <div>
           <Routes>
                <Route path="/home" exeact element={<Home/>}/>
                <Route path="/menu" exeact element={<Menu/>}/>
                <Route path="/Contact" exeact element={<Contact/>}/>
                <Route path="/about" exeact element={<About/>}/>
                <Route path='/'  element={<Navigate replace to="/home" />} />
           </Routes>
        </div>
    );
}

export default Body;


