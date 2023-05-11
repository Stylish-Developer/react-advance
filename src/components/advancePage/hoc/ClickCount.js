// --> click counter component

import HOC from "./Hoc";

const ClickCount = (props) => {
  const { count, handleIncrement } = props;

  console.log(props.name, "from click counter");

  return (
    <>
      <div
        style={{
          height: "200px",
          width: "90%",
          backgroundColor: "lightcyan",
          border: "1px solid skyblue",
          padding: "10px",
          margin: "auto",
        }}
      >
        <h4> ClickCounter </h4>
        <p>
          click count -{" "}
          <span style={{ fontSize: "30px", fontWeight: "bold", color: "red" }}>
            {count}
          </span>{" "}
        </p>
        <button onClick={handleIncrement}>click to increment</button>
        <h1>props value is - {props.name}</h1>
        {/* console op is undefined 'from click counter', because when we specify the props this click counter. the props sent down to HOC component not to this component . until i use { ...props } in HOC component   */}
      </div>
    </>
  );
};

export default HOC(ClickCount);
