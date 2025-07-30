import React, { useEffect, useState } from "react";
import About_dark_img from "../../img/About_dark_img.png";
import About_light_img from "../../img/About_light_img.png";
import Education_dark from "../../img/Education_dark.png";
import Education_light from "../../img/Education_light.png";
import "./About.css";

const About = () => {
  const [isLightMode, setIsLightMode] = useState(true);

  useEffect(() => {
    const checkTheme = () => {
      setIsLightMode(document.body.classList.contains("light-mode"));
    };

    checkTheme();

    const checkbox = document.getElementById("theme-checkbox");
    checkbox?.addEventListener("change", checkTheme);

    return () => checkbox?.removeEventListener("change", checkTheme);
  }, []);

  return (
    <>
      <title>About | Nikhil Malviya - Front-End Developer</title>
      <meta
        name="description"
        content="Learn more about Nikhil Malviya, a skilled Front-End and WordPress developer based in Ahmedabad, India."
      />
      <div className="About">
        <div className="section_container About_me">
          <div className="max_container">
            <div className="col1">
              <img
                src={isLightMode ? About_light_img : About_dark_img}
                alt=""
              />
            </div>
            <div className="col2">
              <h1>About</h1>
              <p>
                I am a skilled Front-End Developer based in Ahmedabad, Gujarat,
                India, with over one year of experience in the IT industry. I
                specialize in building responsive, user-focused websites using
                modern technologies such as HTML, CSS, JavaScript, Tailwind CSS,
                and React, along with expertise in WordPress and Elementor.
              </p>
              <p>
                My focus lies in creating clean, efficient, and visually
                engaging front-end solutions that deliver seamless user
                experiences. From developing custom layouts to ensuring
                cross-platform compatibility, I am committed to writing
                maintainable code that meets both technical requirements and
                user needs.
              </p>
            </div>
          </div>
        </div>
        <div className="section_container My_workdata">
          <div className="container_data">
            <div className="box_heding">
              <h1>
                1<sup>+</sup>
              </h1>
              <p>Years of experience</p>
            </div>
            <div className="box_heding">
              <h1>90%</h1>
              <p>Positive feedback</p>
            </div>
            <div className="box_heding">
              <h1>8</h1>
              <p>Projects completed</p>
            </div>
          </div>
        </div>
        <div className="section_container MyEducation">
          <div className="max_container">
            <div className="col1">
              <h1>Education</h1>
              <p>
                I hold a Bachelor of Science in Mathematics from CU Shah Science
                College, Ahmedabad, graduating in 2023 with a 6.07 CGPA, where I
                developed strong analytical and problem-solving skills that
                complement my technical expertise in web development. Prior to
                that, I completed my Higher Secondary Certificate in Science
                from NM High School, Ahmedabad, in 2020 with 65.78%, building a
                solid foundation in logical reasoning and scientific principles
                that support my career as a developer.
              </p>
            </div>
            <div className="col2">
              <img
                src={isLightMode ? Education_light : Education_dark}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
