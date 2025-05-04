export function applyStyles(dom, styles) {
  const domStyles = dom.style;
  Object.assign(domStyles, styles);
}
