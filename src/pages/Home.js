import DinoDrink from "../assets/dino-drink-liquid.png"
import "../styles/home.css"

function Home() {
    return (
        <div className="container section-1">
            <div className="left">
                <h1 className="text1">DINO LUZZY</h1> 
                <h1 className="text2"> ENERGY DRINK</h1>
            </div>
            <div className="right">
                <img src={DinoDrink} className="dino-drink" alt="DinoLuzziDrink"></img>
            </div>
        </div>
    );
}   

export default Home