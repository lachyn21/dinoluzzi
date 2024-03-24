import {Routes,Route} from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer";
import Home from './pages/Home';
import Locations from './pages/Locations';
import NotFound404 from './pages/NotFound404';
import Chatbot from './components/chatbot';


function App() {
  return (
    <>
    <Navbar />
      <div className='container'>
        <Chatbot />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/locations" element={<Locations />}/>
            <Route path="*" element={<NotFound404 />}/>
        </Routes> 
      </div>
    <Footer />
    </>
  );
}

export default App;
