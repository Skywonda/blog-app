import React from "react";
import classes from "../styles/Home.module.css";
import { Link } from "react-router-dom";
import Articles from "../components/ui/articles/articles";
import HomeContent from "../components/ui/HomeContentMain";
const Home = () => {
  return (
    <div>
      <HomeContent />
      <Articles />
    </div>
  );
};

export default Home;
