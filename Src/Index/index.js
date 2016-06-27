import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import Index from '../Containers/Index/Index'

import { configure_index_store } from '../Store/configure_store.js'

const store = configure_index_store();

render(
    <Provider store={store}>
        <Index />
    </Provider>
    ,document.getElementById('root')
)