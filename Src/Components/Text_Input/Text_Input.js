/**
 * Created by maizhikun on 16/6/25.
 */
import React , { Component } from 'react'
import { render } from 'react-dom'

import './Text_Input.scss'

export default class Text_Input extends Component {

    render() {
        const { add_activity } = this.props
        return (
            <article id="Text_Input" >
                <textarea id="text_input_textarea"/>
                <buttom onClick={ ()=> add_activity(document.getElementById('text_input_textarea').value) }>提交</buttom>
            </article>
        )
    }
}