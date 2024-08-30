import './App.css';
import { Routes, Route } from "react-router-dom"
import AccordianPage from './pages/accordian';
import HomePage from './pages/home';
import RandomColor from './components/random-color';

function App() {
 
  return (
    <div className="App">
      <div>

      </div>
      <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="/accordian" element={ <AccordianPage/> } />
        <Route path="/random-color" element={ <RandomColor /> } />
      </Routes>
    </div>
  )
}

export default App;
