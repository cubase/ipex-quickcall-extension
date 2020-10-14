import React from 'react'
import classnames from 'classnames'

import { listItemStyles } from './styles'

type ListItemProps = {
  children: React.ReactNode
  isDisabled?: boolean
}

const ListItem = ({ children, isDisabled, ...props }: ListItemProps) => (
  <li
    className={classnames(listItemStyles, {
      disabled: isDisabled,
    })}
    {...props}
  >
    {children}
  </li>
)

export default ListItem
