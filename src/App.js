
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './Pages/Home/Home';
import EarlyBirdTour from './Pages/EarlyBirdTour/EarlyBirdTour';
import BookNow from './Pages/BookNow/BookNow';
import Gihon from './Pages/Gihon/Gihon';
import Arashiyama from './Pages/Arashiyama/Arashiyama';
import Nara from './Pages/Nara/Nara';

function App() {
  return (
    <div className="App">
      
      <Router>
          <Routes>
            <Route path="/hashanMunirTravals/" element={<Home/>} />
            <Route path="/hashanMunirTravals/earlybirdtour" element={<EarlyBirdTour />} />     
            <Route path="/hashanMunirTravals/booknow" element={<BookNow/>} />  
            <Route path="/hashanMunirTravals/gihon" element={<Gihon/>} />    
            <Route path="/hashanMunirTravals/arashiyama" element={<Arashiyama/>} /> 
            <Route path="/hashanMunirTravals/nara" element={<Nara/>} />      
          </Routes>
        </Router>
    </div>
  );
}

export default App;
