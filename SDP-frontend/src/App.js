import React, { useState } from 'react'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import About from './component/About'
import Application from './component/Application'
import Home from './component/Home'
import Login from './component/Login'
import LoginInterface from './component/LoginInterface'
import Navbar from './component/Navbar'
import Plan from './component/Plan'
import Register from './component/Register'
function App() {
    const [ user, setLoginUser] = useState({})
    return (
       <Router>
           <Navbar/>
           <Switch>
               <Route path='/' exact component={Home}/>
               <Route path='/about' exact component={About}/>
               <Route path='/plan' exact component={Plan}/>
               <Route path='/logininterface' exact component={LoginInterface}/>
               <Route exact path='/logininterface'>
            {
              user && user._id ? <LoginInterface setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser}/>
          </Route>
          <Route path="/register">
            <Register />
            </Route>
               <Route path = '/application' exact component={Application}/>
         </Switch>
       </Router>
    )
}

export default App
