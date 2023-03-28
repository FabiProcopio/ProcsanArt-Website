import React, { useState, useEffect } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header/index";
import "./styles.css";
import Video from "../../assets/loopanimation.mp4";
import { SocialIcon } from "react-social-icons";






function Home(){
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
            <div id="body">
                <section id="banner" className="banner" style={parallaxStyle}>
                     <img src={require("../../assets/hornsbigger.png")} alt="background" />
                </section>
                <div className="frontbox-content">
                    <div className="textfield">
                        Welcome to my Homepage, 
                        <br />
                        <br />
                        I'm Procsan, a digital artist with over a decade of experience. 
                        Through the use of vibrant colors, with an eye for detail and a unique style,
                        I bring my ideas to life on the digital canvas.
                        From captivating Fanarts to looping 2D animations and more!
                        <br />
                        <br />
                            Follow me on Twitter and Instagram @procsanart!
                        <br />
                        <br />
                        <div className="socialmedia">
                            <div className="twitter">
                                <SocialIcon url="https://twitter.com/ProcsanArt" bgColor="#fff" />
                            </div>
                            <div className="instagram">
                                    <SocialIcon url="https://www.instagram.com/procsanart/" bgColor="#fff" />
                            </div>
                        </div>
                        <div>
                            <br />
                        </div>
                    </div>
                    <div className="box">
                        <div className="video-container">
                            <iframe allowFullScreen={true} sandbox="" title="Loop animation" src={Video}  />
                        </div>
                    </div> 
                </div>
                {/* <div className="frontbox-content2">
                    <div className="contact-box">

                    </div>
                </div> */}
                
            </div>
            <Footer />
        </>
    )
}

export default Home;