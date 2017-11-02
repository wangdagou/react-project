import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Food from '../component/Food';
import Next from '../component/Next';
import Section from '../component/Section';
import Register from '../component/Register';
import Logon from '../component/Logon';

const App = () => (
  <Router>
    <div>

      <Route exact path="/" component={Food}/>
      <Route path="/1" component={Next}/>
      <Route path="/2" component={Section}/>
      <Route path="/logon" component={Register}/>
      <Route path="/" component={Logon}/>
    </div>
  </Router>
)
export default App