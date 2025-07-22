export interface CardImage {
  readonly id: number
  readonly image: string
  readonly name: string
}

export type ItemsProps = {
  items: CardImage[]
  size?: 'sm' | 'md'
}
