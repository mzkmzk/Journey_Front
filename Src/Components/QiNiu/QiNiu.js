/**
 * Created by maizhikun on 16/7/6.
 */
import React , { Component } from 'react'
import { render } from 'react-dom'

import Qi_Niu from '../../Global/JS/Qi_Niu'

export default class QiNiu extends Component {

    componentDidMount() {
        var qi_niu = Qi_Niu('upload_file')
    }

    render() {
        return (
            <article className='panel'>
                <a  id="upload_file" href="#" >
                    <span>选择文件</span>
                </a>
            </article>
        )
    }
}