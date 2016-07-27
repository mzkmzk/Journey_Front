/**
 * Created by maizhikun on 16/7/6.
 */
import React , { Component } from 'react'
import { render } from 'react-dom'
import $ from 'jquery'

import './Panels.scss'

export default class Panels extends Component {

    render() {
        return (
            <article className="panel">
                <section>
                    <h1>Login Journey</h1>
                    <section>
                        <section>
                            <a href="https://api.weibo.com/oauth2/authorize?client_id=1911849944&redirect_uri=http://test.journey.404mzk.com/&scope=all&forcelogin=true">
                                <i className="fa fa-weibo " aria-hidden="true"></i>
                            </a>
                        </section>
                    </section>
                </section>
            </article>
        )
    }
}