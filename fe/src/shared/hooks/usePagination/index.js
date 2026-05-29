import { useMemo, useState } from 'react'

export default function usePagination({ total = 0, pageSize = 10, initialPage = 1 } = {}) {
  const [page, setPage] = useState(initialPage)

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(total / pageSize)),
    [total, pageSize],
  )

  return {
    page,
    pageSize,
    totalPages,
    setPage,
    nextPage: () => setPage((p) => Math.min(p + 1, totalPages)),
    prevPage: () => setPage((p) => Math.max(p - 1, 1)),
  }
}
