import React from "react";
import Contact from "./Contacts";
import Github from "./Github";
import Header from "./Header";
import Main from "./Main";
import Project from "./Project";
import Section from "./Section";
import Skills from "./Skills";
import Stat from "./Stat";

export const Home = () => {
  return (
    <div>
      <Header />

      <Main />
      <Section />
      <Skills />

      <Project />
      <Github />
      <Stat />
      <Contact />
    </div>
  );
};
