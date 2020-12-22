import React from "react";
import { Instrument } from "./Instrument";
import { Steps } from "./steps";
import { Transport } from "tone";
import * as Tone from "tone";
import { PausePlay } from "./pausePlay";
import { InstrumentPannel } from "./InstrumentPannel";
import { BPM } from "./bpm";

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
      bpm: 80,
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
  handlebpmChange = (bpm) => {
    Transport.bpm.value = bpm;
    this.setState({ bpm });
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
    console.log("the state:", this.state);

    return (
      <div>
        <h1 style={{ color: "black" }}>ThumP</h1>
        <PausePlay play={this.play} pause={this.pause} />
        <BPM handleChange={this.handlebpmChange} value={this.state.bpm} />
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
          <Instrument
            key="HiHat"
            engine="HiHat"
            handleClick={this.selectInstrument}
          />
          <Instrument
            key="Clap"
            engine="Clap"
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
