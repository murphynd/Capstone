import React from "react";

export class Step extends React.Component {
  render() {
    const style = {
      width: "3em",
      height: "5em",
      backgroundColor: this.props.on ? "#2AC7DC" : "#CBCBCB",
      borderRadius: "10px",
      margin: 5,
      display: "inline-block",
    };
    return <div style={style} onClick={this.handleClick}></div>;
  }
  handleClick = () => {
    this.props.onClick(this.props.id);
    console.log("from steps:", this.props, this.props.id);
  };
}
