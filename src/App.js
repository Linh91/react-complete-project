import React, { Component } from 'react';

import './App.css';
// import Person from './Person/Person';
import Validation from './Validation/Validation';

class App extends Component {
  state = {
    // persons: [
    //   { id: '1', name: "Sam", age: 27 },
    //   { id: '2', name: "Thai", age: 34 },
    //   { id: '3', name: "Anna", age: 35 }
    // ],
    // showPersons: false
    username: ''
  }

  togglePersonsHandler = () => {
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
    // const style = {
    //   backgroundColor: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer'
    // }

    // let persons = null;

    // if (this.state.showPersons) {
    //   persons = (
    //     <div>
    //       {this.state.persons.map((person, index) => {
    //         return <Person
    //                 click={() => this.deletPersonHandler(index)}
    //                 name={person.name}
    //                 age={person.age}
    //                 key={person.id}
    //                 changed={(event) => this.nameChangedHandler(event, person.id)}/>
    //       })}
    //   </div>
    //   )
    // }
    
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        {/* <button 
          style={style}
          onClick={this.togglePersonsHandler}>Switch name</button>
          {persons} */}
          <input 
            type="text"
            onChange={this.charHandler} 
            value={this.state.username}/>
          <p>Number of characters: {this.state.username}</p>
          <Validation length={this.state.username.length} />
      </div>
    );
  }
}

export default App;

// this refers to the class App