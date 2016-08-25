/**
 * Created by maizhikun on 16/6/25.
 */
import React , { Component } from 'react'
import { render } from 'react-dom'

import QiNiu from '../../Components/QiNiu/QiNiu'

import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import Raised_Button from 'material-ui/RaisedButton'


import './Select_Handle.scss'

export default class Select_Handle extends Component {

    constructor(props) {
        super(props)
        this.handleOpen = this.handleOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.send = this.send.bind(this)
        this.state = {
            open: false,
        }
    }



    handleOpen() {
        //this.props.open = true;
        this.setState({open: true})
    }

    handleClose() {
        //this.props.open = false;
        this.setState({open: false})
    }

    send(send) {
        send.apply(this,[document.getElementById('text_input_textarea').value])
        this.setState({open: false})
    }

    render() {
        const { add_activity } = this.props

        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
                />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onClick={() => this.send(add_activity)}
                />,
        ]

        return (
            <article className="select_handle" >
                <section>
                    <Raised_Button label="发旅记" primary={true} onClick={this.handleOpen} />
                    <Raised_Button label="发旅音" disabled={true} />
                    <Raised_Button label="发旅频" disabled={true} />
                </section>
                
                <section>
                <textarea id="text_input_textarea" className="textarea"/>
                    <ul id="upload_pic"></ul>
                </section>
                <Dialog
                    title="发旅记"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    className="send_text_and_image_dialog"
                    >
                    <QiNiu />

                    <textarea id="text_input_textarea"/>
                    <ul id="upload_pic"></ul>

                </Dialog>
                {/*<textarea id="text_input_textarea"/>
                <buttom onClick={ ()=> add_activity(document.getElementById('text_input_textarea').value) }>提交</buttom>*/}
            </article>
        )
    }
}