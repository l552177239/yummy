import React, { Component } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Sidebar from './ui/shared/Sidebar/Sidebar'
import Home from './ui/pages/Home/Home'
import Signup from './ui/pages/Signup/Signup'

class App extends Component{
  render(){
    return(
      <div className="App">
        <Router>
          <div>
          <Sidebar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/signup' component={Signup} />
          </Switch>
        </div>
        </Router>
      </div>
    )
  }
}

export default App
