// --> without Jsx
import React from "react";

const WithoutJsx = () => {
  return React.createElement(
    "div",
    { className: "flower" },
    "This is a text written in without jsx"
  );
};

export default WithoutJsx;
