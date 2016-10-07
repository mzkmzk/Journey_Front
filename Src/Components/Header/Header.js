import React, { Component } from 'react'
import { render } from 'react-dom'

import RaisedButton from 'material-ui/RaisedButton'

import  './Header.scss'

class Header extends Component {

    render() {
        return (
            <header>
                <nav>
                    <a href="/"><h1>Journey</h1></a>
                    {/*<section className='menu'>
                        <a href="/setting.html">
                        <RaisedButton
                          icon={<i className="fa fa-cog" aria-hidden="true"></i>}
                        />
                        </a>
                    </section>*/}
                </nav>
                
            </header>
        )

    }
}

export default Header