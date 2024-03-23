import React, { useEffect } from 'react';
import DinoDrink from "../assets/dino-drink-liquid.png";
import "../styles/home.css";

function Home() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "//code.tidio.co/lajckmxmipp2wtemvuou2vge9ma51un1.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="container section-1">
            <div className="left">
                <div className="sec1-title">
                    <h1 className="text1">DINO LUZZI</h1> 
                    <h1 className="text2"> ENERGY DRINK</h1>
                </div>  
                <div className="sec1-p">
                    <p>
                    This delicious, healthful, energizing refresher made in Italy is distinguished from its more well-known competitors by its decided non-metallic after taste.
                    </p>
                </div>
                
            </div>
            <div className="right">
                <img src={DinoDrink} className="dino-drink" alt="DinoLuzziDrink"></img>
            </div>
        </div>
    );
}   

export default Home;
