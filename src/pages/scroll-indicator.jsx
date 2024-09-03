import React from "react";
import ScrollIndicator from "../components/scroll-indicator";

export default function ScrollIndicatorPage() {
  return (
    <div>
      {/* Scroll Indicator Component */}
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
    </div>
  );
}
