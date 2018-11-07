import React, { Component } from 'react'
import './App.css'
import { base } from './settings'

class App extends Component {
  
  state = {
    polls: [],
  }
  
  async componentWillMount() {
    await base.bindCollection('polls', {
      context: this,
      state: 'polls',
      withRefs: true,
      withIds: true,
    })
  }
  
  
  render() {
    return (
      <ul>
        {this.state.polls.map(poll => (
          <li key={poll.id}>{poll.name}</li>
        ))}
      </ul>
    )
  }
}

export default App
