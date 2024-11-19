import { Skeleton } from '@/components/ui/skeleton'

import { WrapperList } from '../wrapper-list'
import { ILoadingListProps } from './loading-list-props.interface'

export function LoadingList({ length }: ILoadingListProps) {
  return (
    <WrapperList>
      {Array.from({ length }).map((_, index) => (
        <Skeleton key={index} className="h-60" />
      ))}
    </WrapperList>
  )
}
