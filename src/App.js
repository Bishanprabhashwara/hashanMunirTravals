import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Video from './Component/HeroVideo/Video';
import Hero from './Component/Hero/Hero';
import Home from './Pages/Home/Home';
import EarlyBirdTour from './Pages/EarlyBirdTour/EarlyBirdTour';


function App() {
  return (
    <div className="App">
      
      <Router>
          <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/earlybirdtour" element={<EarlyBirdTour />} />          
          </Routes>
        </Router>
    </div>
  );
}

export default App;
