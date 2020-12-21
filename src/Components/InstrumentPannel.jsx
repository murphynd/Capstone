import React, { Children } from "react";

export class InstrumentPannel extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const childrenWithProps = React.Children.map(
      this.props.children,
      (child) => {
        if (child) {
          return React.cloneElement(child, {
            steps: this.props.steps,
            slected: true,
          });
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
        {/* {this.props.children} */}
      </div>
    );
  }
}
