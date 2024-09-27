import { faker } from "@faker-js/faker";
import JsonViewer from "../components/json-viewer";
import FakerFormComponent from "../components/json-viewer/form";
import { useState } from "react";

export default function FakerJS() {
  const [json, setJson] = useState(null);

  const handleSubmit = (categories) => {
    const json = {};

    categories.forEach((category) => {
      json[category.keyName] = faker[category.category][category.method]();
    });

    setJson(json);
  };

  return (
    <div>
      <FakerFormComponent onSubmit={handleSubmit} />
      {json ? <JsonViewer json={json}></JsonViewer> : null}
    </div>
  );
}
