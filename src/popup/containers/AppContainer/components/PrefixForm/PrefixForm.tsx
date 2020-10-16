/* global HTMLFormElement */
import React, { SyntheticEvent } from 'react'

import { prefixFormStyles } from './styles'
import { Prefix } from '../../../../../models/prefix.model'

type PrefixFormProps = {
  defaultValue?: Prefix
  onSubmit: (prefix: Prefix) => void
}

const PrefixForm = ({
  defaultValue = { id: '', name: '', prefix: '', isActive: false },
  onSubmit,
  ...props
}: PrefixFormProps) => {
  const isEditing = !!defaultValue.id

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name'))
    const prefix = String(formData.get('prefix'))
    event.currentTarget.reset()

    return onSubmit(
      isEditing
        ? {
            ...defaultValue,
            name,
            prefix,
          }
        : {
            id: `${name}-${Date.now()}`,
            name,
            prefix,
            isActive: true,
          }
    )
  }

  return (
    <form className={prefixFormStyles} onSubmit={handleSubmit} {...props}>
      <input
        autoComplete="false"
        defaultValue={defaultValue.name}
        name="name"
        placeholder="Název prefixu"
        spellCheck="false"
      />
      <input
        autoComplete="false"
        defaultValue={defaultValue.prefix}
        name="prefix"
        placeholder="Prefix"
        spellCheck="false"
      />
      <button type="submit">{isEditing ? 'Upravit' : 'Přidat'}</button>
    </form>
  )
}

export default PrefixForm
