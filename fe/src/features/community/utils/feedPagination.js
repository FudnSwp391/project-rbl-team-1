export const FEED_POSTS_PER_PAGE = 2
export const FEED_VISIBLE_PAGE_COUNT = 5

export function getTotalPages(totalItems, pageSize = FEED_POSTS_PER_PAGE) {
  return Math.max(1, Math.ceil(totalItems / pageSize))
}

export function getPageItems(items, page, pageSize = FEED_POSTS_PER_PAGE) {
  const start = (page - 1) * pageSize
  return items.slice(start, start + pageSize)
}

export function getVisiblePages(currentPage, totalPages, maxVisible = FEED_VISIBLE_PAGE_COUNT) {
  if (totalPages <= maxVisible) {
    return Array.from({ length: totalPages }, (_, index) => index + 1)
  }

  let start = currentPage - Math.floor(maxVisible / 2)
  let end = start + maxVisible - 1

  if (start < 1) {
    start = 1
    end = maxVisible
  }

  if (end > totalPages) {
    end = totalPages
    start = totalPages - maxVisible + 1
  }

  return Array.from({ length: end - start + 1 }, (_, index) => start + index)
}
