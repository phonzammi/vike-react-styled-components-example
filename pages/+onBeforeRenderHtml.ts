import { ServerStyleSheet } from "styled-components";
import type { PageContext } from "vike/types";

export default (pageContext: PageContext) => {
  pageContext.config.styleSheet = new ServerStyleSheet();
};