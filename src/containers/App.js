import React, { Component } from 'react';

import Aux from '../hoc/Aux';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import WithClass from '../hoc/WithClass';
import wrapClass from '../hoc/WrapClass';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: "Sam", age: 27 },
      { id: '2', name: "Thai", age: 34 },
      { id: '3', name: "Anna", age: 35 }
    ],
    showPersons: false,
    toggleClickedCounter: 0
  }

  togglePersonsHandler = () => {
    console.log('clicked');
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow,
      toggleClicked: this.state.toggleClickedCounter + 1
    });
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
      <Aux>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}/>
          {persons}
      </Aux>
    );
  }
}

export default WithClass(App, classes.App);

// this refers to the class App