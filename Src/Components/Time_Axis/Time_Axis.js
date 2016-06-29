import React, { Component} from 'react'
import { render } from 'react-dom'

import  './Time_Axis.scss'

class Time_Axis extends Component {
    render() {
        const { activities } = this.props
        return (
            <section className="time_axis">
                {
                    activities.map((activity,index) =>
                            <article key={index}>
                                <time datatime={activity.created_at}>
                                    <blockquote>{ activity.created_at.slice(0,-3)}</blockquote>
                                </time>
                                <section >
                                    {activity.text}
                                </section>
                            </article>
                    )
                }
            </section>
        )
    }
}

export default Time_Axis