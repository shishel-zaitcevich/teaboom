import { createElement } from '../../utils/createElement.js';
import { formatPrice } from '../../utils/formatPrice.js';
import { Gallery } from '../Gallery/Gallery.js';
import { PackagingSelector } from '../PackagingSelector/PackagingSelector.js';
import { AddToCartButton } from '../AddToCartButton/AddToCartButton.js';
import { Description } from '../Description/Description.js';
import './ProductCard.scss';

/**
 * Карточка товара: изображение, название, категория, фасовка,
 * артикул, цена, кнопка «В корзину» и краткое описание.
 *
 * @param {import('../../data/products.js').Product} product
 * @returns {HTMLElement}
 */
export function ProductCard(product) {
  let activeVariant = product.variants[0];

  const element = createElement(`
    <article class="product-card">
      <div class="product-card__media"></div>

      <div class="product-card__content">
        <p class="product-card__category"></p>
        <h1 class="product-card__title"></h1>

        <div class="product-card__price-row">
          <span class="product-card__price"></span>
          <span class="product-card__old-price"></span>
        </div>

        <p class="product-card__meta">
          <span class="product-card__sku"></span>
          <span class="product-card__availability"></span>
        </p>

        <div class="product-card__packaging"></div>

        <div class="product-card__cart"></div>
      </div>

      <div class="product-card__description"></div>
    </article>
  `);

  // --- статичные (не зависящие от фасовки) части ---
  element.querySelector('.product-card__media').appendChild(Gallery(product));
  element.querySelector('.product-card__category').textContent = product.category;
  element.querySelector('.product-card__title').textContent = product.title;
  element.querySelector('.product-card__description').appendChild(
    Description(product.shortDescription)
  );

  // --- элементы, которые обновляются при смене фасовки ---
  const priceEl = element.querySelector('.product-card__price');
  const oldPriceEl = element.querySelector('.product-card__old-price');
  const skuEl = element.querySelector('.product-card__sku');
  const availabilityEl = element.querySelector('.product-card__availability');

  function renderVariant(variant) {
    activeVariant = variant;

    priceEl.textContent = formatPrice(variant.price);

    if (variant.oldPrice) {
      oldPriceEl.textContent = formatPrice(variant.oldPrice);
      oldPriceEl.hidden = false;
    } else {
      oldPriceEl.textContent = '';
      oldPriceEl.hidden = true;
    }

    skuEl.textContent = `Артикул: ${variant.sku}`;

    if (variant.availability) {
      availabilityEl.textContent = `В наличии: ${variant.availability}`;
      availabilityEl.hidden = false;
    } else {
      availabilityEl.textContent = '';
      availabilityEl.hidden = true;
    }

    packagingSelector.setActive(variant.id);
  }

  const packagingSelector = PackagingSelector(product.variants, renderVariant);
  element.querySelector('.product-card__packaging').appendChild(packagingSelector.element);

  const cartButton = AddToCartButton(() => {
    // Реальная корзина не подключена по условиям задания.
    // Здесь — единственная точка, куда в будущем добавится вызов API корзины,
    // и она уже получает актуальный activeVariant.
    console.info('Добавлено в корзину:', {
      product: product.title,
      variant: activeVariant.label,
      sku: activeVariant.sku,
      price: activeVariant.price,
    });
  });
  element.querySelector('.product-card__cart').appendChild(cartButton);

  renderVariant(activeVariant);

  return element;
}
