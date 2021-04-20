import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {ChakraProvider, extendTheme} from '@chakra-ui/react'
import customTheme from '../theme.json'

const theme = extendTheme(customTheme)

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
