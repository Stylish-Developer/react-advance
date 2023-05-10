// -- props child component - y

const Y = ({ lastName }) => {
  return (
    <>
      <div
        style={{
          border: "1px solid black",
          backgroundColor: "lightsalmon",
          padding: 5,
        }}
      >
        <h4>Component Y</h4>
        <p>
          LastName comes from x component - LASTNAME:{" "}
          <span style={{ color: "navy" }}>{lastName}</span>
        </p>
      </div>
    </>
  );
};

export default Y;
