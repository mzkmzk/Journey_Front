/**
 * Created by maizhikun on 16/7/6.
 */
import React , { Component } from 'react'
import { render } from 'react-dom'

import './Panels.scss'

export default class Panels extends Component {

    login_webibo(){
        WB2.login(function() {
            alert(WB2.checkLogin())
            alert('执行完毕1')
        })
        alert(WB2.checkLogin())
    }

    render() {
        return (
            <article className='panel'>
                <section>
                    <h1>Login Journey</h1>
                    <h3>登录1</h3>
                    <section>
                        <section>
                            <i className="fa fa-weibo " aria-hidden="true" onClick={() => this.login_weibo()} ></i>
                        </section>
                    </section>
                </section>
            </article>
        )
    }
}