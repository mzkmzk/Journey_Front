/**
 * Created by maizhikun on 16/7/6.
 */
import React , { Component } from 'react'
import { render } from 'react-dom'

import Environment from '../../Global/JS/Environment'

import './Panels.scss'

export default class Panels extends Component {
   

    render() {
        var env = new Environment()
        let url = 'https://api.weibo.com/oauth2/authorize?'+'client_id='+env.sinaAppKey+'&scope=all&forcelogin=true&redirect_uri='+window.location.protocol+'\/\/'+env.innerURL+'/v2/User_Controller/sinaLogin'+encodeURIComponent('?')+'url='+window.location.host
        return (
            <article className="panel">
                <section>
                    <h1>Login Journey</h1>
                    <section>
                        <section>
                            <a href={url}>
                                <i className="fa fa-weibo " aria-hidden="true"></i>
                            </a>
                        </section>
                    </section>
                </section>
            </article>
        )
    }
}