import { faker } from "@faker-js/faker";
import JsonViewer from "../components/json-viewer";
import FakerFormComponent from "../components/json-viewer/form";
import { useState } from "react";

export default function FakerJS() {
  const [json, setJson] = useState(null);

  const handleSubmit = ({ categories, numRecords }) => {
    const records = [];
    for (let i = 0; i < numRecords; i++) {
      const item = {};
      categories.forEach((category) => {
        item[category.keyName] = faker[category.category][category.method]();
      });
      records.push(item);
    }
    setJson(records);
  };

  return (
    <div>
      <FakerFormComponent onSubmit={handleSubmit} />
      {json ? <JsonViewer json={json}></JsonViewer> : null}
    </div>
  );
}
