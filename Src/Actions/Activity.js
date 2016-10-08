import $  from 'jquery'

exports.is_fetching = function() {
    return {
        type: 'IS_FETCHING'
    }
}

exports.load_activity = function() {
    return (dispatch,getState) => {
        dispatch(exports.is_fetching())
        let params = {
            page: getState().activity.current_page
        }
        params = Object.assign(JSON.parse(localStorage.getItem('sina_access_token')),params)
        $.getJSON('http://inner.journey.404mzk.com/v1/Activity_Controller/query',params,function(result) {
            dispatch(exports.is_fetching())
            dispatch(load_activity_action(result.data))
            //第一次加载
            if (getState().activity.totals == 0 ) {
                dispatch(add_totals(result.total))
                if (result.next_page_url != null) {
                    //window.addEventListener('scroll',checkNeedLoadActivity)
                    window.onscroll = checkNeedLoadActivity
                }
            }
            //当没有数据时
            console.log(result.next_page_url)
            if (result.next_page_url == null) {
                console.log('removeEventListener')
                window.onscroll = null
                 console.log('removeEventListener2')
                window.removeEventListener('scroll',checkNeedLoadActivity)
            } 
            dispatch(increase_current_page())
            
        })

         let checkNeedLoadActivity = function(event){
            console.log('scroll')
            console.log(document.body.scrollTop)
            console.log(document.body.offsetHeight)
            console.log(document.body.scrollHeight)
            if (document.body.scrollTop + document.body.offsetHeight + 500 > document.body.scrollHeight) {
                console.log('scroll2')
                 dispatch(exports.load_activity())
            }
        }
    }
}




/*
export.set_first_query_at = function() {
     return {
        type: 'SET_FIRST_QUERY_AT',
        firtst_query_at: getDate(),
     }
}

function getDate() {
    let date = new Date(),
    Y = date.getFullYear() + '-',
    M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-',
    D = (date.getDate() < 10 ? '0'+date.getDate() : date.getDate()) + ' ',
    h = date.getHours() + ':',
    m = date.getMinutes() + ':',
    s = date.getSeconds()
    return (Y+M+D+h+m+s)
}*/

function load_activity_action(activities = []) {
    return {
        type: 'LOAD_ACTIVITY',
        activities
    }
}

function add_totals(add_sum = 1) {
    return {
        type: 'ADD_TOTALS',
        add_sum
    }
}

function increase_current_page() {
    return {
        type: 'INCREASE_CURRENT_PAGE'
    }
}

exports.add_activity = function(text,temp_picture){
    return ( dispatch,getState ) => {
        dispatch(exports.is_fetching())
        const activity = {
            text,
            'media': {'qiniu_key': temp_picture},
        }

        const params = Object.assign(activity,JSON.parse(localStorage.getItem('sina_access_token')))

        $.post('http://inner.journey.404mzk.com/v2/Activity_Controller/insert',params,function(result) {
            dispatch(exports.is_fetching())
            dispatch(load_activity_action(result.data))
            dispatch(add_totals(1))
        })
    }
}

exports.add_temp_picture = function(qiniu_key){
    return {
        type: 'ADD_TEMP_PICTURE',
        'temp_picture': [qiniu_key]
    }
}