import React, { Component } from 'react';
import '../Styles/Home.css';

 class Header extends Component {
  render() {
    return (
      <div className={this.props.class}>
          <div className='row text-end p-4  login-signup-row'>
            <div className='col-2 col-sm-2 col-md-7' />
            <div className='col-2 col-sm-2 col-md-2 text-end'>
              <a className='login' href='#'>
                login
              </a>
            </div> 
            <div className='create-account-button col-8 col-sm-8 col-md-3 text-start'>

              {/* <button 
                id="register" 
                class="createacc bg-transparent col-2 p-3 text-decoration-none text-white border border-white border-2 rounded navlink d-flex justify-content-center" 
                href="https://google.com">
                  Create an account
              </button> */}

              <button className='createacc bg-transparent' href='#'>
                Create an account
              </button>
            </div>
          </div>        
        </div>
    );
  }
}

export default Header;
