import React from "react";
import { Step } from "./step";
import "./step.css";

export class Steps extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{ flex: 1, flexDirection: "row" }}>
        {this.props.steps.map((step, idx) => {
          return (
            <Step
              on={step}
              onClick={this.props.handleStepChange}
              key={idx}
              id={idx}
            />
          );
        })}
      </div>
    );
  }
}
