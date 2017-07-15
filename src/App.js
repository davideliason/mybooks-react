import React, { Component } from 'react';
import logo from './mybooks.png';
import './App.css';

var books = 
  [{title : "2001", author:"him",category: "sci-fi", owned: true},{title:"blue monday",author:"her",category:"mystery", owned: false}];

class FilterableBookTable extends Component {
  constructor(props){
    super(props);
    this.state = {
      filterText: '',
      inLibraryOnly: false
    };
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <SearchBar filterText={this.state.filterText} 
                   inLibraryOnly={this.state.inLibraryOnly}
        />
        <Library data={books} filterText={this.state.filterText} inLibraryOnly={this.state.inLibraryOnly}  />
      </div>
    );
  }
}

class SearchBar extends React.Component{
  render(){
    return(
       <form>
         <input type="text" placeholder="Search"></input>
         <input type="checkbox"></input> In Library only
       </form>
    );
  }
}


class Library extends React.Component{
  render(){
    var rows = [];
    var lastCategory = null;

    this.props.data.forEach((book) => {

      if(book.title.indexOf(this.props.filterText) === -1 || (!book.inLibraryOnly && this.props.inLibraryOnly)){
        return;
      }

      if(book.category !== lastCategory){
        rows.push(<BookCategoryRow category={book.category} key={book.category} />);
      }
      rows.push(<BookRow book={book} key={book.title} />);
      lastCategory = book.category;
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
        <td>Title: {title}</td>
        <td>By: {this.props.book.author}</td>
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
