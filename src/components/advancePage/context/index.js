// --> context concept

import { useState } from "react";
import ComponentA from "./ComponentA";
import {
  FontProvider,
  NotificationProvider,
  Provider,
  ThemeProvider,
} from "./context";
import MultiContext from "./MultiContext";

const ContextApp = () => {
  const [notification, setNotification] = useState([]);
  const [theme, setTheme] = useState({ backgroundColor: "#CCC" });
  const [fontSize, setFontSize] = useState(14);
  return (
    <>
      <h2>Context App concept</h2>
      <Provider value="JIN KAZAMA">
        <ComponentA />
      </Provider>
      <br />
      <h2>
        <u>Multiple context provider & consumer concept</u>
      </h2>
      <NotificationProvider value={{ notification, setNotification }}>
        <ThemeProvider value={{ theme, setTheme }}>
          <FontProvider value={{ fontSize, setFontSize }}>
            <MultiContext />
          </FontProvider>
        </ThemeProvider>
      </NotificationProvider>
    </>
  );
};

export default ContextApp;
