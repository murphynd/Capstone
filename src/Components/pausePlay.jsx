import React from "react";
export class PausePlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playing: false };
  }
  handleClick = () => {
    if (this.state.playing) {
      thisprops.pause();
    } else {
      this.props.play();
    }
    this.setState({ playing: !this.state.playing });
  };
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.playing ? "pause" : "play"}
      </button>
    );
  }
}
