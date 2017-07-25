import React, { Component } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Home from './ui/pages/Home/Home'
import Signup from './ui/pages/Signup/Signup'
import Sidebar from './ui/shared/Sidebar/Sidebar'

class App extends Component{
  render(){
    return(
      <div className="App">
        <Router>
          <div>
            <Route render={({ location }) => {
                  return location.pathname !== '/' ?
                  (<Sidebar />) : null
                }} />
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
