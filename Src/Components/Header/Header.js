import React, { Component } from 'react'
import { render } from 'react-dom'

import RaisedButton from 'material-ui/RaisedButton'

import  './Header.scss'

class Header extends Component {

    render() {
        return (
            <header>
                <nav>
                    <h1>Journey</h1>
                    <section className='menu'>
                        <RaisedButton
                          icon={<i className="fa fa-cog" aria-hidden="true"></i>}
                        />
                    </section>
                </nav>
                
            </header>
        )

    }
}

export default Header