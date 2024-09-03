import React from "react";
import ThemeGenerator from "../components/light-dark-theme";

function ThemeGeneratorPage() {
  return (
    <div>
      {/* Theme Generator Component */}
      <ThemeGenerator url={'https://picsum.photos/v2/list'} limit="10" />
    </div>
  );
}

export default ThemeGeneratorPage;
