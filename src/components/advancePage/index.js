// --> advance concepts page

import ContextApp from "./context";
import ErrorBoundary from "./errorboundary";
import FrwardRef from "./forwardref";
import HigherOrderComponent from "./hoc";
import PortalsApp from "./portals";
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
        <PortalsApp />
        <br />
        <ErrorBoundary />
        <br />
        <HigherOrderComponent />
        <br />
        <ContextApp />
      </div>
    </>
  );
};

export default AdvancePage;
