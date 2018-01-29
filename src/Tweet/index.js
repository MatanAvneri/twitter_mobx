import React from 'react'
import { observer } from 'mobx-react'
import './Tweet.css'

const Tweet = observer(({user, children}) => {
  return (
    <div className='tweet'>
      <img className='tweet__image' src='https://pbs.twimg.com/profile_images/906557353549598720/oapgW_Fp_bigger.jpg'/>
      <div className='tweet__content'>
        <div className='tweet__content__user'>{user}</div>
        <div className='tweet__content__text'>{children}</div>
      </div>
    </div>
  )
})

Tweet.defaultProps = {
  user: ''
}

export default Tweet