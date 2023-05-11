import React from "react";
import { Consumer } from "./context";

const ComponentC = () => {
  return (
    <Consumer>
      {(value) => {
        return (
          <>
            <div>ComponentC</div>
            <h1>Say my name {value}</h1>
          </>
        );
      }}
    </Consumer>
  );
};

export default ComponentC;
