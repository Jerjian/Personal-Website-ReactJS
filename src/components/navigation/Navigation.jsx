import React from "react"
import logo from "../../assets/logo.png"
import NavLinks from "./NavLinks"


export default function(){
    return(
        <nav className="Navigation">
            <img src={logo} alt="logo-img" className="nav-logo" />
            <NavLinks />
        </nav>
    )
}
