// ---list rendering concept
import { useState } from "react";
import DB from "../../../data/db.json";

//notes:
// list rendering, lists and keys, index as key all three concepts are workouted with in this single component.
const ListRendering = () => {
  const [list] = useState(DB);
  return (
    <>
      <h4>List Rendering concept</h4>
      <p>List:</p>
      {list.map((data, index) => {
        return (
          <div key={index}>
            <p>
              <span style={{ fontWeight: "bold" }}>Name:</span>&nbsp;
              {data.name}
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>UserName:</span>&nbsp;
              {data.username}
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Email:</span>&nbsp;
              {data.email}
            </p>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default ListRendering;
