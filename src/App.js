import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let person = {
    name: 'Yoda',
    designation: 'Jedi Master ',
};

function trainJedi(jediWarrion) {
    if (jediWarrion.name === 'Yoda') {
        console.log('No need! already trained');
    }
    console.log(`Training ${jediWarrion.name} complete`);
}

trainJedi(person);
trainJedi({
    name: 'Adeel',
    designation: 'padawan',
});

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
