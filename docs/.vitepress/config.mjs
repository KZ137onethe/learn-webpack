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
      { text: "知识点", link: "/knowledge/前言" },
      { text: "演示", link: "/demo" },
      { text: "工程化工具", link: "/concept" },
    ],
    // 大纲容器, 参考：https://vitepress.dev/zh/reference/default-theme-config#outline
    outline: {
      level: [2, 3],
      label: "页面导航",
    },
    // 侧边栏菜单项的配置，参考：https://vitepress.dev/zh/reference/default-theme-sidebar
    sidebar: {
      "/knowledge/": [
        {
          text: "前言",
          link: "/knowledge/前言",
        },
        {
          text: "第一章 核心功能",
          link: "/knowledge/第一章文档",
        },
        {
          text: "第二章 常用扩展",
          link: "/knowledge/第二章文档",
        },
      ],
      "/demo/": [
        {
          text: "处理图片",
          link: "/demo/处理图片"
        },
        {
          text: "处理样式",
          link: "/demo/处理样式"
        },
        {
          text: "区域查询",
          link: "/demo/区域查询"
        },
        {
          text: "数字查找特效",
          link: "/demo/数字查找特效"
        },
        {
          text: "添加文件列表",
          link: "/demo/添加文件列表"
        }
      ],
      "/concept/": [
        {
          text: "Css 命名规范：BEM",
          link: "/concept/BEM",
        },
        {
          text: "CssInJs",
          link: "/concept/CssInJs",
        },
        {
          text: "预处理器：Sass",
          link: "/concept/Sass",
        },
        {
          text: "Css终极解决方案：PostCss",
          link: "/concept/PostCss",
        },
        {
          text: "JavaScript兼容性解决方案：Babel",
          link: "/concept/Babel",
        },
      ],
    },
    // 可以定义此选项以在导航栏中展示带有图标的社交帐户链接，参考：https://vitepress.dev/zh/reference/default-theme-config#sociallinks
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/KZ137onethe/learn-webpack",
      },
      {
        icon: "gitlab",
        link: "http://43.136.232.43:30086/YangHai/learn-webpack",
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
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
    // 底部配置
    footer: {
      copyright: "CopyRight@ 2025 KZ137onethe",
    },
  },
  markdown: {
    image: {
      lazyLoading: true,
    },
  },
  outDir: "./dist",
  base: "/learn-webpack/",
});
