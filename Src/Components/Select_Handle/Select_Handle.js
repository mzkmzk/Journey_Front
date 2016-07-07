/**
 * Created by maizhikun on 16/6/25.
 */
import React , { Component } from 'react'
import { render } from 'react-dom'

import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import Raised_Button from 'material-ui/RaisedButton'
import Qi_Niu from '../../Global/JS/Qi_Niu'

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

    componentDidMount() {
        var qi_niu = Qi_Niu('upload_file')
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
                    <a  id="upload_file" href="#" >
                        <span>选择文件</span>
                    </a>
                </Dialog>
                {/*<textarea id="text_input_textarea"/>
                <buttom onClick={ ()=> add_activity(document.getElementById('text_input_textarea').value) }>提交</buttom>*/}
            </article>
        )
    }
}