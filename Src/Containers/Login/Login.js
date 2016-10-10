import React , { Component } from 'react'
import { render } from 'react-dom'

import Panels from '../../Components/Panels/Panels'

import './Login.scss'

export default class Login extends Component {

    constructor(props){
        super(props)
        this.style = {
            background:  'url("http://qiniu.404mzk.com/login.jpg?imageView2/1/w/'+window.innerWidth+'/h/'+window.innerHeight+'/interlace/1") top center/cover no-repeat '
        }
    }

    render() {
        return (
            <article style={this.style}>
                <Panels />
            </article>
        )
    }
}



