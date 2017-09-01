import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
    <div id="mainwrapper">
      <div id="header-wrapper">
        <div id="header" class="container">
          <div id="logo">
            <h1>Portfolio</h1>
            <span>By Jordan Quinn</span>
          </div>
          <div id="menu">
            <ul>
              <li class="current_page_item">
                <NavLink activeClassName="selected" to = "/App">Homepage</NavLink>
              </li>
              <li class="current_page_item">
                <NavLink activeClassName="selected" to = "/About">About</NavLink>
              </li>
              <li class="current_page_item">
                <NavLink activeClassName="selected" to = "/Portfolio">Portfolio</NavLink>
            </li>

            </ul>
          </div>
        </div>
      </div>
      <div id="header-featured"> </div>
    </div>
      );
    }
  }
      export default Header;
