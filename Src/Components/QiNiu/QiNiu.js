/**
 * Created by maizhikun on 16/7/6.
 */
import React , { Component } from 'react'
import { render } from 'react-dom'

import Qi_Niu from '../../Global/JS/Qi_Niu'

export default class QiNiu extends Component {

    constructor(props) {
        super(props)

    }

    componentDidMount() {
        const _self = this
        var qi_niu = Qi_Niu('upload_file',{
            'FileUploaded': function(up, file, info) {
                
                //console.log('FileUploaded1')
                
                //var domain = up.getOption('domain')

                var res = JSON.parse(info)
                 _self.props.add_temp_picture(res.key)
                //var sourceLink = 'http://7xw1qv.com1.z0.glb.clouddn.com/' + res.key // 获取上传成功后的文件的Url
                //var li = document.createElement('li')
                //li.style.backgroundImage = 'url('+sourceLink+')'

                //var img = document.createElement('img')
                //img.src = sourceLink
                //li.appendChild(img)
                //document.getElementById('upload_pic').appendChild(li)
            }
        })
        
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