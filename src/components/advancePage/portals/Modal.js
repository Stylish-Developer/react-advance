// -- modal popup component

import { createPortal } from "react-dom";

const Modal = ({ onClose }) => {
  return createPortal(
    <>
      <div
        style={{
          position: "absolute",
          top: 400,
          bottom: 0,
          left: 0,
          right: 0,
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.3)",
          height: "100%",
        }}
      >
        <div
          style={{
            padding: 20,
            background: "#fff",
            borderRadius: "2px",
            display: "inline-block",
            minHeight: "300px",
            margin: "1rem",
            position: "relative",
            minWidth: "300px",
            boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
            justifySelf: "center",
          }}
        >
          <h1>Hai! I'm Modal popup component</h1>
          <button onClick={onClose}>close moal</button>
        </div>
      </div>
    </>,
    document.getElementById("portal-root")
  );
};

export default Modal;
