import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Sam", age: 27 },
      { name: "Thai", age: 34 },
      { name: "Anna", age: 35 }
    ],
    showPersons: false
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  deletPersonHandler = (personIndex) => {
    console.log('clicked');
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: "Max", age: 27 },
        { name: event.target.value, age: 34 },
        { name: "Tony", age: 42 }
      ]
    })
  }

  render() { // method to render to the screen
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
                    click={() => this.deletPersonHandler(index)}
                    name={person.name}
                    age={person.age} />
          })}
      </div>
      )
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Switch name</button>
          {persons}
      </div>
    );
  }
}

export default App;

// this refers to the class App