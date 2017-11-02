import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Single from '../component/Single';
import Details from '../component/Details';

const App = () => (
  <Router>
    <div>
     <Route exact path="/" component={Single}/>
       <Route path="/details/:id" component={Details}/>
    </div>
  </Router>
)
export default App