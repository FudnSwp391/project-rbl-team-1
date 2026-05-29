export function formatVND(value) {
  if (value == null || Number.isNaN(Number(value))) return ''
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(Number(value))
}
