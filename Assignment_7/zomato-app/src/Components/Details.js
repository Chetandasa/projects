import React, { Component } from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import '../Styles/Details.css';

class Details extends Component {
  render() {
    return (
      <div className='md-5'>
        <div className='filter-header'>
          <div className='filter-logo-div mx-5'>
            <span className='filter-logo'>c!</span>
          </div>
        </div>
        <div className='pt-5 px-5'>
          <img
            src='https://images.pexels.com/photos/1305063/pexels-photo-1305063.jpeg?auto=compress&cs=tinysrgb&w=600'
            height='550px'
            />
          <button class='btn btn-dark p-2'>Click to see Image Gallery</button>
        </div>
        <div className='px-5 pt-5'>
          <div class='h1 mt-3'>
            The Big Chill Cakery
            <br />
            <button className='btn btn-danger btn'>Place Online Order</button>
          </div>
          <div className='p-4'></div>
          <div class='tabs'>
            <Tabs>
              <TabList className='TabList'>
                <Tab className='p-2 pe-4'>Overview</Tab>
                <Tab className='p-2'>Content</Tab>
              </TabList>
              <hr className='tabline' />
              <TabPanel className='Details'>
                <h2 class='about'>About the Place</h2>
                <h4 class='head'>Cuisine</h4>
                <h6 class='value'>Fast Food</h6>
                <h4 class='head'>Average Cost</h4>
                <h6 class='value'>&#8377; 700</h6>
              </TabPanel>
              <TabPanel>
              <h4 class='head'>Phone Number</h4>
                <h6 class='value'>+91-9928142814</h6>
                <h4 class='head'>The Big Chill Cakery</h4>
                <h6 class='value'>Shalimar Bagh, Delhi</h6>
              </TabPanel>
            </Tabs>
          </div>
        </div>

        <div className='container chetan-details'>
          <hr className='tabline' />
          <h2>Website Created By <a href='#'>Chetan Dasa</a></h2>
          <br></br>
          <br></br>
        </div>

      </div>
    )
  }
}

export default Details
