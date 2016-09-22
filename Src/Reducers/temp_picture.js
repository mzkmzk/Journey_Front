const initial_state =[]

exports.temp_picture = function(state = initial_state, action = null) {
    switch (action.type) {
        case 'ADD_TEMP_PICTURE':

            return state.concat(action.temp_picture)
        default :
            return state
    }
}

