// -- very important and interesting concept in react. => H O C - higher order component

import ClickCount from "./ClickCount";
import HoverCount from "./HoverCount";

// which is nothing but it's a function which takes a component as an arguments and returns a new component
// when we need this? and why we need this? - to share the common functionality between components this will help to you

const HigherOrderComponent = () => {
  return (
    <>
      <div
        style={{
          height: "500px",
          width: "100%",
          backgroundColor: "lightblue",
          padding: "5px",
        }}
      >
        <h2>Higher order component</h2>
        <ClickCount name="gowtham sampathkumar" />
        <br />
        <HoverCount name="gowtham sampathkumar" />
      </div>
    </>
  );
};

export default HigherOrderComponent;
