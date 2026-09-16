import { createElement } from '../../utils/createElement.js';
import './Gallery.scss';

/**
 * Галерея изображений товара.
 * Сейчас показывает одно изображение, но разметка и структура данных
 * (product.images — массив) уже готовы для добавления миниатюр/слайдера.
 *
 * @param {import('../../data/products.js').Product} product
 * @returns {HTMLElement}
 */
export function Gallery(product) {
  const [mainImage] = product.images;

  const element = createElement(`
    <div class="gallery">
      <div class="gallery__main">
        <img
          class="gallery__image"
          src="${mainImage.src}"
          alt="${mainImage.alt}"
          width="600"
          height="600"
          loading="eager"
        />
      </div>
    </div>
  `);

  return element;
}
