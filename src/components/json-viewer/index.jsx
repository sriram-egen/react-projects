import * as React from "react";

import { JsonView, allExpanded, defaultStyles } from "react-json-view-lite";
import "react-json-view-lite/dist/index.css";

const JsonViewer = ({ json }) => {
  return (
    <React.Fragment>
      <JsonView
        data={json}
        shouldExpandNode={allExpanded}
        style={defaultStyles}
      />
    </React.Fragment>
  );
};

export default JsonViewer;
