import './App.css';
import {Routes,Route} from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import News from './pages/News';
import Locations from './pages/Locations';
import Purchase from './pages/Purchase';
import NotFound404 from './pages/NotFound404';



function App() {
  return (
    <>
    <Navbar />
      <div className='container'>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/news" element={<News />}/>
            <Route path="/locations" element={<Locations />}/>
            <Route path="/purchase" element={<Purchase />}/>
            <Route path="*" element={<NotFound404 />}/>
        </Routes> 
      </div>
    </>
  );
}

export default App;
