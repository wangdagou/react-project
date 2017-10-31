import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Food from '../component/Food';
import Next from '../component/Next';
const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Food}/>
      <Route path="/1" component={Next}/>

    </div>
  </Router>
)
export default App