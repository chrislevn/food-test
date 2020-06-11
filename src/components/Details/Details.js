import React, { Component } from "react";
import { ProductConsumer } from "./../../context";
import { NavLink } from "react-router-dom";
import classes from "./Details.css";
export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            title,
            tag,
            img,
            info,
            price,
            inCart
          } = value.detailProduct;
          return (
            <div className={classes.Container}>
              <div className={classes.ImgContainer}>
                <img src={img} alt={title} className={classes.Img} />
              </div>
              <div className={classes.InfoContainer}>

                  <h1 className={classes.Title}>{title}</h1> 
                  <NavLink to="/shop">
                      <i className= "fa fa-times"></i>
                  </NavLink>
                <p>
                  <strong>Description: </strong>
                  {info}
                </p>
                <h2>Price: {price}.000 VND</h2>
                <div className={classes.BtnContainer}>
                  <button
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                    className={
                      inCart ? classes.CartBtnDisable : classes.CartBtn
                    }
                  >
                    {inCart ? <span>in Cart</span> : <span>ADD To CART</span>}
                  </button>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
