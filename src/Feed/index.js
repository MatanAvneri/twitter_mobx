import React, { Component } from 'react'
import {observer} from 'mobx-react'
import Tweet from '../Tweet'
import './Feed.css'

@observer
class Feed extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: '',
      text: ''
    }
  }

  addTweet = () => {
    const {user, text} = this.state

    this.props.store.addTweet({user, text})

    this.setState({
      user: '',
      text: ''
    })
  }

  changeUser = (e) => {
    this.setState({
      user: e.target.value
    })
  }

  changeText = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  render () {
    const {user, text} = this.state

    const feed = this.props.store.allTweets
    return (
      <div className='feed'>
        {
          feed.map(({user, text}) => {
            return <Tweet
              key={`${user}_${text}`}
              user={user}>
              {text}
            </Tweet>
          })
        }
        <div className='new-tweet-row'>
          <textarea placeholder='user' value={user} onChange={this.changeUser} className='userTweet'/>
          <textarea placeholder='whats happening' value={text} onChange={this.changeText} className='textTweet'/>
          <button className='new-tweet-row__button' onClick={this.addTweet}>Tweet</button>
        </div>
      </div>
    )
  }
}

export default Feed
