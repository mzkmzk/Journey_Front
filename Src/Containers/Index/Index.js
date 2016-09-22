import React , { Component } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import Header from '../../Components/Header/Header'
import Time_Axis from '../../Components/Time_Axis/Time_Axis'
import Select_Handle from '../../Components/Select_Handle/Select_Handle'

import action_activity from '../../Actions/activity'
import action_temp_picture from '../../Actions/temp_picture'

import './Index.scss'

class Index extends Component {

    componentDidMount() {
        const { actions } = this.props
        actions.load_activity()
    }

    render() {
        const { activity, actions, temp_picture } = this.props
        console.log(actions.add_temp_picture + 'index.actions.add_add_temp_picture')
        console.log(actions.add_temp_picture)

        //console.log(actions.add_temp_picture())
        const add_add_temp_picture = actions.add_add_temp_picture || 'fuck1'
        return (
            <article>
                <Header></Header>
                <section>
                    <Select_Handle aa={'111'} add_temp_picture={actions.add_temp_picture} add_activity={actions.add_activity} ></Select_Handle>
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




