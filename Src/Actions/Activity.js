import $  from 'jquery'

exports.is_fetching = function() {
    return {
        type: 'IS_FETCHING'
    }
}

exports.load_activity= function() {
    return (dispatch,getState) => {
        dispatch(exports.is_fetching())
        $.getJSON('http://inner.journey.404mzk.com/v1/Creator_Activity_Controller/query',[],function(result) {
            dispatch(exports.is_fetching())
            dispatch(load_activity_action(result.data))
        })
    }
}

function load_activity_action(activities = []) {
    return {
        type: 'LOAD_ACTIVITY',
        activities
    }
}

exports.add_activity = function(text,temp_picture){
    return ( dispatch,getState ) => {
        dispatch(exports.is_fetching())
        const params = {
            text,
            'media': {'qiniu_key': temp_picture}
        }
        $.post('http://inner.journey.404mzk.com/v1/Activity_Controller/insert',params,function(result) {
            dispatch(exports.is_fetching())
            dispatch(load_activity_action([result]))
        })
    }
}

exports.add_temp_picture = function(qiniu_key){
    return {
        type: 'ADD_TEMP_PICTURE',
        'temp_picture': [qiniu_key]
    }
}