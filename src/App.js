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
        <Library data={book1} />
      </div>
    );
  }
}

var book1 = 
  {title : "2001"};

class Library extends React.Component{
  render(){
    return(
        <div>
            Title: {this.props.data.title}
            <Book title={this.props.data.title} />
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
