import './styles/main.scss';
import { getProductBySlug } from './data/products.js';
import { ProductCard } from './components/ProductCard/ProductCard.js';

const PRODUCT_SLUG = 'ananasovij-ulun';

const root = document.querySelector('#app');

async function renderApp() {
  const product = await getProductBySlug(PRODUCT_SLUG);

  if (!product) {
    root.textContent = 'Товар не найден.';
    return;
  }

  root.innerHTML = '';
  root.appendChild(ProductCard(product));
}

renderApp();
