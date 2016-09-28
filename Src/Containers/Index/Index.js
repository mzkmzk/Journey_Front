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

import './Index.scss'

class Index extends Component {

    constructor(props) {
        super(props)
        this.checkPower()
    }
    
    componentDidMount() {
        const { actions } = this.props
        actions.load_activity()
    }

    checkPower() {
        const urlArgs = this.urlArgs()
        //const env = Env()
        if(urlArgs['code'] == undefined  ) {
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
            var value = pairs[i].substring(pos,pairs[i].length)
            args[name] = value
                
        }
        return args

    }

    render() {
        const { activity, actions, temp_picture } = this.props
        console.log(actions.add_temp_picture + 'index.actions.add_add_temp_picture')
        console.log(temp_picture)


        //console.log(actions.add_temp_picture())
        const add_temp_picture = actions.add_add_temp_picture || 'fuck1'
        return (
            <article>
                <Header></Header>
                <section>
                    <Select_Handle temp_picture={temp_picture} add_temp_picture={actions.add_temp_picture} add_activity={actions.add_activity} ></Select_Handle>
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
    console.log(action_activity)

    console.log(action_temp_picture)
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




