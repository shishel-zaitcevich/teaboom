import { createElement } from '../../utils/createElement.js';
import './AddToCartButton.scss';

/**
 * @param {(event: MouseEvent) => void} [onClick]
 * @returns {HTMLElement}
 */
export function AddToCartButton(onClick) {
  const element = createElement(`
    <button type="button" class="add-to-cart-button">
      <span class="add-to-cart-button__label">В корзину</span>
    </button>
  `);

  const label = element.querySelector('.add-to-cart-button__label');
  const defaultText = label.textContent;

  element.addEventListener('click', (event) => {
    onClick?.(event);

    label.textContent = 'Добавлено ✓';
    element.classList.add('add-to-cart-button--added');

    window.setTimeout(() => {
      label.textContent = defaultText;
      element.classList.remove('add-to-cart-button--added');
    }, 1500);
  });

  return element;
}
