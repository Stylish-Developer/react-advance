// -->  ref with class component example root component
import ParentCls from "./ParentCls";
// Refs with class component
// with this example we can access the child component dom element from the parent component

const RefsWithClassRoot = () => {
  return (
    <>
      <div
        style={{
          height: "200px",
          width: "100%",
          padding: "10px",
          marginTop: "5px",
          backgroundColor: "lightcyan",
          border: "1px solid cyan",
        }}
      >
        <h2>Refs with class component example</h2>
        <ParentCls />
      </div>
    </>
  );
};

export default RefsWithClassRoot;
