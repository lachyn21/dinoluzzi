import React from 'react';
import Divider from "../assets/divider.png";
import DinoDrink from "../assets/dino-drink-liquid.png";
import DialIcon from "../assets/dialIcon.png";
import EnergyIcon from "../assets/energyIcon.png";
import ItalyIcon from "../assets/italyIcon.png";
import LeafIcon from "../assets/leafIcon.png";
import ZeroIcon from "../assets/zeroIcon.png";
import DinoSparkle from "../assets/dinoSparkle.png"

import "../styles/home.css";

function Home() {
    return (
        <>
        <div className="section-1">
            <div className="left">
                <div className="sec1-title section-title">
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
            <div className="img-container">
                <img src={DinoDrink} className="medium-image" alt="DinoLuzziDrink"></img>
            </div>
        </div>
        <div className='divider'>
            <img src={Divider} alt="DividerImage"></img>
        </div>
        <div className='section-2'>
            <div>
                <div className='icon-container'>
                    <img src={DialIcon} className='icon' alt='DialIcon'></img>
                    <h2>
                        Low Calories
                    </h2>
                </div>
                <div className='icon-container'>
                    <img src={EnergyIcon} className='icon' alt='EnergyIcon'></img>
                    <h2>
                        Maximum Energy
                    </h2>
                </div>
                <div className='icon-container'>
                    <img src={LeafIcon} className='icon' alt='LeafIcon'></img>
                    <h2>
                        Smart Organics
                    </h2>
                </div>
            </div>
            <div>
                <div className='icon-container'>
                    <img src={ZeroIcon} className='icon' alt='ZeroIcon'></img>
                    <h2>
                        Zero Fat
                    </h2>
                </div>
                <div className='icon-container'>
                    <img src={ItalyIcon} className='icon' alt='ItalIcon'></img>
                    <h2>
                        Italian Import
                    </h2>
                </div>
            </div>
        </div>
        <div className='divider'>
            <img src={Divider} alt="DividerImage"></img>
        </div>
        <div className='section-3'>
            <div className='img-container'>
                <img src={DinoSparkle} className="large-image" alt="DinoLuzziDrink"></img>
            </div>
            <div className='right'>
                <h2 className='section-title'>
                    Maximum Energy
                </h2>
                <div class="info-container">
                    <h3 className='info-title' >
                        Vitamin B2
                    </h3>
                    <p>
                        Helps break down fats, proteins, and carbohydrates. B2 plays a vital role in maintaining the body’s energy supply. 
                    </p>
                </div>
                <div class="info-container">
                    <h3 className='info-title' >
                        Vitamin B6
                    </h3>
                    <p>
                        Helps with muscle repair. Vitamins are essential micro-nutrients that are required for maintaining normal body functions.
                    </p>
                </div>
                <div class="info-container">
                    <h3 className='info-title' >
                        Vitamin B12
                    </h3>
                    <p>
                        Helps keep blood and nerve cells healthy.
                    </p>
                </div>
            </div>
        </div>
        <div className='section-4'>
            <div className='flex-container'>
                <div className='image-container bg-image black-can'>
                </div>
                <h2>Dino Luzzi Original</h2>
                <a href="https://www.amazon.com/dp/B09K7Y5DG7/ref=cm_sw_r_wa_api_glt_fabc_2XYCJFQW66HZ6QFF07QD?th=1" target="_blank" rel="noopener noreferrer" className="btn btn-accent">
                        Buy Now
                </a>
            </div>
            <div className='flex-container'>
                <div className='image-container bg-image white-can'>
                </div>
                <h2>Dino Luzzi Sugar Free</h2>
                <a href="https://www.amazon.com/dp/B0C46ZY3LX/ref=cm_sw_r_wa_api_glt_fabc_2XYCJFQW66HZ6QFF07QD?th=1" target="_blank" rel="noopener noreferrer" className="btn btn-accent">
                        Buy Now
                </a>
            </div>
            
        </div>

        </>

    );
}   

export default Home;
