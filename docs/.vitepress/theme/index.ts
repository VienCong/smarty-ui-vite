import DefaultTheme from "vitepress/theme";
import "vitepress-theme-demoblock/dist/theme/styles/index.css";
import SmartyUI from "../../../src/entry";

// 插件的组件，主要是demo组件
import Demo from "vitepress-theme-demoblock/dist/client/components/Demo.vue";
import DemoBlock from "vitepress-theme-demoblock/dist/client/components/DemoBlock.vue";

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.use(SmartyUI);
    ctx.app.component("Demo", Demo);
    ctx.app.component("DemoBlock", DemoBlock);
  },
};
