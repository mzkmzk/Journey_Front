/**
 * Created by maizhikun on 16/6/26.
 */
import { combineReducers } from 'redux'
import { activity } from './activity'
import { temp_picture } from './temp_picture'


exports.index = combineReducers({
    activity,
    temp_picture,
})