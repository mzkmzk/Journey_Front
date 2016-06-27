import React , { Component } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import Header from '../../Components/Header/Header'
import Time_Axis from '../../Components/Time_Axis/Time_Axis'
import Text_Input from '../../Components/Text_Input/Text_Input'

import action_activity from '../../Actions/activity'

import './Index.scss'

class Index extends Component {

    componentDidMount() {
        const { actions } = this.props
        actions.load_activity()
    }

   /* componentWillReceiveProps(nextProps) {
        if (nextProps._list.data.length !==0  && this.props._list.lastScollTop !==0) {
            this.props.actions.ChangeLastScollTop(0)
        }
    }*/

    render() {
        const { activity,actions } = this.props
        return (
            <article>
                <Header></Header>
                <section>
                    <Text_Input add_activity={actions.add_activity}></Text_Input>
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




