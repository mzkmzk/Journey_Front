import React , { Component } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import Header from '../../Components/Header/Header'
import Time_Axis from '../../Components/Time_Axis/Time_Axis'
import Select_Handle from '../../Components/Select_Handle/Select_Handle'

import action_activity from '../../Actions/activity'
import action_temp_picture from '../../Actions/temp_picture'

import  Env from '../../Global/JS/Environment'

import Viewerjs from 'viewerjs'

import './Index.scss'

class Index extends Component {

    constructor(props) {
        super(props)
        this.checkPower()
    }
    
    componentDidMount() {
        const { actions } = this.props
        actions.load_activity()
       // actions.set_first_query_at()
    }

    listenScroll() {
        
    }

    checkPower() {
        const urlArgs = this.urlArgs()
        //const env = Env()
        if(urlArgs['sina_access_token'] !=undefined && urlArgs['id'] !=undefined) {
            localStorage.setItem('sina_access_token',JSON.stringify({
                'sina_access_token': urlArgs['sina_access_token'],
                'id': urlArgs['id'],
            }))
        }
        if (localStorage.getItem('sina_access_token') == undefined) {
            window.location.href = window.location.protocol+'\/\/'+window.location.host+'/login.html'
        }
    }

    urlArgs() {
        var args = {}
        var query = location.search.substring(1)
        var pairs = query.split('&')
        for (var i =  pairs.length - 1; i >= 0; i--) {
            var pos = pairs[i].indexOf('=')
            if ( pos === -1 ) continue
            var name = pairs[i].substring(0,pos)
            var value = pairs[i].substring(pos+1,pairs[i].length)
            args[name] = value
                
        }
        return args

    }

    render() {
        const { activity, actions, temp_picture } = this.props
        let viewer = new Viewerjs(document.body,{})
        console.log(viewer)
        //console.log(actions.add_temp_picture())
        const add_temp_picture = actions.add_add_temp_picture
        return (
            <article className="index">
                <Header></Header>
                <section>
                    <Select_Handle temp_picture={activity.temp_picture} add_temp_picture={actions.add_temp_picture} add_activity={actions.add_activity} ></Select_Handle>
                    <Time_Axis activities={activity.activities}></Time_Axis>

                </section>
            </article>
        )
    }
}

function mapStateToProps(state) {
    return {
        activity: state.activity,
        temp_picture: state.temp_picture
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(
        Object.assign(
            {},
            action_activity,
            action_temp_picture
        )
        ,
        dispatch)
    }
}

export default Index = connect(
    mapStateToProps,
    mapDispatchToProps
)(Index)




