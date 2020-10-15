import React, { Component } from "react";
import './ResultItem.css';

export default class ResultItem extends Component {
  render() {
    return (
      <li className="characterItem">
        <h3>NAME:{this.props.name}</h3>
        <p>BIRTH YEAR: {this.props.birth_year}</p>
        <p>HEIGHT:{this.props.height}</p>
        <p>MASS: {this.props.mass}</p>
        <p>EYE COLOR: {this.props.eye_color}</p>
        <p>HAIR COLOR: {this.props.hair_color}</p>
        <p>SKIN COLOR: {this.props.skin_color}</p>
      </li>
    );
  }
}
