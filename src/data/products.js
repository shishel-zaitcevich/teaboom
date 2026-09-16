/**
 * Мок-данные товара.
 *
 * @typedef {Object} Variant
 * @property {string} id          Уникальный id фасовки (используется в UI как key)
 * @property {number} weight      Вес в граммах
 * @property {string} label       Подпись для пользователя, например "100 г"
 * @property {string} sku         Артикул
 * @property {number} price       Актуальная цена, руб.
 * @property {number|null} oldPrice Цена до скидки, руб. (null — если скидки нет)
 * @property {string} availability Статус наличия
 *
 * @typedef {Object} Product
 * @property {string} id
 * @property {string} slug
 * @property {string} title
 * @property {string} category
 * @property {string[]} breadcrumbs
 * @property {{ src: string, alt: string }[]} images
 * @property {string} shortDescription
 * @property {Variant[]} variants
 */

/** @type {Product[]} */
export const products = [
  {
    id: 'ananasovij-ulun',
    slug: 'ananasovij-ulun',
    title: 'Ананасовый улун',
    category: 'Улун',
    breadcrumbs: ['Каталог', 'Улун', 'Ароматизированный улун'],
    images: [
      {
        src: '/products/image.png',
        alt: 'Ананасовый улун — рассыпной чай',
      },
    ],
    shortDescription:
      'Состав: китайский бирюзовый чай, цукаты, натуральные ароматические масла. ' +
      'Светлый фуцзяньский улун с ароматом ананаса. В сухом виде — крупный лист ' +
      'изумрудного цвета, скруткой напоминающий Те Гуань Инь. В прогретой посуде ' +
      'раскрывается аромат свежей зелени и спелого ананаса.',
    variants: [
      {
        id: 'ananasovij-ulun-100',
        weight: 100,
        label: '100 г',
        sku: '01306',
        price: 326.4,
        oldPrice: 349.2,
        availability: 'Много',
      },
      {
        id: 'ananasovij-ulun-500',
        weight: 500,
        label: '500 г',
        sku: '01307',
        price: 1432,
        oldPrice: 1646,
        availability: 'Много',
      },
      {
        id: 'ananasovij-ulun-1000',
        weight: 1000,
        label: '1000 г',
        sku: '01308',
        price: 2064,
        oldPrice: 2592,
        availability: 'Много',
      },
      {
        id: 'ananasovij-ulun-5000',
        weight: 5000,
        label: '5000 г',
        sku: '01309',
        price: 6320,
        oldPrice: 8710,
        availability: 'Много',
      },
    ],
  },
];

/**

 * @param {string} slug
 * @returns {Promise<Product | undefined>}
 */
export function getProductBySlug(slug) {
  return Promise.resolve(products.find((product) => product.slug === slug));
}
