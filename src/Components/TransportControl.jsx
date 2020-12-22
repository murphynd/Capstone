import React from "react";
import { Instrument } from "./Instrument";
import { Steps } from "./steps";
import { Transport } from "tone";
import * as Tone from "tone";
import { PausePlay } from "./pausePlay";
import { InstrumentPannel } from "./InstrumentPannel";
import { Kick } from "../Engines/Kick";
import { Snare } from "../Engines/Snare";

export class TransportControl extends React.Component {
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
      selected: null,
    };
    Transport.loop = true;
    Transport.loopEnd = "1m";
    console.log(this.state);
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
  selectInstrument = (selected, steps) => {
    if (this.state.selected === selected) {
      this.setState({
        selected: null,
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
      });
    } else {
      this.setState({ selected, steps });
    }
  };

  render() {
    console.log("engine ", this.state.engine);
    console.log("setps", this.state.steps);
    console.log("KickSteps", this.state.selectedInstrument);

    return (
      <div>
        <h1 style={{ color: "black" }}>ThumP</h1>
        <PausePlay play={this.play} pause={this.pause} />
        <InstrumentPannel
          steps={this.state.steps}
          selectedInstrument={this.state.selected}
        >
          <Instrument
            key="Kick"
            engine="Kick"
            handleClick={this.selectInstrument}
          />
          <Instrument
            key="Snare"
            engine="Snare"
            handleClick={this.selectInstrument}
          />
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
