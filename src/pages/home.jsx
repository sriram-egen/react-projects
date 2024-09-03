import React from "react";
import { Link } from "react-router-dom";
import routes from "./routes";

function HomePage() {
  return (
    <div className="project-list">
      {routes.map((project) => (
        <Link className="project" to={project.path}>
          {project.label}
        </Link>
      ))}
    </div>
  );
}

export default HomePage;
