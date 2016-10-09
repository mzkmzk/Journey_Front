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
    totals: 0,
    current_page: 1,
    first_query_at: getDate(),
}

function getDate() {
    let date = new Date(),
    Y = date.getFullYear() + '-',
    M = addZero(date.getMonth()+1) + '-',
    D = addZero(date.getDate()) + ' ',
    h = addZero(date.getHours() ) + ':',
    m = addZero(date.getMinutes()) + ':',
    s = addZero(date.getSeconds())

    return (Y+M+D+h+m+s)
}

function addZero(num) {
    if(num < 10 ) {
        return '0' + num
    }
    return num
}


exports.activity = function(state = initial_state, action = null) {
    switch (action.type) {
        /*case 'SET_FIRST_QUERY_AT': 
            return Object.assign({},state,{first_query_at: action.first_query_at})*/
        case 'ADD_TOTALS':
            return Object.assign({},state,{totals: state.totals + action.add_sum})
        case 'INCREASE_CURRENT_PAGE':
            return Object.assign({},state,{current_page: state.current_page + 1 })
        case 'LOAD_ACTIVITY':
            const stateData= state.activities
            let newActivities
            if (action.insert_first === true) {
                newActivities = action.activities.concat(stateData)
            }else {
                newActivities = stateData.concat(action.activities)
            }
            let newDate = {
                activities:newActivities,
                is_fetching: false,
                temp_picture: []
            }
            return Object.assign({}, state,newDate)
        case 'ADD_TEMP_PICTURE':
            const state_data = state.temp_picture
            const new_data = action.temp_picture.concat(state_data)
            return Object.assign({},state,{activities: state.activities,is_fetching: false,temp_picture: new_data})
        default :
            return state
    }

}
