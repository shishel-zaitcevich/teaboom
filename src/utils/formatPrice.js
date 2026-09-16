/**
 * Форматирует число в цену вида "1 432 ₽" (неразрывные пробелы-разряды, символ рубля).
 * @param {number} value
 * @returns {string}
 */
export function formatPrice(value) {
  const formatted = new Intl.NumberFormat('ru-RU', {
    maximumFractionDigits: value % 1 === 0 ? 0 : 2,
  }).format(value);

  return `${formatted} ₽`;
}
