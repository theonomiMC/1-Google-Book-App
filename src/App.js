import React from 'react'
import { Header } from './components/Header'
import Details from './components/Details'
import Favorites from './components/Favorites'
import Home from './components/Home'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import { GlobalProvider } from './context/GlobalState'


const App = () => {

  return (
    <GlobalProvider>
    <Router>
      <Header />

        <Switch>
          <Route exact path="/" component={Home}>
            {/* <Home /> */}
          </Route>
          <Route path="/details" component={Details}>
            {/* <Details /> */}
          </Route>
          <Route path="/favorites" component={Favorites}>
            {/* <Favorites /> */}
          </Route>
        </Switch>
      
    </Router>
    </GlobalProvider>
  )
}

export default App
