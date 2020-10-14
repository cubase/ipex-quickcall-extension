import React from 'react'

import { ListItem } from './components'
import { listStyles } from './styles'

type ListItemComponent = typeof ListItem

type ListProps<T> = {
  items: T[]
  children: ({
    item,
    index,
    ListItem,
  }: {
    item: T
    index: number
    ListItem: ListItemComponent
  }) => React.ReactNode
  emptyText?: string
}

const List = <T,>({ items, children, emptyText, ...props }: ListProps<T>) => {
  if (emptyText && items.length === 0) {
    return (
      <h4
        style={{
          display: 'flex',
          justifyContent: 'center',
          fontWeight: 100,
          fontSize: '1rem',
          margin: '2rem 0',
          color: '#a5a5a5',
        }}
      >
        {emptyText}
      </h4>
    )
  }

  return (
    <ul className={listStyles} {...props}>
      {items.map((item, index) => children({ item, index, ListItem }))}
    </ul>
  )
}

export default List
