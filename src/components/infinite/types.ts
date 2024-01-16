export interface IInfiniteProps {
  className?: string
  loading?: boolean
  hasMore?: boolean
  children: React.ReactNode
  WrapEl?: React.ElementType
  onFetchMore: () => void
}
