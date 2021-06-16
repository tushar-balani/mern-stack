import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import {Route} from 'react-router-dom'
import Contact from './components/Contact'
import About from './components/About'
import Login from './components/Login'
import Signup from './components/Signup'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

export const App = () => {
  return (
    <div>
      <>
        <Navbar/>
        
        <Route exact path='/'>
          <Home/>
        </Route >
        <Route path = '/about'>
          <About/>
        </Route>
        <Route path = '/contact'>
          <Contact/>
        </Route>
        <Route path = '/login'>
          <Login/>
        </Route>

        <Route path = '/signup'>
          <Signup/>
        </Route>

      </>
    </div>
  )
}


export default App;
