import React from "react";
import "./Header.css"
import Menu from "../MenuHamburguer/Menu";
import MenuToggle from "../MenuHamburguer/MenuToggle";
import { useState } from "react";
// import IMAGES from "src/Images/Images.jsx"


export default function Header(){

    const [isOpen, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!isOpen)
    };
     
    return(
        <div>
            <header>
                <div className="header_info">
                    <div>
                        <img src="src/Images/ifrs_logo_white.png" alt="logo ifrs" />

                        {/* <img src={IMAGES.image1} alt='logo ifrs'/> */}
                    </div>
                    <div className="ifrs_info">
                        <h3>INSTITUTO FEDERAL</h3>
                        <p>Rio Grande do sul</p>
                        <p>Campus Porto Alegre</p>
                    </div>
                </div>
                <div className="menu_button">
                    <MenuToggle toggle={toggleMenu} isOpen={isOpen}/>
                </div>
            </header>
            {isOpen &&
                <Menu className="menu-componente"/>
            }
        </div>
    )
}

