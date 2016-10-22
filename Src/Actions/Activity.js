import $  from 'jquery'


import 'whatwg-fetch'
import  ajax from '../Utils/Ajax'
exports.is_fetching = function() {
    return {
        type: 'IS_FETCHING'
    }
}

exports.load_activity = function() {
    return (dispatch,getState) => {
        let state = getState()
        
        let params = {
            page: state.activity.current_page,
            first_query_at: state.activity.first_query_at
        }
        params = Object.assign(JSON.parse(localStorage.getItem('sina_access_token')),params)
        window.onscroll = null
        dispatch(exports.is_fetching())
        /*fetch(ajax.urlAppendData('http://inner.journey.404mzk.com/v1/Activity_Controller/query',params)
        //{
          //method: 'GET',
          //headers: {
            //'Accept': 'application/json',
            //'Content-Type': 'application/json'
            //'Accept':'application/json, text/javascript, 
            //'Content-type': 'application/json'
          //}
          //body: JSON.stringify(encodeFormData)
        //}
        ).then(function(result) {
            //console.log(result)
            //console.log(result.body)
            //console.log(result.body)
            //console.log(result.blob())
            console.log(result.json())
            result = result.json()
            
             //console.log(result111)
            if (result.next_page_url != null) {
             window.onscroll = checkNeedLoadActivity
            }
            dispatch(exports.is_fetching())
            dispatch(load_activity_action(result.data))
            //第一次加载
            if (state.activity.totals == 0 ) {
                dispatch(add_totals(result.total))
            }
            //当没有数据时
            //if (result.next_page_url == null) {
                //window.removeEventListener('scroll',checkNeedLoadActivity)
            //} 
            dispatch(increase_current_page())
            
        })*/
        $.getJSON('http://inner.journey.404mzk.com/v1/Activity_Controller/query',params,function(result) {
            if (result.next_page_url != null) {
             window.onscroll = checkNeedLoadActivity
            }
            dispatch(exports.is_fetching())
            dispatch(load_activity_action(result.data))
            //第一次加载
            if (state.activity.totals == 0 ) {
                dispatch(add_totals(result.total))
            }
            //当没有数据时
            //if (result.next_page_url == null) {
                //window.removeEventListener('scroll',checkNeedLoadActivity)
            //} 
            dispatch(increase_current_page())
            
        })

         let checkNeedLoadActivity = function(event){    
            if (document.body.scrollTop + window.innerHeight + 500 > document.body.scrollHeight) {
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

function load_activity_action(activities = [],insert_first = false) {
    return {
        type: 'LOAD_ACTIVITY',
        activities,
        insert_first,
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
        //fetch('http://inner.journey.404mzk.com/v2/Activity_Controller/insert',{
         // method: 'POST',
         // body: JSON.stringify(params)
        //}).then(function(result) {
            dispatch(exports.is_fetching())
            dispatch(load_activity_action(result.data, true))
            dispatch(add_totals(1))
            dispatch
        })
    }
}

exports.add_temp_picture = function(qiniu_key){
    return {
        type: 'ADD_TEMP_PICTURE',
        'temp_picture': [qiniu_key]
    }
}