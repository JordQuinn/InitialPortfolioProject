import React, {Component} from 'react';
import './styles/default.css';

import DisplayLayout from './components/DisplayLayout.js';

class App extends Component {
  render() {
    return (
      <div className="App">

          <DisplayLayout/>

      </div>
    );
  }
}

export default App;
