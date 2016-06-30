/**
 * Created by maizhikun on 16/6/25.
 */
import React , { Component } from 'react'
import { render } from 'react-dom'

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Raised_Button from 'material-ui/RaisedButton'

import './Select_Handle.scss'

export default class Select_Handle extends Component {

    constructor(props) {
        super(props)
        this.state = {
            open: false,
        }
    }

    handleOpen() {
        console.log('open');
        this.setState({open: true});
    };

    handleClose() {
        this.setState({open: false});
    }

    render() {
        const { add_activity } = this.props

        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
                />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleClose}
                />,
        ];

        return (
            <article className="select_handle" >
                <Raised_Button label="发旅记" primary={true} onClick={this.handleOpen} />
                <Raised_Button label="发旅音" disabled={true} />
                <Raised_Button label="发旅频" disabled={true} />
                <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    >
                    <textarea id="text_input_textarea"/>
                    <buttom onClick={ ()=> add_activity(document.getElementById('text_input_textarea').value) }>提交</buttom>
                </Dialog>
                {/*<textarea id="text_input_textarea"/>
                <buttom onClick={ ()=> add_activity(document.getElementById('text_input_textarea').value) }>提交</buttom>*/}
            </article>
        )
    }
}