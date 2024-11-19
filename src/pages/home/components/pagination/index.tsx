import { ArrowLeft, ArrowRight } from 'lucide-react'

import { ButtonPagination } from './components/button-pagination'
import { IPaginationProps } from './interfaces/pagination-props.interface'

export function Pagination({
  next,
  previous,
  setOffset,
  filters,
  count,
}: IPaginationProps) {
  const currentPage = Number(
    ((filters.offset + filters.limit) / filters.limit).toFixed(),
  )

  const lastPage: number = Number((count / filters.limit).toFixed())

  return (
    <footer className="flex flex-wrap items-center justify-center gap-2">
      <ButtonPagination
        disabled={!previous}
        onClick={() => setOffset(filters.offset - filters.limit)}
      >
        <ArrowLeft size={16} />
        <span>Anterior</span>
      </ButtonPagination>
      <div className="flex items-center justify-center gap-2 max-sm:-order-1 max-sm:w-full">
        {currentPage - 1 > 0 && (
          <ButtonPagination disabled={false} onClick={() => setOffset(0)}>
            1
          </ButtonPagination>
        )}
        <ButtonPagination active>{currentPage}</ButtonPagination>
        {!!next && (
          <ButtonPagination
            disabled={false}
            onClick={() => setOffset(filters.limit * lastPage)}
          >
            {lastPage + 1}
          </ButtonPagination>
        )}
      </div>
      <ButtonPagination
        disabled={!next}
        onClick={() => setOffset(filters.offset + filters.limit)}
      >
        <span>Próximo</span>
        <ArrowRight size={16} />
      </ButtonPagination>
    </footer>
  )
}
