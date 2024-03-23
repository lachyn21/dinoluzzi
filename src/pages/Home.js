import React from 'react';
import Divider from "../assets/divider.png";
import DinoDrink from "../assets/dino-drink-liquid.png";
import dialIcon from "../assets/dialIcon.png";
import energyIcon from "../assets/energyIcon.png";
import italyIcon from "../assets/italyIcon.png";
import leafIcon from "../assets/leafIcon.png";
import zeroIcon from "../assets/zeroIcon.png";
import "../styles/home.css";

function Home() {
    return (
        <>
        <div className="container section-1">
            <div className="left">
                <div className="sec1-title">
                    <h1 className="text1">DINO LUZZI <span className="text2">ENERGY DRINK</span></h1>
                </div>  
                <div className="sec1-p">
                    <p>
                        This delicious, healthful, energizing refresher made in Italy is distinguished from its more well-known competitors by its decided non-metallic after taste.
                        Dino Luzzi Energy Drink is rapidly expanding. If you do not see it in your favorite store please let us know!
                    </p>
                </div>
                <div className="sec1-p">
                    <p>
                    115 calories, 0 fat
                    </p>
                </div>
                <div className="sec1-btn">
                    <a href="https://www.amazon.com/dp/B09K7Y5DG7/ref=cm_sw_r_wa_api_glt_fabc_2XYCJFQW66HZ6QFF07QD" target="_blank" rel="noopener noreferrer" className="btn btn-accent">
                        Buy Now
                    </a>
                </div>
            </div>
            <div className="right">
                <img src={DinoDrink} className="dino-drink" alt="DinoLuzziDrink"></img>
            </div>
        </div>
        <div className='divider'>
            <img src={Divider} alt="DividerImage"></img>
        </div>
        <div className='container section-2'>
            <div className='top'>
                <div>
                    <h2>
                        Low Calories
                    </h2>
                </div>
                <div>
                    <h2>
                        Maximum Energy
                    </h2>
                </div>
                <div>
                    <h2>
                        Smart Organics
                    </h2> 
                </div>
            </div>
            <div className='bottom'>
                <div>
                    <img src={zeroIcon} className='icon'></img>
                    <h2>
                        Zero Fat
                    </h2>
                </div>
                <div>
                    <h2>
                       Italian Import
                    </h2>
                </div>
            </div>
        </div>

        </>

    );
}   

export default Home;
