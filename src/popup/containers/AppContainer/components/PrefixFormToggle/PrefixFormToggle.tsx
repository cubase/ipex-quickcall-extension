import React from 'react'
import classnames from 'classnames'

import { prefixFormToggleStyles } from './styles'

type PrefixFormToggleProps = {
  isActive: boolean
  onClick: () => void
}

const PrefixFormToggle = ({ isActive, onClick }: PrefixFormToggleProps) => (
  <div className={prefixFormToggleStyles}>
    <button className="toggle-btn" onClick={onClick}>
      <div
        className={classnames('toggle-btn__arrow', {
          active: isActive,
        })}
      >
        &#x276F;
      </div>{' '}
      {isActive ? 'Zavřít' : 'Přidat prefix'}
    </button>
  </div>
)

export default PrefixFormToggle
