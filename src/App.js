import './App.css';
import { Routes, Route } from "react-router-dom"
import AccordianPage from './pages/accordian';
import HomePage from './pages/home';


function App() {
 
  return (
    <div className="App">
      <div>

      </div>
      <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="/accordian" element={ <AccordianPage/> } />
      </Routes>
    </div>
  )
}

export default App;
