import React from "react";
import ComponentC from "./ComponentC";
import { Context } from "./context";

const ComponentB = () => {
  const myData = React.useContext(Context); // with the help of this hook only we can achieve in functional component
  return (
    <>
      <div>ComponentB</div>
      <ComponentC />
      <p>{myData}</p>
    </>
  );
};

ComponentB.contextType = Context;
export default ComponentB;
