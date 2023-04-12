import React, { Component } from 'react'
import { birds } from './animals'
import Card from './Card'
import Search from './Search'

export default class Birds extends Component {
    state = {
        birds: birds,
    }

  render() {
    return (
      <div>
        <div>
          <h1>S</h1>
        </div>
        {this.state.birds.map((item) =>
        <Card
        name={item.name}
        likes={item.likes}
        key={item.name}
        removecard={() => this.props.removecard(item.name)}
        addlike={() => this.props.likehandler(item.name, 'add')}
        removelike={() => this.props.likehandler(item.name, 'remove')}
        />)}

      </div>
    )
  }
}
