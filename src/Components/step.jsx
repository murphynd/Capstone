import React from "react";
import "./step.css";

export class Step extends React.Component {
  render() {
    const style = {
      width: "3em",
      height: "5em",
      backgroundColor: this.props.on ? "#fef1ac" : "#febf01",
      boxShadow: "2px 2px 5px #222",
      borderRadius: "10px",
      margin: 5,
      display: "inline-block",
      position: "relative",
      left: "90px",
    };
    return <div style={style} onClick={this.handleClick}></div>;
  }
  handleClick = () => {
    this.props.onClick(this.props.id);
    console.log("from steps:", this.props, this.props.id);
  };
}
