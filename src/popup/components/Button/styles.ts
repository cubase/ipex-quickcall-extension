import { css } from 'emotion'

import { colors } from '../../core/theme'

const buttonStyles = css`
  display: inline-flex;
  border: 0;
  outline: 0;
  border-radius: 4px;
  background: ${colors.theme500};
  font-size: 1rem;
  font-weight: bold;
  padding: 0.75rem 1.25rem;
  margin: 1rem 0;
  color: #fff;
  cursor: pointer;
`
export { buttonStyles }
