import { css } from 'emotion'

const prefixFormToggleStyles = css`
  display: flex;
  justify-content: center;

  & > .toggle-btn {
    display: flex;
    border: 0;
    background: 0;
    font-weight: bold;
    margin: 0.5rem 0;
    padding: 0.25rem 0;
    cursor: pointer;

    & > .toggle-btn__arrow {
      margin-right: 0.5rem;
      transform: rotate(90deg);

      &.active {
        transform: rotate(-90deg);
      }
    }
  }
`

export { prefixFormToggleStyles }
