import React from 'react'
import Details from './components/Details'
import Favorites from './components/Favorites'
import Home from './components/Home'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import { Header } from './components/Header'


const App = () => {

  return (
    <Router>
      <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
        </Switch>
      
    </Router>
  )
}

export default App
