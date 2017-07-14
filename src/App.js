import React, { Component } from 'react';
import logo from './mybooks.png';
import './App.css';

class FilterableBookTable extends Component {
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
  [{title : "2001", author:"him",category: "sci-fi", owned: true},{title:"blue monday",author:"her",category:"mystery", owned: false}];

class Library extends React.Component{
  render(){
    return(
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
            <BookRow book={this.props.data[1]} />
        </tbody>
      </table>
      );
  }
}

class BookRow extends React.Component{
  render(){
    var title = this.props.book.owned ? this.props.book.title : <span style={{color:'red'}}>{this.props.book.title}</span>;

    return(
        <li>Title: {title} By: {this.props.book.author}</li>
      )
  }
}

class BookCategoryRow extends React.Component{
  render(){
    return(
      <tr>
        <th colSpan="2">{this.props.category}</th>
      </tr>
    )
  }
}

export default FilterableBookTable;
