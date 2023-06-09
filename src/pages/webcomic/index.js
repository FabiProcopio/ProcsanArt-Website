import React, { useState, useEffect } from "react";
import Header from '../../components/header/index'
import Footer from "../../components/footer";
import './styles.css'


function Webcomic(){
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
            <div id="body" className="webcomicbody">
                <section id="banner" className="webcomicbanner" style={parallaxStyle}>
                    <img src={require("../../assets/hornsbigger.png")} alt={"background"} />
                </section>
                <div className="webcomic-content"> 
                    <div className="teasertext">
                        <h3>- SOON ™-</h3>
                        <p> Release of the first Chapter of  ̸̷̸̴̷̴̴̴̴̵̴̵̶̷̶̵̴̷̶̶̴̵̵̶̵̶̴̸̶̸̸̵̵̷̴̴̸̴̴̵̵̸̸̶̷̶̶̶̶̶̶̵̷̷̸̶̷̸̴̸̶̸̸̷̴̴̷̸̴̶̵̸̷̴̷̶̷̸̷̴̵̸̵̵̵̷̵̸̸̷̷̸̶̷̸̶̸̶̶̶̴̵̵̸̵̴̸̷̶̵̵̶̵̴̸̵̴̸̵̴̵̴̶̵̸̵̸̴̷̵̷̴̴̶̶̶̷̶̸̵̷̶̴̸̵̸̵̴̸̵̴̴̸̷̸̴̶̴̴̷̷̴̸̶̶̸̴̶̴̸̵̵̷̶̶̸̵̷̴̴̴̷̷̷̷̵̸̶̵̷̷̵̷̵̶̸̸̵̵̶̴̴̸̴̵̸̶̴̴̷̵̢̨̛̛͖̬̺̘̺̰̺͉̻̭̹͓̜̫̖̗̗̭̙͉̻̤̘̖̰͕̯̲̺̲̭̲̳̭̯̫̯̱̬̻͚̮̠͓̫̲͕̜̖̎̓̓̀̍̎́̾̀̑̉̇̆̃͑̀́̐̂̍̂̓̂͒̈́̽̒̓̇̂̔̊̃̋̇͌͆̓̉͐͑̑̕̚̕̕̚͘̚͜͠͝͝ͅͅļ̸̸̴̵̷̶̴̶̸̶̶̶̵̸̷̷̷̵̸̴̷̸̴̶̷̷̸̶̴̴̶̵̴̷̸̸̷̴̶̵̴̵̴̸̵̴̴̸̷̸̵̵̴̴̸̸̴̸̵̴̷̵̶̸̶̴̸̸̵̴̵̴̵̷̶̷̵̵̸̸̴̶̷̵̸̶̸̴̸̷̴̷̴̵̴̸̵̷̴̶̵̷̸̸̵̷̶̵̵̴̵̵̷̷̴̶̶̷̷̵̴̴̷̷̶̸̸̸̸̶̶̵̸̸̵̵̷̴̴̴̴̵̵̸̴̷̵̷̵̴̶̴̴̷̸̵̵̵̴̴̸̸̴̸̷̷̷̷̶̵̸̵̶̴̸̴̸̸̴̷̶̴̴̸̵̸̶̵̴̴̸̵̶̵̸̸̶̶̸̴̸̶̵̸̴̷̴̴̵̷̷̛̛̛̛̦̩͎͎͖̙̻͚͚͕̳̪͕̟͎̳̫͖̙̲̲̦̬̪̙̹̟̫̩̣̰̬͙̭̬̙̞̤̙̫̪̱̝͖̰̤͕͉̜̜̓͒̊̍̎̾̒̾͂̒̒͌̊́͐̓̋̂̐͐̈́̔̊̉̏͆͒̔̃̿̊̀̂̂̓̃̾̓͛̾̑̓̓̂͘̕͘͜͝͝͠ͅͅυ̷̷̸̸̶̵̷̵̸̴̶̶̴̸̸̸̴̵̵̷̷̶̶̷̵̸̸̵̵̵̶̶̴̸̷̷̴̵̴̸̸̸̴̵̴̷̷̸̷̶̴̷̴̷̸̵̵̷̴̵̴̴̵̵̸̸̸̵̷̶̸̴̵̵̵̸̵̸̶̸̴̷̵̶̵̸̴̴̴̴̶̶̵̷̸̸̷̶̷̷̷̸̴̴̶̵̵̴̷̴̶̶̷̷̸̸̵̶̵̵̸̸̴̶̸̶̵̶̷̵̸̶̶̵̶̷̵̸̶̶̵̸̶̷̸̴̴̴̵̵̵̶̸̵̶̴̶̶̸̷̸̵̸̷̵̵̴̴̵̸̸̷̶̸̷̴̸̶̵̷̵̶̸̴̷̷̶̶̶̵̷̴̸̶̶̷̷̸̷̷̸̵̷̸̷̵̸̴̷̵̶̨̨̨̨̢̢̱̝̩̤̣̺̭̭̠̟̞̤̟̤͔̪͉͈̳̳̺͇̺̘͎̭̝͓̟̪̲͕̜̼̖̰̬̼͕̭̳̠̖̳͗̀͒͛̓̋̈͌̅̈́̌̽̄̀͊̒́͆̿͊̈́̓̓̄̿̃̅̉͂̓̇̌͂͋̿̈́̿͗̇̓̃̑̇̎̏͊̀͘͘͜͜͝͝͝͝͝ͅͅơ̵̵̴̴̶̶̶̴̷̷̵̸̵̶̵̶̴̶̷̸̴̷̶̵̶̸̴̵̴̸̴̶̷̴̷̴̷̸̸̷̵̷̷̵̵̵̷̸̶̴̸̴̶̴̵̷̸̶̸̸̷̸̵̵̶̵̴̴̴̴̵̷̶̷̸̴̷̷̵̶̶̷̶̶̶̸̷̵̵̴̴̴̶̶̴̶̷̶̷̷̸̴̵̴̸̶̷̸̴̸̸̸̶̷̸̵̴̶̴̷̶̵̶̴̷̴̶̷̷̴̴̸̶̷̶̴̸̵̷̵̶̴̷̴̸̵̷̸̵̷̵̷̵̵̸̴̶̸̵̴̶̶̷̶̸̸̴̸̷̷̵̵̴̴̴̸̷̶̶̶̷̶̶̵̷̷̵̴̶̸̷̵̷̷̴̴̸̸̴̴̸̵̵̵̴̵̴̵̷̴̶̡̛̛̗̱͖̦̦͖̱̖̣̗̼̖͉̖̳̥̼͓̣̯̪̩̗̻̙̗̥͍̫͇̰̹̬̰̤̮̲̭̗͇̫̪̞̻͓̝̼̪͉̫̞͚̈́̌̍̏̊͑̒̇͌̓̀̈́̇̔̈́́̅̀͗̍̈̄̈́̄͋̏̏͋̑̃̄̾̀̍͂̎͛̏́̈́̔̐̋̋̂͛͋͘̚̕͝ͅƨ̴̷̴̴̷̶̵̶̵̷̴̸̶̶̷̴̴̴̶̶̶̸̵̷̵̷̷̷̵̷̶̸̷̴̵̴̵̷̶̸̵̸̶̷̶̵̶̵̷̵̸̸̴̵̸̸̶̷̶̴̵̵̶̵̸̴̵̴̵̴̶̸̶̴̵̸̸̵̸̵̸̸̵̸̵̷̷̴̶̶̵̷̵̷̸̵̸̶̵̶̵̶̵̴̷̷̸̵̷̵̶̵̵̴̶̸̴̸̶̴̵̷̶̴̸̸̸̶̴̶̵̸̷̵̸̸̵̵̷̸̴̴̶̵̴̷̵̴̸̴̷̶̵̷̵̶̶̶̸̴̷̶̵̸̸̶̴̶̷̴̴̷̶̵̷̶̸̶̸̷̸̴̶̶̷̵̵̷̷̷̶̵̸̸̵̷̴̵̶̶̵̵̸̵̷̵̶̷̵̴̷̡̛̘̩̖̪͚̯̹͚̜̭̪̼̣̱̲͉̰̰̻͈͙͕͖̭͕͓͙̤̙̦̭̳͎͚̰̭̭̣̟̘̖̻̝̻̻̙̗̟̥̖͛́̂̾̈̀̎͆͑̀̽͛̾̀͛̊̑̂̾̓̅͂̈́̑̀̏̆̍̓̋̀̈́̑̀̉̂͌͑̌̂͗̉͘̚͘̚̚̚͘͜͜͝͝͠͝ͅ-̴̵̴̶̷̷̷̵̷̶̴̴̵̶̶̵̷̸̷̶̷̴̶̴̷̸̷̶̴̶̷̴̷̶̴̴̶̵̷̶̶̴̷̸̵̶̷̶̶̶̸̴̵̷̵̷̷̷̶̸̸̴̸̵̵̷̷̵̴̵̴̷̶̵̴̶̸̶̶̵̵̸̷̵̸̶̸̶̶̶̸̷̶̴̵̷̴̴̶̷̶̸̸̶̵̶̶̴̶̴̷̶̷̶̶̵̴̵̴̶̶̴̴̸̵̸̶̵̵̷̴̵̶̸̵̸̴̵̷̴̶̸̶̴̸̶̵̷̶̵̷̶̸̶̸̴̸̷̸̶̵̶̵̷̵̵̴̴̵̸̵̶̵̸̴̷̵̸̶̸̵̶̶̸̴̴̸̴̴̶̶̴̵̶̵̵̵̶̶̸̸̷̸̷̷̶̴̵̵̸̶̨̧̧̨̛̛̛̗͙͎͈̯̬͚̮̜͎̼͓̥͉̬̤͈̣͇̩͉̝̘͚̭̥͚̙̬͚̪̩̝̜̤̯̩̘͍̯̺̦͕̭͇͇͍̪͖̥̀̊̀̋͂̔̅͆̀͒̌̓͊̉͂̓͊͌͂̆̍̓̏͑̑̉̏̑̍̿̓̍̋̽̂̾̀̔̋͒͂̆́͛̄͌͋̕͘͠͝n̷̷̶̵̵̸̴̵̷̵̵̶̴̵̶̵̴̴̴̴̷̸̴̷̶̵̷̸̸̵̴̶̷̶̷̷̵̸̸̴̷̴̸̴̴̶̴̸̴̴̵̸̷̸̸̶̶̸̴̵̷̶̴̵̵̴̸̶̴̷̵̵̸̶̸̸̷̸̴̸̵̷̸̶̴̷̴̸̴̸̸̸̶̶̵̶̵̴̷̶̸̶̶̵̴̵̸̵̷̵̸̷̴̷̶̶̷̶̴̶̵̷̴̵̶̴̴̷̶̵̸̷̸̷̷̸̷̶̵̴̴̴̶̸̴̵̵̴̴̶̷̵̷̴̶̸̶̶̵̵̸̵̵̴̸̵̶̶̵̷̶̸̷̴̴̷̴̷̶̵̵̴̸̵̷̶̸̵̷̶̸̸̷̸̵̶̶̶̴̶̷̸̶̴̶̵̶̸̵̸̴̡̢̨̨̨̨̼̞͖̺͙̫̬͍̳̘̯̜̱͎̭͎̗̭̟̩͓͕̖̪̘͖͍͕̲͎͓̺̬͖̹͕̖̤̳̗̖͚̭̫̖̈̎̽̽̔̎͑̓̓̈́͒̏̑̎͒̉̊̅͊̎̃̌̊̉̈́̌̂͂̋͂̔̆͌̊̊̽̓̅͂͒͌͌̒̿̾̑͘̚̕͜͜͜͠͠͝͝͝ɘ </p>
                    </div>                 
                    <div className="treaserimg">
                        <img src={require("../../assets/teasersite-comic.JPG")} alt={"teaser"} />
                    </div> 
                </div>
                
            </div>
            <Footer />
        </>
    )
}

export default Webcomic;