/**
 * Created by maizhikun on 16/6/25.
 */
import React , { Component } from 'react'
import { render } from 'react-dom'

import QiNiu from '../../Components/QiNiu/QiNiu'

import RaisedButton from 'material-ui/RaisedButton'


import './Select_Handle.scss'

export default class Select_Handle extends Component {

    constructor(props) {
        super(props)
        this.send = this.send.bind(this)
    }

    send(add_activity) {
        add_activity.apply(this,[
            document.getElementById('text_input_textarea').value,
            this.props.temp_picture,
            ])
        document.getElementById('text_input_textarea').value = ''
    }

    render() {
        const { add_activity, add_temp_picture , temp_picture } = this.props

        return (
            
            <article className="select_handle" >
                <section>
                    <RaisedButton label="发旅记" primary={true}/>
                    <RaisedButton label="发旅音" disabled={true} />
                    <RaisedButton label="发旅频" disabled={true} />
                </section>
                
                <ul className="submit_content">
                    <li><textarea id="text_input_textarea" className="textarea"/></li>
                    <li><QiNiu add_temp_picture={add_temp_picture}/></li>
                    <li>
                        <ul id="upload_pic" className="upload_pic">
                           {
                                temp_picture.map(
                                    (temp_picture_item,index) => 
                                    <li key={index} style={{'backgroundImage': 'url(http://7xw1qv.com1.z0.glb.clouddn.com/' + temp_picture_item + '?imageView2/1/w/200/interlace/1)'}}></li>
                                )
                           }
                        </ul>
                    </li>
                    <li className="submit_button"><RaisedButton label="提交" primary={true} onClick={() => this.send(add_activity)} /></li>
                </ul>
            </article>
        )
    }
}