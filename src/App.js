import './App.css';
import {Routes,Route} from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import NotFound404 from './pages/NotFound404';
import Events from './pages/Events';
import Home from './pages/Home';

function App() {
  return (
    <>
    <Navbar />
      <div className='container'>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/events" element={<Events />}/>
            <Route path="*" element={<NotFound404 />}/>
        </Routes> 
      </div>
    </>
  );
}

export default App;
