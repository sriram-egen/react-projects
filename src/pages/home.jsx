import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const projectsList = [
    {
      label: "Accordian",
      path: "/accordian",
    },
  ];
  return <div>{
    projectsList.map(project => <Link to={project.path}>{project.label}</Link>)
  }</div>;
}

export default HomePage;
