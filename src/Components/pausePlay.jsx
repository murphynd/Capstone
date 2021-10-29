import React from "react";
import "./pausePlay.css";

export class PausePlay extends React.Component {

  state = {
    playing: false,
  }

  handleClick = () => {
     // this.setState( prevState=> {
     //   this.state.playing = prevState });
    this.state.playing ? this.props.pause() : this.props.play()
  };

  render() {
    return (
      <button className={"play"} onClick={this.handleClick()}>
        {this.state.playing ? "START" : "STOP" }
      </button>
    );
  }
}
