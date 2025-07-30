import React, { useEffect, useState } from "react";
import "./Home.css";
import Home_light_img from "../../img/Home_light_img.png";
import Home_dark_img from "../../img/Home_dark_img.png";
import react_img from "../../img/React_js.webp";
import css_img from "../../img/CSS.webp";
import javascript_img from "../../img/js.png";
import tailwind_css from "../../img/tailwind_css.png";
import wordpress_img from "../../img/wordpress.webp";
import { FiArrowRight } from "react-icons/fi";

import html_img from "../../img/html.png";
import { Link } from "react-router-dom";
const Home = () => {
  let tech_stack = [
    {
      img: html_img,
      tech_name: "Html",
    },
    {
      img: css_img,
      tech_name: "Css",
    },
    {
      img: tailwind_css,
      tech_name: "Tailwind Css",
    },
    {
      img: javascript_img,
      tech_name: "Java Script",
    },
    {
      img: react_img,
      tech_name: "React Js",
    },
    {
      img: wordpress_img,
      tech_name: "Wordpress",
    },
  ];

  const [logo, setLogo] = useState(Home_light_img);

  useEffect(() => {
    const updateLogo = () => {
      setLogo(
        document.body.classList.contains("light-mode")
          ? Home_light_img
          : Home_dark_img
      );
    };

    updateLogo();

    const checkbox = document.getElementById("theme-checkbox");
    checkbox?.addEventListener("change", updateLogo);

    return () => checkbox?.removeEventListener("change", updateLogo);
  }, []);
  return (
    <>
      <title>Nikhil Malviya | Front-End & WordPress Developer Portfolio</title>

      <meta
        name="description"
        content="Hi, I'm Nikhil Malviya — a Front-End Developer and WordPress expert based in India. I build clean, responsive websites that deliver seamless user experiences."
      />

      <div className="home">
        <section className="section_container row1">
          <div className="max_container">
            <div className="col1">
              <h1>Hello, I'm Nikhil Malviya</h1>
              <h2>A Front-end web Developer & Wordpress Developer</h2>
              <Link className="btn" to="/contact">
                Contact us
                <FiArrowRight />
              </Link>
            </div>
            <div className="col2">
              <img src={logo} alt="" />
            </div>
          </div>
        </section>
        <section className="section_container row2">
          <h1 className="tech_heading">Tech Stack</h1>
          <div className="tech_stack">
            {tech_stack.map((tech) => (
              <div className="image_boxes" key={tech.tech_name}>
                <div className="box">
                  <img src={tech.img} alt="" />
                  <h1 className="tech_name">{tech.tech_name}</h1>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
