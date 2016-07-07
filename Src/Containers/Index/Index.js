import React , { Component } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import Header from '../../Components/Header/Header'
import Time_Axis from '../../Components/Time_Axis/Time_Axis'
import Select_Handle from '../../Components/Select_Handle/Select_Handle'

import action_activity from '../../Actions/activity'

import './Index.scss'

class Index extends Component {

    componentDidMount() {
        const { actions } = this.props
        actions.load_activity()
    }

    render() {
        const { activity,actions } = this.props
        return (
            <article>
                <Header></Header>
                <section>
                    <Select_Handle add_activity={actions.add_activity}></Select_Handle>
                    <Time_Axis activities={activity.activities}></Time_Axis>

                </section>
            </article>
        )
    }
}

function mapStateToProps(state) {
    return {
        activity: state.activity
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(action_activity,dispatch)
    }
}

export default Index = connect(
    mapStateToProps,
    mapDispatchToProps
)(Index)




