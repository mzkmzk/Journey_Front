import $  from 'jquery'

exports.is_fetching = function() {
    return {
        type: 'IS_FETCHING'
    }
}

exports.load_activity= function() {
    return (dispatch,getState) => {
        dispatch(exports.is_fetching())
        $.getJSON("http://inner.journey.404mzk.com/v1/Activity_Controller/query",[],function(result) {
            console.log(result);
            dispatch(exports.is_fetching())
            dispatch(load_activity_action(result.data))
        });
    }
}

function load_activity_action(activitys = []) {
    return {
        type: 'LOAD_ACTIVITY',
        activitys
    }
}

exports.add_activity = function(text){
    return ( dispatch,getState ) => {

        dispatch(exports.is_fetching())
        const params = {
            text
        }
        $.post('http://inner.journey.404mzk.com/v1/Activity_Controller/insert',params,function(result) {
            dispatch(exports.is_fetching())
            dispatch(load_activity_action(result.activity))
        });


    }
}