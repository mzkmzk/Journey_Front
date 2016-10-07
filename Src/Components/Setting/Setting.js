import React, { Component } from 'react'
import { render } from 'react-dom'

import Paper from 'material-ui/Paper'
import Toggle from 'material-ui/Toggle'
import RaisedButton from 'material-ui/RaisedButton'

import  './Setting.scss'

class Setting extends Component {

    render() {
        return (
            <article className="setting">
                 <Paper className="paper">
                    <h1>Setting</h1>
                    <hr/>
                    <ul>
                        <li><Toggle label="被偷看"/></li>
                        <li className="save"><RaisedButton label="Save" primary={true} /></li>
                    </ul>
                    
                    
                </Paper>
            </article>
           
        )

    }
}

export default Setting