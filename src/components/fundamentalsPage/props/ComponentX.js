// -- props child component - x

import Y from "./ComponentY";

const X = ({ firstName }) => {
  return (
    <>
      <div
        style={{
          border: "1px solid black",
          backgroundColor: "lightgreen",
          padding: 5,
        }}
      >
        <h4>Component X</h4>
        <p>
          FirstName comes from parent component - FIRSTNAME:{" "}
          <span style={{ color: "red" }}>{firstName}</span>
        </p>
        <Y lastName="Sampathkumar" />
      </div>
    </>
  );
};

export default X;
