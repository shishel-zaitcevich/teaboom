import { createElement } from '../../utils/createElement.js';
import './Description.scss';

/**
 * @param {string} text
 * @returns {HTMLElement}
 */
export function Description(text) {
  return createElement(`
    <section class="description" aria-label="Описание товара">
      <h2 class="description__title">Описание</h2>
      <p class="description__text">${text}</p>
    </section>
  `);
}
