import React from 'react'
import classnames from 'classnames'

import { Checkbox } from '../../../../components'
import { prefixListItemStyles } from './styles'

type PrefixListItemProps = {
  name: string
  prefix: string
  isActive?: boolean
  onDelete: () => void
  onEdit: () => void
  onToggleActive: () => void
}

const PrefixListItem = ({
  name,
  prefix,
  isActive,
  onDelete,
  onEdit,
  onToggleActive,
  ...props
}: PrefixListItemProps) => (
  <div
    className={classnames(prefixListItemStyles, {
      disabled: !isActive,
    })}
    {...props}
  >
    <div className="prefix-content">
      <Checkbox
        isChecked={isActive}
        style={{
          marginRight: '0.5rem',
        }}
        title="Aktivovat/deaktivovat zobrazení v kontextovém menu"
        onChange={onToggleActive}
      ></Checkbox>
      <strong>{name}</strong>
      <span>&nbsp;({prefix})</span>
    </div>
    <div className="actions">
      <span className="action-edit" title="Upravit" onClick={onEdit}>
        &#x270F;
      </span>
      <span className="action-delete" title="Smazat" onClick={onDelete}>
        &#x2715;
      </span>
    </div>
  </div>
)

export default PrefixListItem
