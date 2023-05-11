// --> advance concepts page

import ErrorBoundary from "./errorboundary";
import FrwardRef from "./forwardref";
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
      </div>
    </>
  );
};

export default AdvancePage;
