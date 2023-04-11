import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Animals from './Animals.jsx';
import Birds from './Birds.jsx';
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

  likehandler = (name, click) => {
    const updatedarray = this.state.animals.map(animal => {
      if (animal.name === name) {
        if (click === 'add') {
          return {...animal, likes: animal.likes + 1}
        } else {
          return {...animal, likes: animal.likes - 1}
        }
      } else {
        return animal;
      }
    });
    this.setState({
      animals: updatedarray
    });
}

  render() {
    return (
    <BrowserRouter>
      <div className='App-header'>
        <nav>
          <Link to='/'>Animals</Link>
          <Link to='/birds'>Birds</Link>
        </nav>

      <Routes>
        <Route path='/' element={<Animals
          data={this.state.animals}
          removecard={this.removecard}
          likehandler={this.likehandler}
          searchEvent={this.searchEvent}
          search={this.state.search}
          />} />
        <Route path='birds' element={<Birds />} />
        </Routes>

      </div>
    </ BrowserRouter>
    )
  }
}

