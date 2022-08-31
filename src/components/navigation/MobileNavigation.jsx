import React from "react";
import logo from "../../assets/logo.png"
import NavLinks from "./NavLinks"
import {GiHamburgerMenu} from "react-icons/gi"
import {AiOutlineClose} from  "react-icons/ai"


export default function(){
    const [burger, setBurger] =  React.useState(false)
    function toggleBuger(){
        setBurger(prevBurger => !prevBurger)
    }
    return(
        <nav className="MobileNavigation">
            <img src={logo} alt="logo-img" className="nav-logo" />
            {burger && <NavLinks />}
            {burger ?<AiOutlineClose className="AiOutlineClose" onClick={toggleBuger}/> : <GiHamburgerMenu className="GiHamburgerMenu" onClick={toggleBuger} />}
        </nav>
    )

}