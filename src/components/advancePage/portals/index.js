// --> portals concept example

import { useState } from "react";
import Modal from "./Modal";

const PortalsApp = () => {
  const [popup, setPopup] = useState(false);

  const handleOpenPopup = () => {
    setPopup(true);
  };

  const handleClosePopUp = () => {
    setPopup(false);
  };
  return (
    <>
      <h2>This is a new portal component</h2>
      <button type="button" onClick={handleOpenPopup}>
        click to open mystery
      </button>
      {popup && <Modal onClose={handleClosePopUp} />}
    </>
  );
};

export default PortalsApp;
