import { css } from 'emotion'
import { colors } from '../../../../core/theme'

const listItemStyles = css`
  display: flex;
  background-color: #fff;
  border-radius: 4px;
  margin: 0.25rem 0;
  padding: 0.5rem;
  border: 1px solid ${colors.gray200};

  &.active {
    border-color: ${colors.green500};
  }

  &.disabled {
    opacity: 0.4;
    pointer-events: none;
  }
`
export { listItemStyles }
