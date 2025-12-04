/* eslint-disable no-prototype-builtins */

export function formatAmount(amount: number): string {
  const formatter = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 2,
  });

  return formatter.format(amount);
}
