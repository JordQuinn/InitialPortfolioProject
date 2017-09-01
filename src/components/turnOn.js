import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class TurnOn extends Component {
  render() {
    return (
      <div id="didit">
        <div id ="tinycontainer">
          <h1>  Why did you do that???? </h1>
          <h1> Press this button </h1>
          <div id= "buttonpress">
          <Link to = './App'>
          <button id = "pressit">I dare you!!</button></Link></div>
        </div>
      </div>
    );
  }
}

export default TurnOn
