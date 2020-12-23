import React from "react";
import "./bpm.css";

export class BPM extends React.Component {
  handleBPM = (e) => {
    const val = e.target.value;
    this.props.handleChange(val);
    if (val > 30 && val < 300) {
    }
  };
  render() {
    return (
      <>
        <input
          type="number"
          value={this.props.value}
          onChange={this.handleBPM}
          className="bpm"
        />
        <h1>Tempo</h1>
      </>
    );
  }
}
