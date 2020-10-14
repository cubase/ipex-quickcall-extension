import React, { useState } from 'react'

import { Logo, List } from '../../components'
import { usePrefixService } from './services'
import { PrefixForm, PrefixFormToggle, PrefixListItem } from './components'
import { appContainerStyles } from './styles'

import { Prefix } from '../../../models/prefix.model'

const AppContainer = () => {
  const [prefixForm, setPrefixForm] = useState({
    id: '',
    isActive: false,
  })
  const { operations, models } = usePrefixService()

  const handleTogglePrefixForm = () =>
    setPrefixForm((prefixForm) =>
      prefixForm.isActive ? { id: '', isActive: false } : { ...prefixForm, isActive: true }
    )

  const handleFormSubmit = (prefix: Prefix) => {
    if (prefixForm.id) {
      operations.handlePrefixUpdate(prefixForm.id, prefix)
    } else {
      operations.handlePrefixAdd(prefix)
    }
    setPrefixForm({ id: '', isActive: false })
  }

  return (
    <div className={appContainerStyles}>
      <Logo />
      <List emptyText="Nebyl nakonfigurován žádný prefix." items={models.prefixes}>
        {({ item, ListItem }) => (
          <ListItem key={item.id}>
            <PrefixListItem
              isActive={item.isActive}
              name={item.name}
              prefix={item.prefix}
              onDelete={() => operations.handlePrefixDelete(item.id)}
              onEdit={() => setPrefixForm({ id: item.id, isActive: true })}
              onToggleActive={() => operations.handlePrefixToggleActive(item.id)}
            />
          </ListItem>
        )}
      </List>
      {/* BUTTON COMPONENT */}

      <PrefixFormToggle isActive={prefixForm.isActive} onClick={handleTogglePrefixForm} />
      {prefixForm.isActive && (
        <PrefixForm
          defaultValue={
            prefixForm.id
              ? models.prefixes.find((prefix) => prefix.id === prefixForm.id)
              : undefined
          }
          onSubmit={handleFormSubmit}
        />
      )}
    </div>
  )
}

export default AppContainer
