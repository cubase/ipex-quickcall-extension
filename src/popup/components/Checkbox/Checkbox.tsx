/* global HTMLInputElement */
import React, { SyntheticEvent } from 'react'

import { checkboxStyles } from './styles'

type CheckboxProps = {
  label?: string
  isChecked?: boolean
  onChange?: (isChecked: boolean) => void
  [key: string]: any
}

const Checkbox = ({ label, isChecked = false, onChange = () => {}, ...props }: CheckboxProps) => {
  const handleChange = (event: SyntheticEvent<HTMLInputElement>) =>
    onChange(event.currentTarget.checked)

  return (
    <label className={checkboxStyles} {...props}>
      <span>{label}</span>
      <input checked={isChecked} type="checkbox" onChange={handleChange} />
    </label>
  )
}

export default Checkbox
