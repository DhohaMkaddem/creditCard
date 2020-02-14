import React from "react";
import Form from "./components/Form";
import Card from "./components/Card";
import "./App.css";

export default class App extends React.Component {
  state = {
    name: "",
    cardNumber: "****************",
    validThu: ""
  };

  onChangeHandlerName = e => {
    if (/^[a-zA-Z]{0,20}$/.test(e.target.value)) {
      this.setState({ name: e.target.value.toUpperCase() });
    } else {
      alert("this field only accept letter");
      e.target.value = e.target.value.substr(0, e.target.value.length - 1);
    }
  };

  onChangeHandlerNumber = e => {
    if (/^(\d){0,16}$/.test(e.target.value)) {
      this.setState({
        cardNumber: this.state.cardNumber.replace(
          "*",
          e.target.value.split("")[e.target.value.split("").length - 1]
        )
      });
    } else {
      e.target.value = e.target.value.substr(0, e.target.value.length - 1);
    }
  };

  onChangeHandlerDate = e => {
    if (/^01|02|03|04|05|06|07|08|09|10|11|12$/.test(e.target.value)) {
      e.target.value = e.target.value + "/";
      this.setState({ validThu: e.target.value });
      console.log("object");
    }
    console.log("(e.target.value.length", e.target.value.length);
    if (e.target.value.length >= 3) {
      let str = e.target.value.substr(3);
      console.log(str);

      if (/^(\d){0,2}$/.test(str)) {
        this.setState({ validThu: e.target.value });
      } else {
        console.log("i am in the else block");
      }
    }
  };

  render() {
    const { name, cardNumber, validThu } = this.state;
    return (
      <div className="app">
        <Card
          sharedName={name}
          sharedCardNumber={cardNumber}
          sharedValidDate={validThu}
        />
        <Form
          onChangeHandlerName={this.onChangeHandlerName}
          onChangeHandlerNumber={this.onChangeHandlerNumber}
          onChangeHandlerDate={this.onChangeHandlerDate}
        />
      </div>
    );
  }
}
