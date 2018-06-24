import React from 'react';

import Aux from '../../hoc/Aux';
import classes from './Cockpit.css'

const Cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = classes.Button;
    if (props.showPersons) {
        btnClass = [classes.Button, classes.Red].join(' ');
    }

    if (props.persons.length <= 2) {
      assignedClasses.push( classes.red );
    } if (props.persons.length <= 1) {
      assignedClasses.push( classes.bold );
    }


    return (
        <Aux>
            <h1>Hi, I'm a React App</h1>
            <p className={assignedClasses.join(' ')}>This is working!</p>
            <button
            className={btnClass}
            onClick={props.clicked}>Switch name</button>
            <button onClick={props.login}>Log in </button>
        </Aux>
    );
}

export default Cockpit;