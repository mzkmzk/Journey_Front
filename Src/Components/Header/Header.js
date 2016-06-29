import React, { Component } from 'react'
import { render } from 'react-dom'

import  './Header.scss'

class Header extends Component {

    render() {
        return (
            <header>
                <nav><h1>Journey</h1></nav>
            </header>
        )

    }
}

export default Header