import React, { Component } from "react";
import classes from "./Product.css";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { ProductConsumer } from "./../../context";
export default class Product extends Component {
  render() {
    const { id, tag, title, img, price, inCart } = this.props.product;
    return (
     
     
      <ProductConsumer>
        {value=>(
        
        <div className={classes.Card}
          onClick = {() =>
          value.openModal(id)}>
        
          <div
            className={classes.ImgContainer}
            onClick={() => value.handleDetail(id)}>
            <img src={img} alt={title} className={classes.Img} />
            <h4 className={classes.Title}>{title}</h4>
          <h5 className={classes.Tag}> {tag} </h5>
          <span className={classes.Price}>{price}.000 VND</span>
          </div>
      </div>
        )}
        </ProductConsumer>
       
    );
  }
}

Product.propTypes ={
  product:PropTypes.shape({
    id:PropTypes.number,
    img:PropTypes.string,
    title:PropTypes.string,
    price:PropTypes.number,
    inCart:PropTypes.bool
  }).isRequired
}