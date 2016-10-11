import React, { Component } from 'react'
import { render } from 'react-dom'

import RaisedButton from 'material-ui/RaisedButton'
import {Popover, PopoverAnimationVertical} from 'material-ui/Popover'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'

import  './Header.scss'

class Header extends Component {
    
     constructor(props) {
        super(props)
        this.handleTouchTap = this.handleTouchTap.bind(this)
        this.handleRequestClose = this.handleRequestClose.bind(this)

        this.state = {
          open: false,
        }
      }

      handleTouchTap(event){
        console.log('handleTouchTap')
        // This prevents ghost click.
        event.preventDefault()
        this.setState({
          open: true,
          anchorEl: event.currentTarget,
        })
      }

      handleRequestClose(){
        this.setState({
          open: false,
        })
      }

    render() {
        return (
            <header>
                <nav>
                    <a href="/"><h1>Journey</h1></a>
                    <div className='menu'>
                       
                        <RaisedButton 
                            onClick={this.handleTouchTap} 
                            icon={<i className="fa fa-cog" aria-hidden="true"></i>} 
                        />
                        <Popover
                          open={this.state.open}
                          anchorEl={this.state.anchorEl}
                          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                          targetOrigin={{horizontal: 'left', vertical: 'top'}}
                          onRequestClose={this.handleRequestClose}
                          animation={PopoverAnimationVertical}
                        >
                          <Menu>
                            {/*<MenuItem primaryText="Settings" />*/}
                            <a href="./login.html"><MenuItem primaryText="Sign out"/></a>
                         </Menu>
                        </Popover>
                        
                    </div>
                </nav>
                
            </header>
        )

    }
}

export default Header