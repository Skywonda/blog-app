import React from "react";
// import classes from "../styles/Home.module.css";
import classes from "../styles/Home.module.css";

import { Link } from "@mui/icons-material";
const HomeLinks = () => {
  return (
    <div className={classes.Buttons}>
      <Link to="iconic" className={classes.Link}>
        Ionic
      </Link>
      <Link to="iconic" className={classes.Link}>
        Intermediate
      </Link>
      <Link to="iconic" className={classes.Link}>
        Beginner
      </Link>
      <Link to="iconic" className={classes.Link}>
        Angular
      </Link>
      <Link to="iconic" className={classes.Link}>
        Phraser
      </Link>
      <Link to="iconic" className={classes.Link}>
        Stencil
      </Link>
      <Link to="iconic" className={classes.Link}>
        User Interface
      </Link>
      <Link to="iconic" className={classes.Link}>
        Video
      </Link>
      <Link to="iconic" className={classes.Link}>
        Balance
      </Link>
      <Link to="iconic" className={classes.Link}>
        Balance
      </Link>
      <Link to="iconic" className={classes.Link}>
        Games
      </Link>
      <Link to="iconic" className={classes.Link}>
        Advanced
      </Link>
    </div>
  );
};

export default HomeLinks;
