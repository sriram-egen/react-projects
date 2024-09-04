import React from "react";
import { Link } from "react-router-dom";
import routes from "./routes";

function HomePage() {
  return (
    <div className="flex flex-col gap-4 my-24 w-screen place-items-center">
      <div>
        <h1 className="text-4xl font-bold">React Projects and Components</h1>
      </div>
      <div className="grid grid-cols-3 justify-center items-center gap-2">
        {routes.map((project) => (
          // <div className="flex items-center justify-center w-48 h-8 p-4">
          <Link
            className="bg-blue-500 w-auto block text-center content-center rounded-md h-24 hover:bg-blue-300 text-2xl"
            to={project.path}
          >
            {project.label}
          </Link>
          // </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
