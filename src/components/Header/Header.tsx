import React from 'react';
import './Header.css';

import Navigation from '../Navigation/Navigation';

class Header extends React.Component {
  state = {
    currentRoute: '',
  };

  componentDidMount() {
    const { pathname } = window.location;
    const currentRoute = pathname.slice(1);
    this.setState({ currentRoute });
  }

  render() {
    return (
      <header className="header">
        <h3 className="header-title"> {this.state.currentRoute}</h3>
        <Navigation />
      </header>
    );
  }
}

export default Header;
