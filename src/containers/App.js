import React, { Component } from 'react';

import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
// import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: "Sam", age: 27 },
      { id: '2', name: "Thai", age: 34 },
      { id: '3', name: "Anna", age: 35 }
    ],
    showPersons: false
  }

  togglePersonsHandler = () => {
    console.log('clicked');
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  deletPersonHandler = (personIndex) => {
    console.log('clicked');
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id ===id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons})
  }

  charHandler = (event) => {
    this.setState({username: event.target.value})
  }

  render() { // method to render to the screen
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons 
          persons={this.state.persons}
          click={this.deletPersonHandler}
          changed={this.nameChangedHandler}/>
    } 

    return (
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}/>
          {persons}
      </div>
    );
  }
}

export default App;

// this refers to the class App