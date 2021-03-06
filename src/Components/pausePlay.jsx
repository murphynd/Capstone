import React from "react";
import "./pausePlay.css";

export class PausePlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playing: false };
  }
  handleClick = () => {
    if (this.state.playing) {
      this.props.pause();
    } else {
      this.props.play();
    }
    this.setState({ playing: !this.state.playing });
  };
  render() {
    return (
      <button className="play" onClick={this.handleClick}>
        {this.state.playing ? "Stop" : "START"}
      </button>
    );
  }
}
