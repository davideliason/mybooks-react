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
    var rows = [];
    this.props.data.forEach(function(book){
      rows.push(<BookRow book={book} key={book.title} />);
    });
    return(
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
      );
  }
}

class BookRow extends React.Component{
  render(){
    var title = this.props.book.owned ? this.props.book.title : <span style={{color:'red'}}>{this.props.book.title}</span>;

    return(
      <tr>
        <td>Title: {title} By: {this.props.book.author} </td>
      </tr>
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
