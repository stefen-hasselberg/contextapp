import React, { Component } from 'react';

import { ThemeContext } from '../contexts/ThemeContext';

export default class Navbar extends Component {
  render() {
    console.log(this.context);

    return (
      <ThemeContext.Consumer>
        {context => {
          const { isLightTheme, light, dark } = context;

          const theme = isLightTheme ? light : dark;
          return (
            <nav style={{ background: theme.bg, color: theme.sytnax }}>
              <h1>Context App</h1>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
