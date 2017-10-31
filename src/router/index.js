import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Single from '../component/Single';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Single}/>
    </div>
  </Router>
)
export default App