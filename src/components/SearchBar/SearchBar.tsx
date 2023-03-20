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
      // console.log('searchValue :>> ', searchValue);
    }
  }

  componentWillUnmount() {
    localStorage.setItem('searchValue', this.state.searchValue);
  }

  OnChange = (e: { target: { value: string } }) => {
    this.setState({ searchValue: e.target.value });
    // console.log('object :>> ', e.target.value);
  };

  render() {
    return (
      <input
        className="search"
        type="text"
        value={this.state.searchValue}
        onChange={this.OnChange}
        placeholder="Search..."
      />
    );
  }
}

export default SearchBar;
