/**
 * Created by maizhikun on 16/7/6.
 */
import React , { Component } from 'react'
import { render } from 'react-dom'
import $ from 'jquery'

import './Panels.scss'

export default class Panels extends Component {

    login_weibo(){
        WB2.login(function() {
            alert(WB2.checkLogin())
            alert('执行完毕1')
        })
        alert(WB2.checkLogin())
        var data = {
            'client_id': 1911849944,
            'redirect_uri': 'http://test.journey.404mzk.com/',
            'scope': 'all',
            'forcelogin': true,
        }
        $.getJSON('https://api.weibo.com/oauth2/authorize',data,function(rs){
            console.log(JSON.parse(rs))
        })

    }

    render() {
        return (
            <article className='panel'>
                <section>
                    <h1>Login Journey</h1>
                    <h3>登录1</h3>
                    <section>
                        <section>
                            <i className="fa fa-weibo " aria-hidden="true" onClick={ () => this.login_weibo()} ></i>
                        </section>
                    </section>
                </section>
            </article>
        )
    }
}