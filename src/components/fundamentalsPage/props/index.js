// -- props concept component

import X from "./ComponentX";

const Props = () => {
  return (
    <>
      <div
        style={{
          border: "1px solid black",
          backgroundColor: "lightblue",
          padding: 5,
        }}
      >
        <h4>Props concept</h4>
        <p>This is a parent component</p>
        <X firstName="Gowtham" />
      </div>
    </>
  );
};

export default Props;
