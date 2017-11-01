import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Food from '../component/Food';
import Next from '../component/Next';
import Section from '../component/Section';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Food}/>
      <Route path="/1" component={Next}/>
      <Route path="/2" component={Section}/>

    </div>
  </Router>
)
export default App