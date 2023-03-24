import React, { Component } from 'react';
import '../Styles/Home.css';

class QuickSearches extends Component {
  render() {
    return (
      <div className="container mb-5">
        <div className="quick-searches mt-5 ms-4">Quick searches</div>
        <div className="qs-subtitle mt-3 ms-4">
          Discover restaurants by type of meal
        </div>
        <div className="row mt-3">
        <div className="card col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 my-3 mx-auto text-center">
            <div className="row">
              <div className='col-6 px-0 mx-0'>
                <img src='https://cdn.demos.pixelgrade.com/wp-content/uploads/sites/104/2014/05/menu-thumb-4.jpg' className="card-img" />
              </div>
              <div className="col-6 px-3 py-3">
                <div className="card-title">Breakfast</div>
                <div className="card-description">Start your day with exclusive Breakfast options</div>
              </div>
            </div>
          </div>
          <div className="card col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 my-3 mx-auto text-center">
            <div className="row">
              <div className="col-6 px-0 mx-0">
              <img src='https://cdn.demos.pixelgrade.com/wp-content/uploads/sites/104/2014/05/menu-thumb-1.jpg' className="card-img" />
              </div>
              <div className="col-6 px-3 py-3">
                <div className="card-title">Lunch</div>
                <div className="card-description">Start your day with exclusive Lunch options</div>
              </div>
            </div>
          </div>
        <div className="card col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 my-3 mx-auto text-center">
          <div className="row">
            <div className="col-6 px-0 mx-0">
              <img src='https://images.pexels.com/photos/2734288/pexels-photo-2734288.jpeg?auto=compress&cs=tinysrgb&w=600' className="card-img" />
            </div>
            <div className="col-6 px-3 py-3">
              <div className="card-title">Snacks</div>
              <div className="card-description">Start your day with exclusive Snacks options</div>
            </div>
          </div>
        </div>
        <div className="card col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 my-3 mx-auto text-center">
          <div className="row">
            <div className="col-6 px-0 mx-0">
              <img src='https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600' className="card-img" />
            </div>
            <div className="col-6 px-3 py-3">
              <div className="card-title">Dinner</div>
              <div className="card-description">Start your day with exclusive Dinner options</div>
            </div>
          </div>
        </div>
        <div className="card col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 my-3 mx-auto text-center">
          <div className="row">
            <div className="col-6 px-0 mx-0">
              <img src='https://images.pexels.com/photos/616836/pexels-photo-616836.jpeg?auto=compress&cs=tinysrgb&w=600' className="card-img"/>
            </div>
            <div className="col-6 px-3 py-3">
              <div className="card-title">Drink</div>
              <div className="card-description">Start your day with exclusive Drink options</div>
            </div>
          </div>
        </div>
        <div className="card col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 my-3 mx-auto text-center">
          <div className="row">
            <div className="col-6 px-0 mx-0">
              <img src='https://images.pexels.com/photos/9009579/pexels-photo-9009579.jpeg?auto=compress&cs=tinysrgb&w=600' className="card-img"/>
            </div>
            <div className="col-6 px-3 py-3">
              <div className="card-title">Night Life</div>
              <div className="card-description">Start your day with exclusive Night Life options</div>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default QuickSearches
