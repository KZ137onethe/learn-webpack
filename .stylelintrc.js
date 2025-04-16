module.exports = {
  extends: ["stylelint-config-standard-scss"],
  ignoreFiles: ["node_modules", "**/node_modules/**", "dist", "**/dist/**"],
  // 规则参考：https://stylelint.nodejs.cn/user-guide/rules
  rules: {
    "selector-class-pattern": [
      "^[a-z0-9]+(?:-[a-z0-9]+)*(?:__[a-z0-9]+(?:-[a-z0-9]+)*)?(?:--[a-z0-9]+(?:-[a-z0-9]+)*)?$",
      {
        message: "类名需符合BEM规范（如：block__element--modifier）",
      },
    ],
  },
};
