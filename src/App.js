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

  swithNameHandler = (newName) => {
    console.log('clicked');
    this.setState( {
      persons: [
        { name: newName, age: 27 },
        { name: "Thai", age: 34 },
        { name: "Tony", age: 42 }
      ]
    })
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
        <Person 
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.swithNameHandler.bind(this, 'Seth')}
          changed={this.nameChangedHandler}>My hobbies </Person>
        <Person 
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}/>
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