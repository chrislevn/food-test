import React, { Component } from "react";
import Title from "./../Title/Title";
import EmptyCart from "./EmptyCart/EmptyCart";
import CartList from "./CartList/CartList";
import CartTotals from "./CartTotals/CartTotals"
import classes from "./Cart.css";
import { ProductConsumer } from "./../../context";
export default class Cart extends Component {
  render() {
    return (
      <div className={classes.BottomContainer}>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <div className={classes.Container}>
                  <div className={classes.DirectoryTextBox}> 
                    Main Page > <b>Menu</b>
                  </div>
                  <div className={classes.Container}> 
                      <div className={classes.LeftContainer}>
                        <div className={classes.Delivery}>
                            <div className={classes.DeliveryText}> <h3> Delivery Location </h3> </div>
                            <div className={classes.NextDeliveryText}> <h3> Block A Floor 11 Room 19 </h3> </div>
                        </div>
                        <CartList value={value} />
                      </div>
                      <div className={classes.RightContainer}>
                        <CartTotals value={value} history={this.props.history}/>
                      </div>
                  </div>
                  
                 
                </div>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </div>
    );
  }
}
