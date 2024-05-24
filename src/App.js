
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home/Home';
import EarlyBirdTour from './Pages/EarlyBirdTour/EarlyBirdTour';
import BookNow from './Pages/BookNow/BookNow';


function App() {
  return (
    <div className="App">
      
      <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/earlybirdtour" element={<EarlyBirdTour />} />     
            <Route path="/booknow" element={<BookNow/>} />       
          </Routes>
        </Router>
    </div>
  );
}

export default App;
