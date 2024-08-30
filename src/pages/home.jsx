import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const projectsList = [
    {
      label: "Accordian",
      path: "/accordian",
    },
    {
      label: "Random Color",
      path: "/random-color",
    },
    {
      label: "Star Rating",
      path: "/star-rating",
    },
    {
      label: "Image Slider",
      path: "/image-slider",
    },
  ];
  return <div className="project-list">{
    projectsList.map(project => <Link className="project" to={project.path}>{project.label}</Link>)
  }</div>;
}

export default HomePage;
