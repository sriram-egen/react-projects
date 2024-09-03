import "./App.css";
import { Routes, Route } from "react-router-dom";
import AccordianPage from "./pages/accordian";
import HomePage from "./pages/home";
import RandomColor from "./components/random-color";
import StarRatingPage from "./pages/star-rating";
import ImageSliderPage from "./pages/image-slider";
import LoadMoreDataPage from "./pages/load-more-data";
import TreeViewPage from "./pages/tree-view";
import QrCodeGeneratorPage from "./pages/qr-code-generator";

function App() {
  return (
    <div className="App">
      <div></div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/accordian" element={<AccordianPage />} />
        <Route path="/random-color" element={<RandomColor />} />
        <Route path="/star-rating" element={<StarRatingPage />} />
        <Route path="/image-slider" element={<ImageSliderPage />} />
        <Route path="/load-more-data" element={<LoadMoreDataPage />} />
        <Route path="/tree-view" element={<TreeViewPage />} />
        <Route path="/qr-code-generator" element={<QrCodeGeneratorPage />} />
      </Routes>
    </div>
  );
}

export default App;
