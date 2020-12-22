import React from "react";

export class InstrumentPannel extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("the selected is ", this.props.selectedInstrument);
    const childrenWithProps = React.Children.map(
      this.props.children,
      (child) => {
        if (child) {
          if (child.key === this.props.selectedInstruemnt) {
            return React.cloneElement(child, {
              steps: this.props.steps,
              selected: true,
            });
          } else {
            return React.cloneElement(child, {
              steps: null,
              selected: false,
            });
          }
        }
        return child;
      }
    );

    return (
      <div
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {childrenWithProps}
      </div>
    );
  }
}
