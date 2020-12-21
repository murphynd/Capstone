import React from "react";
import { Kick } from "../Engines/Kick";
import { Transport, Time } from "tone";
import { Snare } from "../Engines/Snare";

export class Instrument extends React.Component {
  constructor(props) {
    super(props);
    this.ctx = new AudioContext();
    this.sound = new Kick(this.ctx);
    this.state = {
      steps: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
    };
    switch (props.engine) {
      case "Kick":
        this.sound = new Kick(this.ctx);
        break;
      case "Snare":
        this.sound = new Snare(this.ctx);
        break;
    }
    Transport.loop = true;
    Transport.loopEnd = "1m";
  }
  componentDidUpdate() {
    if (this.props.steps && !areEqual(this.props.steps, this.state.steps)) {
      this.setState({
        steps: this.props.steps.slice(0),
      });
      this.createLoop();
    }
  }
  createLoop = () => {
    if (!this.props.steps) {
      return;
    }
    Transport.clear(this.loopId);
    const loop = (time) => {
      this.state.steps.forEach((s, i) => {
        if (s) {
          this.sound.trigger(time + i * Time("16n").toSeconds());
        }
      });
    };
    this.loopId = Transport.schedule(loop, "0");
  };

  handleClick = () => {
    if (this.props.handleClick)
      this.props.handleClick(this.props.engine, this.state.steps.slice(0));
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Instrument</button>
      </div>
    );
  }
}

export const areEqual = (ar1, ar2) => {
  if (ar1.length !== ar2.length) return false;
  let equal = true;
  ar1.forEach((el, idx) => {
    if (el !== ar2[idx]) equal = false;
  });
  return equal;
};
