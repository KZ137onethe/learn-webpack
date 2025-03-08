import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "学习webpack",
  description: "一个学习webpack的文档站点",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Demo", link: "/Demo" }
    ],
    outline: {
      level: [2, 6],
      label: '页面导航'
    },
    sidebar: [
      {
        text: "前言",
        link: "/前言"
      },
      {
        text: "第一章 核心功能",
        link: "/第一章文档"
      },
      {
        text: "第二章 常用扩展",
        link: "/第二章文档",
      }
    ],
    socialLinks: [
      {
        icon: "gitlab",
        link: "http://code.thylovezq.site:30086/YangHai/learn-webpack",
      },
    ],
  },
  lastUpdated: true,
  markdown: {
    image: {
      lazyLoading: true
    }
  }
});
