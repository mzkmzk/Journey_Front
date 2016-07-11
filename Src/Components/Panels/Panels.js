/**
 * Created by maizhikun on 16/7/6.
 */
import React , { Component } from 'react'
import { render } from 'react-dom'

import './Panels.scss'

export default class Panels extends Component {
    render() {
        return (
            <article className='panel'>
                <section>
                    <h1>Journey</h1>
                    <section>
                        <h3>登录方式1</h3>
                        <section>
                            微博
                        </section>
                    </section>
                </section>
            </article>
        )
    }
}