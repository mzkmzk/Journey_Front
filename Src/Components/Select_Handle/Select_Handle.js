/**
 * Created by maizhikun on 16/6/25.
 */
import React , { Component } from 'react'
import { render } from 'react-dom'

import Raised_Button from 'material-ui/RaisedButton'

import './Select_Handle.scss'

export default class Select_Handle extends Component {

    render() {
        const { add_activity } = this.props
        return (
            <article id="Select_Handle" >
                <Raised_Button label="Default" style={{margin: 12}}/>
                <textarea id="text_input_textarea"/>
                <buttom onClick={ ()=> add_activity(document.getElementById('text_input_textarea').value) }>提交</buttom>
            </article>
        )
    }
}