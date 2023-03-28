import React from "react";
import { Link } from "react-router-dom";
import './styles.css';
import Logo from '../../assets/Procsanlogo.png'
import { useEffect, useRef } from "react";
import Navhov from "../Navigation-hover/home/nav-hov";
import Navhovgal from "../Navigation-hover/gallery/nav-hov";
import Navhovcom from "../Navigation-hover/commission/nav-hov";
import Navhovstory from "../Navigation-hover/webcomic/nav-hov";
import Navhovprint from "../Navigation-hover/printshop/nav-hov";
import Navbar from "../navbar/navbar";



<link
      href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap"
      rel="stylesheet"
    />


function Header(){

    const header = useRef(null);
    useEffect(() => {
        window.onscroll = () => {
          const top = window.scrollY;
          if (top >= 50) {
            header.current.classList.add('active');
          } else {
            header.current.classList.remove('active');
          }
        };
    }, []);


    return (
        <header id="header" className="header" ref={header}>
            <div id="Navbar">
                <Navbar />
            </div>
            <div className="logo bounce">
                <Link to='/'>
                    <img id="logo" src={Logo} alt={'logo'} />
                </Link>
            </div>
                <nav className="navigation-main">
                    <ul>  
                        <Link to='/'>
                            <Navhov />
                        </Link>
                        <Link to='/gallery'>
                            <Navhovgal />
                        </Link>
                        <Link to='/commission'>
                            <Navhovcom />
                        </Link>
                        <Link to='/webcomic'>
                            <Navhovstory />
                        </Link >
                        <Link to='/prints'>
                            <Navhovprint />
                        </Link >
                    </ul>
                </nav>

            

        </header>
    )
}

export default Header;