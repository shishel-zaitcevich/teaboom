
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '/api';

/**
 * @param {string} slug
 * @returns {Promise<import('./products.js').Product | undefined>}
 */
export async function getProductBySlug(slug) {
  const response = await fetch(`${API_BASE_URL}/products/${slug}`);

  if (!response.ok) {
    throw new Error(`Не удалось загрузить товар "${slug}": ${response.status}`);
  }

  return response.json();
}
