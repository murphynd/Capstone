import React from "react";

class InstrumentPannel extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
