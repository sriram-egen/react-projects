import './App.css';
import { Routes, Route } from "react-router-dom"
import AccordianPage from './pages/accordian';
import HomePage from './pages/home';
import RandomColor from './components/random-color';
import StarRatingPage from './pages/star-rating';

function App() {
 
  return (
    <div className="App">
      <div>

      </div>
      <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="/accordian" element={ <AccordianPage/> } />
        <Route path="/random-color" element={ <RandomColor /> } />
        <Route path="/star-rating" element={ <StarRatingPage /> } />
      </Routes>
    </div>
  )
}

export default App;
