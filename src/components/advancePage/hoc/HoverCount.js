// --> click counter component

import HOC from "./Hoc";

const HoverCount = (props) => {
  const { count, handleIncrement } = props;

  console.log(props.name, "from hover counter");
  return (
    <>
      <div
        style={{
          height: "200px",
          width: "90%",
          backgroundColor: "lightgoldenrodyellow",
          border: "1px solid pink",
          padding: "10px",
          margin: "auto",
          
        }}
      >
        <h4> HoverCounter </h4>
        <p>
          hover count -{" "}
          <span style={{ fontSize: "30px", fontWeight: "bold", color: "navy" }}>
            {count}
          </span>{" "}
        </p>
        <button onMouseOver={handleIncrement} style={{ cursor: 'pointer' }}>hover me to increment</button>
        <h1>props value is - {props.name}</h1>
        {/* console op is undefined 'from hover counter', because when we specify the props this hover counter. the props sent down to HOC component not to this component. until i use { ...props } in HOC component   */}
      </div>
    </>
  );
};

export default HOC(HoverCount);
