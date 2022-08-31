import React from "react"
import MobileNavigation from "./MobileNavigation"
import Navigation from "./Navigation"
import "./NavBar.css"

export default function(){
    return(
        <div className="NavBar">
            <MobileNavigation/>
            <Navigation/>
        </div>
    )

}