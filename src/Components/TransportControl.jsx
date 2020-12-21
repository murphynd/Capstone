import React from "react";
import { Instrument } from "./Instrument";
import { Steps } from "./steps";
import { Transport } from "tone";
import * as Tone from "tone";
import { PausePlay } from "./pausePlay";
import { InstrumentPannel } from "./InstrumentPannel";

class TransportControl extends React.Component {
  constructor(props) {
    super(props);
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
  }
  pause = () => {
    Transport.stop();
  };
  play = () => {
    Tone.start();
    Transport.start();
  };

  handleStepChange = (id) => {
    const s = this.state.steps;
    s[id] = !s[id];
    this.setState({
      steps: s,
    });
  };
  render() {
    return (
      <div>
        <h1 style={{ color: "black" }}>ThumP</h1>
        <PausePlay play={this.play} pause={this.pause} />
        <InstrumentPannel steps={this.state.steps}>
          <Instrument />
        </InstrumentPannel>
        <Steps
          handleStepChange={this.handleStepChange}
          steps={this.state.steps}
        />
      </div>
    );
  }
}
export default TransportControl;
