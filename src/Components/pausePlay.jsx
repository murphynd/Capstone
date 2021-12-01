import React from "react";
import "./pausePlay.css";

export class PausePlay extends React.Component {

  render() {
    return (
      <button className={"play"} onClick={this.props.PausePlay}>
        {this.props.isPlaying ? "START" : "STOP" }
      </button>
    );
  }
}
