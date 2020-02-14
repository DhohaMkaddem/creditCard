import React, { Component } from "react";
import "./Card.css";

export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <span className="name">{this.props.sharedName}</span>
        <br />
        <span className="card-number">{this.props.sharedCardNumber}</span>
        <br />
        <span className="exp">exp</span>
        <span className="exp-val">{this.props.sharedValidDate}</span>
      </div>
    );
  }
}
