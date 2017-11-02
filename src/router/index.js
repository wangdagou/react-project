import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
<<<<<<< HEAD
import Single from '../component/Single';
import Details from '../component/Details';
=======
import Food from '../component/Food';
import Next from '../component/Next';
import Section from '../component/Section';
import Register from '../component/Register';
import Logon from '../component/Logon';
>>>>>>> fe02de053b2e8f160ab7eb42d318045ee5eeb61d

const App = () => (
  <Router>
    <div>
<<<<<<< HEAD
     <Route exact path="/" component={Single}/>
       <Route path="/details/:id" component={Details}/>
=======

      <Route exact path="/" component={Food}/>
      <Route path="/1" component={Next}/>
      <Route path="/2" component={Section}/>
      <Route path="/logon" component={Register}/>
      <Route path="/" component={Logon}/>
>>>>>>> fe02de053b2e8f160ab7eb42d318045ee5eeb61d
    </div>
  </Router>
)
export default App