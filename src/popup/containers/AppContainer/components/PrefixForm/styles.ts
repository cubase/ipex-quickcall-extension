import { css } from 'emotion'

import { colors } from '../../../../core/theme'

const prefixFormStyles = css`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: ${colors.gray200};
  border-radius: 4px;

  & > input {
    border: 0;
    padding: 0.5rem;
    margin: 0.25rem 0;
    border-radius: 4px;
  }

  & > button {
    margin: 0.25rem 0;
    padding: 0.5rem 1rem;
    font-weight: bold;
    text-transform: uppercase;
    color: #fff;
    background-color: ${colors.theme500};
    border: 0;
    border-radius: 4px;
    cursor: pointer;
  }
`

export { prefixFormStyles }
