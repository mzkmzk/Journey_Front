import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import '../../Utils/Font_Awesome/scss/font-awesome.scss'

import Setting from '../../Containers/Setting/Setting'

import { configure_index_store } from '../../Store/configure_store.js'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import '../../Global/Font/set_font.scss'
import '../../Global/CSS/reset.scss'



const store = configure_index_store()

render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Setting />
        </MuiThemeProvider>
    </Provider>
    ,document.getElementById('root')
)
