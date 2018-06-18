import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Sam", age: 27 },
      { name: "Thai", age: 34 },
      { name: "Anna", age: 35 }
    ]
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
  render() { // method to render to the screen
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={() => this.swithNameHandler('Sammy!!')}>Switch name</button>
        <Person 
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.swithNameHandler.bind(this, 'Seth')}>My hobbies </Person>
        <Person 
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;

// this refers to the class App