import React from 'react'

import { buttonStyles } from './styles'

type ButtonProps = {
  children: React.ReactNode
  isDisabled?: boolean
}

const Button = ({ children, ...props }: ButtonProps) => (
  <button className={buttonStyles} {...props}>
    {children}
  </button>
)

export default Button
