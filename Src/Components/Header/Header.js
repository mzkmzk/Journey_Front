import React, { Component } from 'react'
import { render } from 'react-dom'

import RaisedButton from 'material-ui/RaisedButton'

import  './Header.scss'

class Header extends Component {

    render() {
        return (
            <header>
                <nav>
                    <h1>Journey111222</h1>
                    <section className='menu'>
                        <a href="">
                        <RaisedButton
                          icon={<i className="fa fa-cog" aria-hidden="true"></i>}
                        />
                        </a>
                    </section>
                </nav>
                
            </header>
        )

    }
}

export default Header