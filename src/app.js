import {
  Provider,
} from '@saleae/ui-lib';

import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import Home from './containers/Home'

import { injectGlobal } from 'styled-components'

import { globalStyles } from './theme'

injectGlobal`${globalStyles}`

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider
        theme={{
      		font: '"Quattrocento", times, serif',
      		fontSizes: [
      			12, 16, 24, 36, 48, 72
      		]
      	}}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  )
}

render(Home)

if (module.hot) {
  module.hot.accept('./containers/Home', () => { render(Home) })
}
