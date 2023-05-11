import React from "react";

const EndComponent = (props) => {
  const {
    notification,
    setNotification,
    theme,
    setTheme,
    fontSize,
    setFontSize,
  } = props;
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: theme.backgroundColor,
          fontSize: fontSize + "px",
          padding: 20,
          color: theme.backgroundColor === "#CCC" ? "Red" : "#FFFFFF",
        }}
      >
        <div>EndComponent</div>
        <h2>New Notification {notification.length}</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <button
            onClick={() => {
              const newNotification = [...notification];
              newNotification.push("New Notification Received");
              setNotification(newNotification);
            }}
          >
            Add Notification
          </button>
          &nbsp;
          <button
            onClick={() =>
              setTheme({
                backgroundColor:
                  theme.backgroundColor === "#CCC" ? "#000000" : "#CCC",
              })
            }
          >
            Change Theme
          </button>
          &nbsp;
          <button onClick={() => setFontSize((prevCount) => prevCount + 1)}>
            increase fontSize
          </button>
        </div>
      </div>
    </>
  );
};

export default EndComponent;
