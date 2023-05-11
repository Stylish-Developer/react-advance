// --> advance concepts page

import FrwardRef from "./forwardref";
import ParentComponent from "./purecomponent";
import Refs from "./ref";

const AdvancePage = () => {
  return (
    <>
      <div style={{ padding: "5px" }}>
        <h1>This is advance concepts page</h1>
        <hr />
        <ParentComponent />
        <br />
        <Refs />
        <br />
        <FrwardRef />
        <br />
      </div>
    </>
  );
};

export default AdvancePage;
