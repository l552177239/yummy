import React from 'react'
import axios from 'axios'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import store from './redux/store'
import Settings from './settings'
import { Provider } from 'react-redux'

import Home from './ui/pages/Home/Home'
import Signup from './ui/pages/Signup/Signup'
import Login from './ui/pages/Login/Login'
import Sidebar from './ui/shared/Sidebar/Sidebar'
import AlertBox from './ui/shared/AlertBox/AlertBox'
import Dashboard from './ui/pages/Dashboard/Dashboard'

class App extends React.Component{
  componentWillMount(){
    let userId = localStorage.getItem('userId')
    if(userId){
      axios.get(`${Settings.host}/user/${userId}`)
      .then(res => {
        store.dispatch({ type:'SIGN_IN', username: res.data.user.username })
      })
    }
    // LOAD_DISHES
    axios.get(`${Settings.host}/dishes`)
      .then(res => {
        let { dishes } = res.data
        store.dispatch({type:'LOAD_DISHES',dishes})
      })
      .catch(err => store.dispatch({ type:'SHOW_ALERT', msg:'请求失败' }))
    }
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
