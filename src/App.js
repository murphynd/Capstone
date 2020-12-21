import React from "react";
import Instrument from "./Components/Instrument";
import TransportControl from "./Components/TransportControl";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <React.Fragment>
      <TransportControl />
      <Instrument />
    </React.Fragment>
  );
}

export default App;
