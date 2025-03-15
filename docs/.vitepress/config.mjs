import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 站点的标题。
  title: "学习webpack",
  // 站点的描述。这将呈现为页面 HTML 中的 <meta> 标签。
  description: "一个学习webpack的文档站点",
  // 主题配置，用于自定义主题， https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    // 导航菜单配置，参考：https://vitepress.dev/zh/reference/default-theme-nav
    nav: [
      { text: "Home", link: "/" },
      { text: "Demo", link: "/Demo" },
    ],
    // 大纲容器, 参考：https://vitepress.dev/zh/reference/default-theme-config#outline
    outline: {
      level: [2, 3],
      label: "页面导航",
    },
    // 侧边栏菜单项的配置，参考：https://vitepress.dev/zh/reference/default-theme-sidebar
    sidebar: [
      {
        text: "前言",
        link: "/前言",
      },
      {
        text: "第一章 核心功能",
        link: "/第一章文档",
      },
      {
        text: "第二章 常用扩展",
        link: "/第二章文档",
      },
    ],
    // 可以定义此选项以在导航栏中展示带有图标的社交帐户链接，参考：https://vitepress.dev/zh/reference/default-theme-config#sociallinks
    socialLinks: [
      {
        icon: "gitlab",
        link: "http://code.thylovezq.site:30086/YangHai/learn-webpack",
      },
    ],
    // 允许自定义上次更新的文本和日期格式，参考：https://vitepress.dev/zh/reference/default-theme-config#lastupdated
    lastUpdated: {
      text: "上次更新在",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "short",
      },
    },
    // 支持搜索站点文档，参考：https://vitepress.dev/zh/reference/default-theme-search
    search: {
      provider: "local",
    },
  },
  markdown: {
    image: {
      lazyLoading: true,
    },
  },
  outDir: "../public",
  base: "/learn-webpack/",
});
