import {Routes,Route} from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import News from './pages/News';
import Locations from './pages/Locations';
import Purchase from './pages/Purchase';
import FAQ from './pages/FAQ';
import NotFound404 from './pages/NotFound404';



function App() {
  {/* Script for chatbot */}
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
    <>
    <Navbar />
      <div className='container'>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/news" element={<News />}/>
            <Route path="/locations" element={<Locations />}/>
            <Route path="/purchase" element={<Purchase />}/>
            <Route path="/faq" element={<FAQ />}/>
            <Route path="*" element={<NotFound404 />}/>
        </Routes> 
      </div>
    </>
  );
}

export default App;
