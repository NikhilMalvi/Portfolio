import React, { useState } from "react";
import { FaLayerGroup } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router";

const Tab = ({ project_data }) => {
  const [togglestate, setTogglestate] = useState(0);

  const toggleTab = (index) => {
    setTogglestate(index);
    console.log(index);
  };

  return (
    <div className="tabes">
      <div className="block_tabes max_container">
        {project_data.map((data, index) => {
          return (
            <div
              className={togglestate === index ? "tab tab_active" : "tab"}
              key={data.id}
              onClick={() => toggleTab(index)}
            >
              <h1>{data.category}</h1>
            </div>
          );
        })}
      </div>
      <div className="contant_tab max_container">
        {project_data.map((more_data, index) => {
          return more_data.projects.map((card) => {
            return (
              <div
                className={togglestate === index ? "card card_active" : "card"}
                key={card.id}
              >
                <img src={card.img} alt="" />
                <div className="card_data">
                  <h1>{card.project_name}</h1>
                  <div className="list_icon">
                    <FaLayerGroup size={15} color="var(--text-color)" />
                    <span>{card.category}</span>
                  </div>
                  <div className="read_more">
                    <Link to={`/project/${card.link_name}`}>Read more</Link>
                    <IoIosArrowRoundForward size={20} />
                  </div>
                </div>
              </div>
            );
          });
        })}
      </div>
    </div>
  );
};

export default Tab;
