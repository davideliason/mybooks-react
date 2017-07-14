import React, { Component } from 'react';
import logo from './mybooks.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Library />
      </div>
    );
  }
}

class Library extends React.Component{
  render(){
    return(
        <div>
            <Book title="2001" />
            <Book title="2222" />
        </div>
      )
  }
}

class Book extends React.Component{
  render(){
    return(
        <h3>Book {this.props.title}</h3>
      )
  }
}

export default App;
