import { demoBlockPlugin } from "vitepress-theme-demoblock";

const sidebar = [
  {
    text: "Guide",
    items: [
      { text: "Introduction", link: "/components/index" },
      { text: "Button", link: "/components/button" },
    ],
  },
];

const config = {
  markdown: {
    config: (md) => {
      md.use(demoBlockPlugin);
    },
  },
  themeConfig: {
    sidebar,
  },
};
export default config;
