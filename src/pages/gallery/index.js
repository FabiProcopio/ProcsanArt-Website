import React, { useState, useEffect } from "react";
import Header from "../../components/header/index";
import Footer from "../../components/footer";
import "./styles.css";
import { MainComponent } from "../../components/gallery/MainComponent";







function Gallery(){
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    });

    const handleScroll = () => {
        setScrollPosition(window.pageYOffset);
    };

    const parallaxStyle = {
        transform: `translateY(${scrollPosition * 0.5}px)`,
    };
    

    return (
        <>
            
            
            <Header />
            <div id="body" className="gallerybody">
                <section id="banner" className="gallerybanner" style={parallaxStyle}>
                     <img src={require("../../assets/hornsbigger.png")} alt={"background"} />
                </section>
                <div className="gallery-content">                  
                        <MainComponent /> 
                </div>
                
            </div>
            <Footer /> 

                   
        </>
    )
}

export default Gallery;