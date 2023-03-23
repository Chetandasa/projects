import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

 class Header extends Component {
  render() {
    return (
      <div className={this.props.class}>
        <div className='row text-end py-4 login-signup-row'>
          <div className='col-2 col-sm-2 col-md-7' />
          <div className='col-2 col-sm-2 col-md-2 text-end'>
            <a className='login' href='#'>
              login
            </a>
          </div> 
          <div className='col-8 col-sm-8 col-md-3 text-start'>
            <a className='createacc' href='#'>
              Create an account
            </a>
          </div>
        </div>        
      </div>
    );
  }
}

export default withRouter(Header);
