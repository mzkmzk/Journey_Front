/**
 * Created by maizhikun on 16/6/25.
 */
import React , { Component } from 'react'
import { render } from 'react-dom'

import './Text_Input.scss'

export default class Text_Input extends Component {
    render() {
        return (
            <article id="Text_Input" >
                <textarea />
                <buttom>提交</buttom>
            </article>
        )
    }
}