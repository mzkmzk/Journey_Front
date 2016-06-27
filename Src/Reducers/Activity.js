/**
 * Created by maizhikun on 16/6/26.
 */
const initial_state = {
    is_fetching: false,
    activities: [
        {
            text: "我擦",
            created_at: '2016-05-03: 11:11',
        }
    ],
}

exports.activity = function(state = initial_state, action) {
    switch (action.type) {
        case 'LOAD_ACTIVITY':
            const stateData= state.activities;
            const newData = stateData.concat(action.activities);
            return Object.assign({}, state,{activities:newData,is_fetching: false});
        default :
            return state;
    }

}
