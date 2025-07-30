import React from "react";
import "./Container.CSS";
import TopContainer from "./TopContainer";
import MainContainer from "./MainContainer";
import Home from "./Home/Home";
const Container = ({ open, close, openmenu }) => {
  const open_menu = open;
  const close_menu = close;
  const isOpen = openmenu;
  return (
    <div className="container" onClick={isOpen ? "" : close_menu}>
      <TopContainer
        open_menu={open_menu}
        close_menu={close_menu}
        isOpen={isOpen}
      />
      <MainContainer />
    </div>
  );
};

export default Container;
