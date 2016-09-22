const initial_state = {
    is_fetching: false,
    activities: [
        /*{
            text: "我擦",
            created_at: '2016-05-03: 11:11',
        }*/
    ],
    temp_picture: [
        
    ],
}

exports.activity = function(state = initial_state, action = null) {
    switch (action.type) {
        case 'LOAD_ACTIVITY':
            const stateData= state.activities
            const newData = action.activities.concat(stateData)
            return Object.assign({}, state,{activities:newData,is_fetching: false,temp_picture: []})
        case 'ADD_TEMP_PICTURE':
            const state_data = state.temp_picture
            const new_data = action.temp_picture.concat(state_data)
            return Object.assign({},state,{activities: state.activities,is_fetching: false,temp_picture: new_data})
        default :
            return state
    }

}
