import React from "react";
import { FontConsumer, NotificationConsumer, ThemeConsumer } from "./context";
import EndComponent from "./EndComponent";

const MultiContext = () => {
  // we can also achieve the same results with useContext hook to easily achieve this. but topic based i explained standard way
  return (
    <NotificationConsumer>
      {({ notification, setNotification }) => {
        return (
          <ThemeConsumer>
            {({ theme, setTheme }) => {
              return (
                <FontConsumer>
                  {({ fontSize, setFontSize }) => {
                    return (
                      <>
                        <EndComponent
                          notification={notification}
                          setNotification={setNotification}
                          theme={theme}
                          setTheme={setTheme}
                          fontSize={fontSize}
                          setFontSize={setFontSize}
                        />
                      </>
                    );
                  }}
                </FontConsumer>
              );
            }}
          </ThemeConsumer>
        );
      }}
    </NotificationConsumer>
  );
};

export default MultiContext;
