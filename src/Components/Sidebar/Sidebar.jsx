import "./Sidebar.css";
import profile_img from "../../img/profile_img.jpg";
import { FaInstagram, FaFacebookF, FaLinkedin, FaGithub } from "react-icons/fa";

import Imge_slider from "./Imge_slider";
import { Link } from "react-router";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile">
        <img src={profile_img} alt="" />
        <h1 className="proflie_name">Malviya Nikhil</h1>
        <h2>Wordpress & react js Developer</h2>
        <div className="about_button">
          <Link className="btn btn_border" to="/about">
            About me
          </Link>
        </div>
      </div>
      <Imge_slider />
      <div className="icons_container">
        <h3 className="follow">Follow Me</h3>
        <div className="social_icons">
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#" className="facebook">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaLinkedin />
          </a>
          <a href="#">
            <FaGithub />
          </a>
        </div>
        <div className="Copy_right">
          <h1> © 2024 ❤️ Nikhil Malviya</h1>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
