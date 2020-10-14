import React from 'react'

import { logoStyles } from './styles'
import logo from '../../../../assets/logo.png'

const Logo = () => {
  return (
    <div className={logoStyles}>
      <img src={logo} />
    </div>
  )
}

export default Logo
