import React, { Component } from 'react'
import QuickSearches from './QuickSearches'
import Wallpaper from './Wallpaper'

class Home extends Component {
  render() {
    return (
      <div>
        <Wallpaper />
        <QuickSearches />
      </div>
    )
  }
}

export default Home
