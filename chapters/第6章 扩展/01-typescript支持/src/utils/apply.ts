
export function applyCss(domEl: HTMLElement, styles: Record<string, string | number>) {
  for (const key of Object.keys(styles)) {
    domEl.style[key] = styles[key];
  }
}