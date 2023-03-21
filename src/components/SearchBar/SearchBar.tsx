import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  state = {
    searchValue: localStorage.getItem('searchValue') ?? '',
  };

  componentDidMount() {
    const searchValue = localStorage.getItem('searchValue');

    if (searchValue) {
      this.setState({ searchValue });
    }
  }

  componentWillUnmount() {
    localStorage.setItem('searchValue', this.state.searchValue);
  }

  onChange = (e: { target: { value: string } }) => {
    this.setState({ searchValue: e.target.value });
  };

  render() {
    return (
      <>
        <input
          className="search"
          type="text"
          value={this.state.searchValue}
          onChange={this.onChange}
          placeholder="Search..."
        />
        <h3> {this.state.searchValue}</h3>
      </>
    );
  }
}

export default SearchBar;
