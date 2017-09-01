import React from 'react';
import ReactDOM from 'react-dom';
import './styles/default.css';
import './styles/fonts.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './components/About';
import Portfolio from './components/Portfolio';
import BaseLayout from './components/BaseLayout';
import turnOn from './components/turnOn';

  ReactDOM.render(
    <Router>
        <BaseLayout>
         <Switch>
           <Route path="/App" component={App} />
           <Route path="/About" component={About} />
           <Route path="/Portfolio" component={Portfolio}/>
           <Route path = "/turnOn" component ={turnOn}/>
         </Switch>
        </BaseLayout>
     </Router>


  ,document.getElementById('root'));
registerServiceWorker();
