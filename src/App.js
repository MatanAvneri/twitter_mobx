import React, { Component } from 'react'
import './App.css'
import Feed from './Feed'
import store from './TweeterStore'

class App extends Component {
  render () {
    return (
      <div className='app-wrapper'>
        <Feed store={store}/>
      </div>
    )
  }
}

export default App
