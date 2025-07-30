import React from "react";
import "./Project.css";
import Tab from "./Tab";
import { projectDataWithAll } from "./item";
const Project = () => {
  return (
    <>
      <title>Projects | Nikhil Malviya - Front-End Portfolio</title>

      <meta
        name="description"
        content="Explore a selection of projects developed by Nikhil Malviya, including responsive websites, React apps, and custom WordPress themes."
      />
      <div className="project section_container">
        <div className="project_heading">
          <h1>Project</h1>
          <p>Recently completed projects list</p>
        </div>

        <div className="project_tab">
          <Tab project_data={projectDataWithAll} />
        </div>
      </div>
    </>
  );
};

export default Project;
