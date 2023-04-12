import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Animals from './Animals.jsx';
import Birds from './Birds.jsx';
import About from './About.jsx';
import Home from './Home.jsx';
import { animals, birds } from './animals'; 
import './App.css';

export default class App extends Component {
  state = {
    animals: animals,
    birds: birds,
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
          // save number of like to local storage
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
          <Link to='/'>Animals {this.state.animals.length} </Link>
          <Link to='/birds'>Birds {this.state.birds.length} </Link>
          <Link to='/about'>About</Link>
        </nav>

      <Routes>
        <Route path='/' element={<Animals
          data={this.state.animals}
          removecard={this.removecard}
          likehandler={this.likehandler}
          searchEvent={this.searchEvent}
          search={this.state.search}
          />} />
          
        <Route path='birds' element={<Birds
          data={this.state.animals}
          removecard={this.removecard}
          likehandler={this.likehandler}
          searchEvent={this.searchEvent}
        />} />
        <Route path='about' element={<About />} />
        </Routes>

      </div>
    </ BrowserRouter>
    )
  }
}

