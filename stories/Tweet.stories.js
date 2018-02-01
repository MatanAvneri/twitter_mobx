import React from 'react'

import { storiesOf } from '@storybook/react'

import Tweet from '../src/Tweet'

storiesOf('Tweet', module)
  .add('default', () => <Tweet user='my user'>My sweet tweet</Tweet>)
