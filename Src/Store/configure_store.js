/**
 * Created by maizhikun on 16/6/26.
 */
import { createStore , applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { index } from '../Reducers/index'

exports.configure_index_store = function(initial_state) {
    return createStore(index,initial_state,applyMiddleware(thunk));
}
