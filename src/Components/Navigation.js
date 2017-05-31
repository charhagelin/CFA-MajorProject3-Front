import React, { Component } from 'react';
import './App.css';


class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPage: 'All'
    }
    this.updatePage = this.updatePage.bind(this);
  };


  updatePage(page) {
    this.setState(() => {
      return {
        selectedPage: page
      }
    });
  }

  render() {
    const pages = ['Home', 'About', 'Shop', 'Contact', 'Log In'];

    return (
      <ul className="pages">

      {pages.map((page) => {
        return (

          <li
          style={page === this.state.selectedPage ? { color: '#d0021b'}: null}
          onClick={this.updatePage.bind(null, page)} key={page}> {page}
          </li>
        )

      })}
      </ul>
    )
  }
}


export default Navigation;
