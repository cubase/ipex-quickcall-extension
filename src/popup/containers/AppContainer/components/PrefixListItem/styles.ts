import { css } from 'emotion'

import { colors } from '../../../../core/theme'

const prefixListItemStyles = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;

  &.disabled {
    opacity: 0.4;
  }

  & > .prefix-content {
    display: flex;
    align-items: center;
  }

  & > .actions {
    display: flex;
    align-items: center;
    color: ${colors.gray300};
    font-size: 1rem;

    & > * {
      margin: 0 0.25rem;
      cursor: pointer;
    }

    & > .action-edit {
      transform: rotate(45deg);
    }

    & > .action-edit:hover {
      color: ${colors.gray500};
    }

    & > .action-delete:hover {
      color: ${colors.red500};
    }
  }
`

export { prefixListItemStyles }
