// -- memo concept to achieve the same avoiding unnecessary rendering feature as like class based pure component

import { memo } from "react";

const Memo = ({ name }) => {
  console.log(">>>>>> functional memo component <<<<<<<");
  return (
    <>
      <h4>Memo concept</h4>
      <p>
        React.memo was introduced in react version 16. by using this we can
        achieve pure component feature in functional component
      </p>
      <p>
        name comes from parent component and the name is&nbsp;
        <span style={{ color: "green", fontSize: "20px", fontWeight: "bold" }}>
          {name}
        </span>
      </p>
    </>
  );
};

export default memo(Memo);
