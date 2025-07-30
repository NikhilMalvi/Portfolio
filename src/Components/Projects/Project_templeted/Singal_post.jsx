import React from "react";
import { useParams } from "react-router-dom";
import "./Singal_post.css";
import { projectDataWithAll } from "../item";
import { MdDateRange, MdOutlinePlace } from "react-icons/md";
import { FaLink, FaLayerGroup } from "react-icons/fa";

const Singal_post = () => {
  const { projectId } = useParams();
  const post_data = projectDataWithAll[0].projects.find(
    (project) => project.link_name.toString() === projectId
  );

  if (!post_data) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <title>{post_data.project_name} | Nikhil Malviya Project Showcase</title>

      <meta
        name="description"
        content="A modern and responsive real estate landing page built using React and Tailwind CSS. Designed and developed by Nikhil Malviya."
      />
      <div className="singal_post section_container">
        <div className="title">
          <h1>{post_data.project_name}</h1>
          <p>Here Some details About {post_data.project_name}</p>
        </div>
        <div className="max_container singal_container">
          <div className="col1">
            <img src={post_data.img} alt="" />
            <div className="list_post_data">
              <div className="post_icons">
                <MdDateRange size={20} color="#0068ff" />
                {post_data.date}
              </div>
              <div className="post_icons">
                <FaLink size={20} color="#0068ff" />
                <a href={post_data.link} target="_blank">
                  Website
                </a>
              </div>
              <div className="post_icons">
                <FaLayerGroup size={20} color="#0068ff" />
                {post_data.category}
              </div>
              <div className="post_icons">
                <MdOutlinePlace size={20} color="#0068ff" />
                {post_data.place}
              </div>
            </div>
          </div>
          <div className="col2">
            <h1 className="primery_heading">
              Name : <span>{post_data.project_name}</span>
            </h1>
            <h1 className="primery_heading">
              Tools: <span>{post_data.tool}</span>
            </h1>
            <h1 className="primery_heading">
              About: <span>{post_data.project_description}</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Singal_post;
