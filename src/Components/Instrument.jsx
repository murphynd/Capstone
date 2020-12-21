import React from "react";
import { Kick } from "../Engines/Kick";

class Instrument extends React.Component {
  constructor(props) {
    super(props);
    this.ctx = new AudioContext();
    this.kick = new Kick(this.ctx);
  }
  handleClick = () => {
    this.kick.trigger(this.ctx.currentTime);
  };

  render() {
    return (
      <div className="Button">
        <button onClick={this.handleClick}>Instrument</button>
      </div>
    );
  }
}
export default Instrument;
