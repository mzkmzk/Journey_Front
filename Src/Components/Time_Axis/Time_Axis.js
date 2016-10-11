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
                                    <ul id="upload_pic" className="upload_pic">
                                       {
                                            activity.creator_media && activity.creator_media.map(
                                                (media,index) => 
                                                <li  key={index}><img src={'http://7xw1qv.com1.z0.glb.clouddn.com/' + media.qiniu_key } style={{'backgroundImage': 'url(http://7xw1qv.com1.z0.glb.clouddn.com/' + media.qiniu_key + '?imageView2/1/w/300/interlace/1)'}}/></li>
                                            )
                                       }
                                    </ul>
                                </section>
                            </article>
                    )
                }
            </section>
        )
    }
}

export default Time_Axis