import React, { Component} from 'react'
import { render } from 'react-dom'

import  './Time_Axis.scss'

const TIME_START = 0
const SECOND_START = -3

class Time_Axis extends Component {
    render() {
        const { activities } = this.props
        return (
            <section className='time_axis'>
                {
                    activities.map((activity,index) =>
                            <article key={index}>
                                <time datatime={activity.created_at}>
                                    <blockquote>{ activity.created_at.slice(TIME_START,SECOND_START)}</blockquote>
                                </time>
                                <section >
                                    <p>{activity.text}</p>
                                </section>
                            </article>
                    )
                }
            </section>
        )
    }
}

export default Time_Axis