import {observable, computed, extendObservable} from 'mobx'

class TweetsStore {
  tweets = observable([])

  constructor () {
    extendObservable(this, {
      allTweets: computed(function() {
        return this.tweets.sort((a, b) => b.date - a.date)
      })
    })

  }

  addTweet (tweet) {
    this.tweets.push({
      date: (new Date()).getTime(),
      ...tweet
    })
  }
}

const store = new TweetsStore()

export default store
