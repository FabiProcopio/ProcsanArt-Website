import React from "react";
import Header from '../../components/header/index'
import Footer from "../../components/footer";
import './styles.css'
import { useEffect, useState } from 'react';



function Prints(){
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
            <div id="body" className="bodyprints">
                <section id="bannerp" className="bannerp" style={parallaxStyle}>
                     <img src={require("../../assets/hornsbigger.png")} alt="background" />
                </section>
                <div className="frontbox-content-print">
                    <div className="printsavailable">
                        Prints available at Cons or on Inprint.com
                    </div>
                    <div className="print-content">
                        <div className="print-con">
                            <p className="nextCon">Next Convention:</p>
                            <div className="TBA">
                                <p>-To Be Announced-</p>
                            </div>
                            <div className="pastCon">
                                <div className="pastConChild">SANA 2023 Part 1</div>
                                <div className="pastConChild">Anime Friends SP</div>
                                <div className="pastConChild">level up Salzburg</div>
                                <div className="pastConChild">Austrian Comic Con 2022</div>
                                <div className="pastConChild">Dokomi 2022</div>
                                <div className="pastConChild">Animuc 2022</div>
                            </div>
                        </div>
                        <div className="print-shop">
                            <a href="https://www.inprnt.com/gallery/procsanart/" target={"_blank"} rel="noreferrer">
                                <img src={require("../../assets/inprint_logo.jpg")} alt={"inprintlogo"} className="inprintlogo"/>
                            </a>
                            <p className="printsadd">
                                (If the the desired print is not available, <br/>
                                let me know and I'll add it!)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Prints;