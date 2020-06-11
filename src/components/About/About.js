import React, { Component } from 'react'
import classes from "./About.css";
import Title from "../Title/Title";
export default class About extends Component {
  render() {
    return (
      <div className={classes.Container}>
        <Title name="404 Error. This page is actually not found yet."/>
        <Title name="But you can follow me on Github or LinkedIn ;)"/>
        <a href="https://github.com/chrislevn"><h1>Github</h1></a>
        <a href="https://www.linkedin.com/in/chrislevn/"><h1>LinkedIn</h1></a>
        <h2>Created by Christopher Le</h2>
      </div>
    )
  }
}
