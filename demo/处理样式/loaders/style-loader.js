module.exports = function (sourceCode) {
  const code = `
    const style = document.createElement("style");
    style.innerHTML = \`${sourceCode}\`;
    document.head.appendChild(style);
    module.exports = \`${sourceCode}\`
  `;
  return code;
};
