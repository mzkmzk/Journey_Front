import React , { Component } from 'react'
import { render } from 'react-dom'

import './Setting.scss'

import Header from '../../Components/Header/Header'
import Compoents_Setting from '../../Components/Setting/Setting'

class Setting extends Component {
    
    render() {
        return (
            <article>
                <Header />
                <Compoents_Setting />
            </article>
        )
    }
}

export default Setting



