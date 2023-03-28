import React, { useState, useEffect } from "react";
import './navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {

    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
            setIsMenuClicked(true)
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
            setIsMenuClicked(false)
        }
        setIsMenuClicked(!isMenuClicked)
    }

    useEffect(() => {
        if (isMenuClicked) {
            // disable scrolling when menu is open
            document.body.style.overflow = 'hidden'
        } else {
            // re-enable scrolling when menu is closed
            document.body.style.overflow = 'auto'
        }
    }, [isMenuClicked])

    return(
        <div>
            <nav className="bnavigation">
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
            </nav>

            <div className={menu_class}>
                <div class="menu">
                    <div className="menu-item-topcover">
                        <div></div>
                    </div>
                    <div className="menu-item">
                        <Link to="/" className="mlinks" href="#top">Home</Link>
                    </div>
                    <div className="menu-item">
                        <Link to="/gallery" className="mlinks" href="#top">Gallery</Link>
                    </div>
                    <div className="menu-item">
                        <Link to="/commission" className="mlinks" href="#top">Commission</Link>
                    </div>
                    <div className="menu-item">
                        <Link to="/webcomic" className="mlinks" href="#top">Webcomic</Link>
                    </div>
                    <div className="menu-item">
                        <Link to="/prints" className="mlinks" href="#top">Prints</Link>
                    </div>
                    <div className="menu-item-bottomcover">
                        <div></div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Navbar