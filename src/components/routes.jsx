import { Routes, Route } from "react-router-dom";
import {
  AccordianPage,
  HomePage,
  RandomColor,
  StarRatingPage,
  ImageSliderPage,
  LoadMoreDataPage,
  TreeViewPage,
  QrCodeGeneratorPage,
  ThemeGeneratorPage,
  ScrollIndicatorPage,
  CustomTabsPage,
  CustomModalPopupPage,
  GithubProfileFinderPage,
  SearchHighlightMarkJs,
} from "../pages";

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
      <Route path="/custom-modal-popup" element={<CustomModalPopupPage />} />
      <Route
        path="/github-profile-finder"
        element={<GithubProfileFinderPage />}
      />
      <Route path="/search-string" element={<SearchHighlightMarkJs />} />
    </Routes>
  );
}
