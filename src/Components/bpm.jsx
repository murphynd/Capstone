import React from "react";

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
        <label>BPM</label>
        <input
          type="number"
          value={this.props.value}
          onChange={this.handleBPM}
          className="bpm"
        />
        <h1> hello this is the bpm</h1>
      </>
    );
  }
}
