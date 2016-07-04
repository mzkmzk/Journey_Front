import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import Index from '../Containers/Index/Index'

import { configure_index_store } from '../Store/configure_store.js'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import '../Global/Font/set_font.scss'

const store = configure_index_store()

render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Index />
        </MuiThemeProvider>
    </Provider>
    ,document.getElementById('root')
)
