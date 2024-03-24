import {Routes,Route} from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import News from './pages/News';
import Locations from './pages/Locations';
import FAQ from './pages/FAQ';
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
            <Route path="/news" element={<News />}/>
            <Route path="/locations" element={<Locations />}/>
            <Route path="/faq" element={<FAQ />}/>
            <Route path="*" element={<NotFound404 />}/>
        </Routes> 
      </div>
    </>
  );
}

export default App;
