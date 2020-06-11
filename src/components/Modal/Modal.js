import React, { Component } from "react";
import { ProductConsumer } from "./../../context";
import BackDrop from "./../Backdrop/Backdrop";
import classes from "./Modal.css";
import { NavLink } from "react-router-dom";
export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { id, img, title, info, price, tag, inCart } = value.modalProduct;
          if (!modalOpen) {
            return null;
          } else {
            return (
              <div>
                <BackDrop click={closeModal} />
                <div className={classes.Container}>
                <div className={classes.ImgContainer}>
                    <img src={img} alt={title} className={classes.Img}/>
                </div>
                <div > 
                  <div className={classes.CloseBtn}>
                    <i onClick={() => closeModal()} className= "fa fa-times fa-2x" ></i>
                  </div>
                  <div className={classes.Content}>
                    <h3 className={classes.Title}>{title}</h3>
                    <h4 className={classes.Tag}> {tag} </h4>
                    <h3 className={classes.Description}> Description: </h3>
                    <h4 className={classes.InfoContainer}> {info} </h4>

                    <h3 className={classes.PriceTag}> Price </h3>
                    <h3 className={classes.Price}>{price}.000 VND</h3>
                    <div className={classes.BtnContainer}>
                    <button
                        disabled={inCart ? true : false}
                        onClick={() => {
                          value.addToCart(id);
                        }}

                        className={inCart ? classes.CartBtnDisable : classes.CartBtn}
                      >
                        {inCart ? <span>in Cart</span> : <span>ADD To CART</span>}
                      </button>
                    </div>

                  </div>
                </div>
                </div>
              </div>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
