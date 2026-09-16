/**
 * @param {string} html
 * @returns {HTMLElement}
 */
export function createElement(html) {
  const template = document.createElement('template');
  template.innerHTML = html.trim();
  return /** @type {HTMLElement} */ (template.content.firstElementChild);
}
