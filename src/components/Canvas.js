import * as React from "react";

const Canvas = (props) => (
  <canvas id="game" width="480" height="320">
    {props.children}
  </canvas>
);

export default Canvas;
