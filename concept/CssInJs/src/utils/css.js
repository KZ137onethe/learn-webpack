export function applyStyles(dom, style) {
  for (const key in style) {
    const val = style[key];
    dom.style[key] = val;
  }
}

export function mergeStyles(dom, ...styles) {
  const allStyles = Object.assign({}, ...styles);
  Object.assign(dom.style, allStyles);
}
