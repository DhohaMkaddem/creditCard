import React, { Component } from "react";
import "./Form.css";

export default class Form extends Component {
  render() {
    return (
      <div>
        <form className="form">
          <span>tape your name</span>
          <input type="text" onChange={this.props.onChangeHandlerName} />
          <span>tape your number</span>
          <input type="text" onChange={this.props.onChangeHandlerNumber} />
          <span>tape your exp</span>
          <input type="text" onChange={this.props.onChangeHandlerDate} />
        </form>
      </div>
    );
  }
}
