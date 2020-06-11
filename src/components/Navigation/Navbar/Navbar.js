import React from "react";
import { NavLink, Link } from "react-router-dom";
import NavigationItems from "../Navigationitems/Navigationitems";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import classes from "./Navbar.css";
import Logo from "../../Logo/Logo";

const Navbar = props => (
  <header className={classes.Navbar}>
    <nav className={classes.Navigation}>
      <div className={classes.ToggleButton}>
        <DrawerToggleButton click={props.drawerClickHandler}/>
      </div>
      <div>
        <h1 className={classes.logo}> LOGO </h1>
      </div>
        <NavigationItems />
    </nav>
  </header>
);
export default Navbar;
