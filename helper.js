/**
 * Formats the given amount into a currency string.
 *
 * @param {number} amount - The amount to be formatted.
 * @returns {string} The formatted currency string.
 */

export default function formatCurrency(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
    }).format(amount)
}