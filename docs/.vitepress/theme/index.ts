import DefaultTheme from "vitepress/theme";
import "vitepress-theme-demoblock/dist/theme/styles/index.css";

import SmartyUI from "../../../src/entry";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(SmartyUI);
    // app.component("Demo", Demo);
    // app.component("DemoBlock", DemoBlock);
  },
};
