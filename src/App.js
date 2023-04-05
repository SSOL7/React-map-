import React, { Component } from 'react';
import Animals from './Animals.jsx';
import Header from './Header.jsx';
import Search from './Search.jsx';
import { animals } from './animals'; 
import './App.css';

export default class App extends Component {
  state = {
    animals: animals,
    search: ''
  }

  searchEvent = (event) => {
    this.setState({
      search: event.target.value
    });
  }

  removecard = (name) => {
    const updatedarray = this.state.animals.filter(animal => animal.name !== name);
    console.log('removed card', name);
    this.setState({animals: updatedarray});

  }

  likehandler = (name, action) => {
    const updatedarray = this.state.animals.map(animal => {
      if (animal.name === name) {
        if (action === 'add') {
          return {...animal, likes: animal.likes + 1}
        } else {
          return {...animal, likes: animal.likes - 1}
        }
      } else {
        return animal;
      }
    });
    this.setState({animals: updatedarray});
}

  render() {
    return (
      <div className='App-header'>
        <Header />
        <Animals
          data={this.state.animals}
          removecard={this.removecard}
          likehandler={this.likehandler}
          searchEvent={this.searchEvent}
          search={this.state.search}
        />
      </div>
    )
  }
}

