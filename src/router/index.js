import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Single from '../component/Single';
import Details from '../component/Details';
import Food from '../component/Food';
import Next from '../component/Next';
import Section from '../component/Section';
import Logon from '../component/Logon';
import Register from '../component/Register';

const App = () => (
  <Router>
    <div>
     <Route exact path="/" component={Single}/>
     <Route path="/details/:id" component={Details}/>
     <Route path="/food" component={Food}/>
     <Route path="/next" component={Next}/>
     <Route path="/section" component={Section}/>
     <Route path="/register" component={Register}/>
     <Route path="/logon" component={Logon}/>

    </div>
  </Router>
)
export default App