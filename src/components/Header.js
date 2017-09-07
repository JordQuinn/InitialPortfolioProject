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
                <NavLink activeClassName="selected" to = "/" activeStyle = {{fontWeight: 'bold', color: 'black' }}>Homepage</NavLink>
              </li>
              <li class="current_page_item">
                <NavLink activeClassName="selected" to =  "/About" activeStyle = {{fontWeight: 'bold', color: 'red' }}>About</NavLink>
              </li>
              <li class="current_page_item">
                <NavLink activeClassName="selected" to = "/Portfolio" activeStyle = {{fontWeight: 'bold', color: 'red' }}>Portfolio</NavLink>
            </li>
            <li class="current_page_item">
              <NavLink activeClassName="selected" to = "/References" activeStyle = {{fontWeight: 'bold', color: 'red' }}>References</NavLink>
          </li>
          <li class="current_page_item">
            <NavLink activeClassName="selected" to = "/Contact" activeStyle = {{fontWeight: 'bold', color: 'red' }}>Contact</NavLink>
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
