import React from 'react'

import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import store from './redux/store'

import { Provider } from 'react-redux'

import Home from './ui/pages/Home/Home'
import Signup from './ui/pages/Signup/Signup'
import Login from './ui/pages/Login/Login'
import Sidebar from './ui/shared/Sidebar/Sidebar'
import AlertBox from './ui/shared/AlertBox/AlertBox'
import Dashboard from './ui/pages/Dashboard/Dashboard'

class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <div className="App">
          <Router>
            <div>
              <AlertBox />
              <Route render={({ location }) => {
                    return location.pathname !== '/' ?
                    (<Sidebar />) : null
                  }} />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/login' component={Login} />
              <Route path='/signup' component={Signup} />
              <Route path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
          </Router>
        </div>
      </Provider>
    )
  }
}

export default App
