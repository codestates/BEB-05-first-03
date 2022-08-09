import React, { Component } from 'react';

class nav extends Component {
  render() {
    return (
      <div id='nav-body'>
        <span id='logo'>
          <img id='logo' src='../logo.png' alt='logo' />
          <Link to='/'></Link>
        </span>
        <div id='menu'>
          <Link to='/create'>Create</Link>
          <span>Explore</span>
          <Link to='/astronaut'>
            <img id='astronaut' src='' />
          </Link>
          <Link to='/wallet'>
            <img id='wallet'></img>
          </Link>
        </div>
      </div>
    );
  }
}

export default nav;