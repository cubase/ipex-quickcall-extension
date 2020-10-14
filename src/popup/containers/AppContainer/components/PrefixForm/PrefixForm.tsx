/* global HTMLFormElement */
import React, { SyntheticEvent } from 'react'

import { newPrefixFormStyles } from './styles'
import { Prefix } from '../../../../../models/prefix.model'

type NewPrefixForm = {
  defaultValue?: Prefix
  onSubmit: (prefix: Prefix) => void
}

const NewPrefixForm = ({
  defaultValue = { id: '', name: '', prefix: '', isActive: false },
  onSubmit,
  ...props
}: NewPrefixForm) => {
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
    <form className={newPrefixFormStyles} onSubmit={handleSubmit} {...props}>
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

export default NewPrefixForm
