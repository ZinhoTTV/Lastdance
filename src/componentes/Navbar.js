import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () =>{
    return (
        <nav>
            <NavLink to="/">Principal</NavLink>
            <NavLink to="/dev">Desenvolvedor</NavLink>
            <NavLink to="/Contato">Contato</NavLink>
        </nav>
    );
};


export default NavBar;