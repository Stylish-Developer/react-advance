// --> create context here

import { createContext } from "react";

const Context = createContext();

const Provider = Context.Provider;
const Consumer = Context.Consumer;

export { Context, Provider, Consumer };

//-------------------------------------------------
// -- this  is for providing multiple context

const NotificationContext = createContext();
const ThemeContext = createContext();
const FontsizeContext = createContext();

const NotificationProvider = NotificationContext.Provider;
const NotificationConsumer = NotificationContext.Consumer;

const ThemeProvider = ThemeContext.Provider;
const ThemeConsumer = ThemeContext.Consumer;

const FontProvider = FontsizeContext.Provider;
const FontConsumer = FontsizeContext.Consumer;

export {
  NotificationContext,
  ThemeContext,
  FontsizeContext,
  NotificationProvider,
  NotificationConsumer,
  ThemeProvider,
  ThemeConsumer,
  FontProvider,
  FontConsumer,
};
//----------------------------------------------
