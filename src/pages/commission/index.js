import React, { useState, useEffect } from "react";
import Header from '../../components/header/index'
import './styles.css'
import Footer from "../../components/footer";
import { SocialIcon } from "react-social-icons";


function Commission(){
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
                <section id="banner" className="bannerc" style={parallaxStyle}>
                     <img src={require("../../assets/hornsbigger.png")} alt="background" />
                </section>
                <div className="frontbox-content-commission">
                    <div className="commission-content">
                        <div className="commission-sign">
                            <img src={require("../../assets/CommissionArt_Procsan.png")} alt="commissionart" className="commissionart" />
                        </div>
                        <div className="commission-contact">
                            {/* <p>Commissions are OPEN at the moment!</p> */}
                            <div className="contact-formular">
                                <div class="form-container">
                                    <form
                                        action="https://formspree.io/f/xwkjoene" 
                                        target="_blank"
                                        method="POST"
                                    >
                                        <label>
                                            Your email:
                                            <input type="email" name="email" placeholder="Enter email here..."/>
                                        </label>
                                        <label>
                                            Name:
                                            <input type="text" name="name" placeholder="Enter name here..."/>
                                        </label>
                                        <label>
                                            Your message:
                                            <textarea name="message" placeholder="Let me know how I can help you..."></textarea>
                                        </label>

                                        <button type="submit">Send</button>
                                    </form>
                                    </div>
                                </div>
                            <div className="commissioninfo">
                                If you're interested in hiring me for a commission <br/>
                                or just want to contact me.<br/>
                                Simply fill out the form and I'll get back to you <br/> 
                                as soon as possible. <br/> 
                                <br/>
                                Don't hesitate to reach out!<br/> 
                                I'm always eager to hear  
                                about new creative opportunities!<br/> 
                                <br/> 
                                <br/> 
                                Examples of my works can be found in my Gallery<br/> 
                                or on my social media<br/>  
                                <div className="socialmedia">
                                    <div className="twitter">
                                        <SocialIcon url="https://twitter.com/ProcsanArt" bgColor="#fff" />
                                    </div>
                                    <div className="instagram">
                                        <SocialIcon url="https://www.instagram.com/procsanart/" bgColor="#fff" />
                                    </div>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Commission;