import { createElement } from '../../utils/createElement.js';
import './PackagingSelector.scss';

/**
 * Селектор фасовки товара (100 г / 500 г / 1000 г / 5000 г и т.д.).
 * Компонент "тупой": не хранит состояние сам, а сообщает о выборе через onSelect.
 * Какая фасовка активна — решает родитель через setActive().
 *
 * @param {import('../../data/products.js').Variant[]} variants
 * @param {(variant: import('../../data/products.js').Variant) => void} onSelect
 * @returns {{ element: HTMLElement, setActive: (variantId: string) => void }}
 */
export function PackagingSelector(variants, onSelect) {
  const element = createElement(`
    <fieldset class="packaging-selector">
      <legend class="packaging-selector__title">Фасовка</legend>
      <div class="packaging-selector__options" role="radiogroup" aria-label="Выбор фасовки"></div>
    </fieldset>
  `);

  const optionsContainer = element.querySelector('.packaging-selector__options');

  variants.forEach((variant) => {
    const option = createElement(`
      <button
        type="button"
        class="packaging-selector__option"
        data-variant-id="${variant.id}"
        role="radio"
        aria-checked="false"
      >
        ${variant.label}
      </button>
    `);

    option.addEventListener('click', () => onSelect(variant));
    optionsContainer.appendChild(option);
  });

  /**
   * Визуально помечает активную фасовку.
   * @param {string} variantId
   */
  function setActive(variantId) {
    optionsContainer.querySelectorAll('.packaging-selector__option').forEach((option) => {
      const isActive = option.dataset.variantId === variantId;
      option.classList.toggle('packaging-selector__option--active', isActive);
      option.setAttribute('aria-checked', String(isActive));
    });
  }

  return { element, setActive };
}
