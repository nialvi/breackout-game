import * as React from "react";
import Canvas from "./components/Canvas";
import Ball from "./components/Canvas";

class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <Canvas>
        <Ball />
      </Canvas>
    );
  }
}

export default App;
