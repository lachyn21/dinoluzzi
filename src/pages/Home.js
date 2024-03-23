import DinoDrink from "../assets/dino-drink-liquid.png"
import "../styles/home.css"

function Home() {
    return (
        <div className="container section-1">
            {/* Start of chatbot script */}
            <script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=c0a9e439-e854-4494-835e-75f303129020"></script>
            {/* End of chatbot script */}

            
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