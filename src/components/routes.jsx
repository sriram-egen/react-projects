import { Routes, Route } from "react-router-dom";
import AccordianPage from "../pages/accordian";
import HomePage from "../pages/home";
import RandomColor from "../pages/random-color";
import StarRatingPage from "../pages/star-rating";
import ImageSliderPage from "../pages/image-slider";
import LoadMoreDataPage from "../pages/load-more-data";
import TreeViewPage from "../pages/tree-view";
import QrCodeGeneratorPage from "../pages/qr-code-generator";
import ThemeGeneratorPage from "../pages/theme-generator";
import ScrollIndicatorPage from "../pages/scroll-indicator";
import CustomTabsPage from "../pages/custom-tabs";

export default function RouteLinks() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/accordian" element={<AccordianPage />} />
      <Route path="/random-color" element={<RandomColor />} />
      <Route path="/star-rating" element={<StarRatingPage />} />
      <Route path="/image-slider" element={<ImageSliderPage />} />
      <Route path="/load-more-data" element={<LoadMoreDataPage />} />
      <Route path="/tree-view" element={<TreeViewPage />} />
      <Route path="/qr-code-generator" element={<QrCodeGeneratorPage />} />
      <Route path="/theme-generator" element={<ThemeGeneratorPage />} />
      <Route path="/scroll-indicator" element={<ScrollIndicatorPage />} />
      <Route path="/custom-tabs" element={<CustomTabsPage />} />
    </Routes>
  );
}
