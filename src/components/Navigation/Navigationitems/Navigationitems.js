import React from "react";
import Navigationitem from "./Navigationitem/Navigationitem";
import classes from "./Navigationitems.css";
const navigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      
      <Navigationitem link="/cart">
        <h3 className={classes.headerTitle}> <i class="fa fa-shopping-cart" aria-hidden="true"></i> </h3>
      </Navigationitem>

      <Navigationitem link="/about">
        <h3 className={classes.headerTitle}> Hello, Chris <i class="fa fa-user-circle" aria-hidden="true"></i> </h3>
      </Navigationitem>
      <Navigationitem link="/shop" >
        <h3 className={classes.headerTitle}> Menu </h3>
      </Navigationitem>
    </ul>
  );
};

export default navigationItems;
