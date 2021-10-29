import React from "react";
import { Instrument } from "./Instrument";
import { Steps } from "./steps";
import { Transport } from "tone";
import * as Tone from "tone";
import { PausePlay } from "./pausePlay";
import { InstrumentPannel } from "./InstrumentPannel";
import { BPM } from "./bpm";
import "./TransportControl.css";

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
  }
  pause = () => {
    Tone.Transport.stop();
  };
  play = () => {
    Tone.start();
    Tone.Transport.start(0);
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
      <>
        <div className="machine">
          <div className="machineIcon">
            <div className="icon">T</div>
            <div className="title">ThumP</div>
          </div>
          <div className="settings">
            <BPM handleChange={this.handlebpmChange} value={this.state.bpm} />
            <div className="inst">
              <InstrumentPannel
                steps={this.state.steps}
                selectedInstrument={this.state.selected}
              >
                <Instrument
                  key="Bass"
                  engine="Bass"
                  handleClick={this.selectInstrument}
                />
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
                <h1> Instrument</h1>
              </InstrumentPannel>
            </div>
          </div>
          <div className="composerTitle">
            <h1> Rhythm Composer TH-704</h1>
          </div>
          <div className="cc">Computer Controlled</div>
          <div className="rhythem">
            <PausePlay play={this.play} pause={this.pause} />
            <Steps
              handleStepChange={this.handleStepChange}
              steps={this.state.steps}
            />
          </div>
        </div>
      </>
    );
  }
}
export default TransportControl;
