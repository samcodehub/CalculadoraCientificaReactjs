import React, {Component} from 'react';
import './App.css';
import CalculatorContainer from './containers/calculatorContainer/calculatorContainer';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Mi calculadora científica ReactJS
          &nbsp;<i className="fas fa-calculator"></i>
        </h1>
        <CalculatorContainer/>
        
        <footer>Coded by:
          <a
            href="https://www.linkedin.com/in/samcodehub/"
            target="_blank"
            rel="noopener noreferrer">&nbsp; 
            <i className="fab fa-linkedin"></i>
              Sajjad Samiei Naserani</a>
        </footer>
      </div>
    );
  }
}

export default App;
