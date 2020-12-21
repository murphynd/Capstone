import React from "react";
import { Kick } from "../Engines/Kick";
import { Transport, Time } from "tone";

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
    Transport.loop = true;
    Transport.loopEnd = "1m";
    //this.tp = new Transport();
    // console.log(Transport);

    // Transport.bpm.value = 120;
    // Transport.schedule(this.startLoop, "0");
  }
  componentDidUpdate() {
    if (this.props.steps && this.props.steps === this.state.steps) {
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
      // console.log("startloop", time);
      // this.sound.trigger(time);
      // this.sound.trigger(time + 0.5);
      // this.sound.trigger(time + 1);
      // this.sound.trigger(time + 1.5);
    };
    this.loopId = Transport.schedule(loop, "0");
  };

  handleClick = () => {
    //this.kick.trigger(this.ctx.currentTime);
    Transport.start();
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Instrument</button>
      </div>
    );
  }
}
