import React, { Component } from 'react';
import '../Styles/Home.css';

class Wallpaper extends Component {
  render() {
    return (
      <div className='container-fluid back-img'>
        <div className='row pt-4 nx-auto text-center logo-row'>
          <div className='col-12 pt-5'>
            <p className='px-4 px-md-4 py-md-2 logo'>c!</p>
          </div>
        </div>
        <div className='row pt-4 mx-auto text-center restaurant-title-row'>
          <div className='col-12'>
            <h1 className='restaurant-title'>
              Find the best restaurants, cafes and bars
            </h1>
          </div>
        </div>
        <div className='row pt-4 mx-auto text-center search-bar-row'>
          <div className='col-12 col-sm-12 col-md-1 col-lg-2 col-xl-2' />
          <div className='col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 mb-4'>
            <div className='locationSelector'>
              <select className='locationDropdown px-2 py-3'>
                <option value={0} selected disabled>Please type a location</option>
                <option value={1}>Sarjapure, Bangalore</option>
                <option value={1}>HSR Layout, Bangalore</option>
                <option value={1}>Kornangala, Bangalore</option>
                <option value={1}>Bannorghata road, Bangalore</option>
              </select>
            </div>
          </div>
          <div className='col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5'>
            <div className='restaurantSelector'>
              <input className='restaurantsinput ps-5 py-3' type='text' placeholder='Search for restaurants' />
              <div className='search-icon'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </div>
            </div>
          </div>
          <div className='col-12 col-sm-12 col-md-1 col-lg-2 col-xl-2' />
        </div>
      </div>
    )
  }
}

export default Wallpaper
