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
        <Library data={books} />
      </div>
    );
  }
}

var books = 
  [{title : "2001"},{title:"blue monday"}];

class Library extends React.Component{
  render(){
    return(
        <div>
            Title: {this.props.data[0].title}
            <Book title={this.props.data[1].title} />
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
