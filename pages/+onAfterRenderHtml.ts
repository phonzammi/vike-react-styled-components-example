import { useConfig } from "vike-react/useConfig";
import type { PageContext } from "vike/types";

export default (pageContext: PageContext) => {
  const config = useConfig();
  if (pageContext.config.styleSheet) {
    const { styleSheet } = pageContext.config;
    try {
      const styles = styleSheet.getStyleElement();
      config({
        Head: styles,
      });
    } catch (error) {
      console.log("error :", error);
    } finally {
      styleSheet.seal();
    }
  }
};
