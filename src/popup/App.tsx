import React from 'react'
import { injectGlobal } from 'emotion'

import { AppContainer } from './containers'

import '../../assets/clearsans/fonts.css'

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    width: 400px;
    color: #333;
    font-family: 'Clear Sans',sans-serif;
    font-size: 12px;
  }

  h1,h2 {
    margin: 1rem 0;
  }

  ul {
    list-style: none;
  }

  input:focus,:active {
    outline: 0;
    /* border: 0; */
  }

  button:focus {
    outline: 0;
  }

`

const App = () => {
  return <AppContainer></AppContainer>
}

export default App
