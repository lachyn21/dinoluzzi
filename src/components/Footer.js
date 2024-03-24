import React from 'react';
import logo from "../assets/cropped-Dino-Logo-1-1.png";
import Facebook from "../assets/IconFacebook.png"
import Instagram from "../assets/IconInstagram.png"
import Linkedin from "../assets/IconLinkedin.png"
import Pintrest from "../assets/IconPintrest.png"
import X from "../assets/IconX.png"
import Youtube from "../assets/IconYoutube.png"



function Footer() {
    return (
        <>
        <div className='footer'>
            <a href="/">
                    <img src={logo} className="cropped-logo" alt="DinoLuzziLogo"></img>
            </a>
            <div className="socials">
                <a href='https://www.facebook.com/people/Italian-Food-Beverage-Corp-symbol-IFBC/100064727286365/' target="_blank" rel="noopener noreferrer">
                    <img src={Facebook} alt='Facebook Logo' className='socials-image'></img>
                </a>
                <a href='https://twitter.com/ifbchubusa' target="_blank" rel="noopener noreferrer">
                    <img src={X} alt='X Logo' className='socials-image'></img>
                </a>
                <a href='https://www.youtube.com/channel/UCu_Nl83B6hpVISYxXDxPT8A'>
                    <img src={Youtube} alt='Youtube Logo' className='socials-image'></img>
                </a>
                <a href='https://www.linkedin.com/in/dinoluzzi' target="_blank" rel="noopener noreferrer">
                    <img src={Linkedin} alt='Linkedin Logo' className='socials-image'></img>
                </a>
                <a href='https://pinterest.com/search/pins/?q=Dinoluzzienergydrink' target="_blank" rel="noopener noreferrer">
                    <img src={Pintrest} alt='Pinterest Logo' className='socials-image'></img>
                </a>
                <a href='https://www.instagram.com/italian_food_beverage_/' target="_blank" rel="noopener noreferrer">
                    <img src={Instagram} alt='Instagram Logo' className='socials-image'></img>
                </a>
            </div>
        </div>
        </>
    )
}

export default Footer