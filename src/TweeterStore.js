import {observable, computed} from 'mobx'

class TweetsStore {
  @observable tweets = []

  addTweet (tweet) {
    this.tweets.push({
      date: (new Date()).getTime(),
      ...tweet
    })
  }

  @computed get allTweets () {
    return this.tweets.sort((a, b) => b.date - a.date)
  }
}

const store = new TweetsStore()

export default store
