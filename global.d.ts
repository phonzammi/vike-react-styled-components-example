import { ServerStyleSheet } from "styled-components";

declare global {
  namespace Vike {
    interface Config {
      styleSheet?: ServerStyleSheet;
    }
  }
}

export {};
