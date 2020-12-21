import React from "react";
import { Kick } from "../Engines/Kick";
import { Transport } from "tone";

export class Instrument extends React.Component {
  constructor(props) {
    super(props);
    this.ctx = new AudioContext();
    this.sound = new Kick(this.ctx);
    Transport.loop = true;
    Transport.loopEnd = "1m";
    //this.tp = new Transport();
    // console.log(Transport);

    // Transport.bpm.value = 120;
    // Transport.schedule(this.startLoop, "0");
  }
  createLoop = () => {
    Transport.clear(this.loopId);
    const loop = (time) => {
      console.log("startloop", time);
      this.sound.trigger(time);
      this.sound.trigger(time + 0.5);
      this.sound.trigger(time + 1);
      this.sound.trigger(time + 1.5);
    };
    this.loopId = Transport.schedule(loop, "0");
  };
  handleClick = () => {
    //this.kick.trigger(this.ctx.currentTime);

    this.createLoop();
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
