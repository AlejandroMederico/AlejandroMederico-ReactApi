import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import './App.css'
import Detalles from './Paginas/Detalles'
import Home from './Paginas/home'
import {Route, Switch} from 'react-router-dom'
import NotFound from './Paginas/NotFound'

export default class App extends Component {

  render() {
    // const url = new URL(document.location)
    // const Page =url.searchParams.has('id')
    //       ? <Detalles id={url.searchParams.get('id')}/>
    //       : <Home/>
    
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/detalles/:id' component={Detalles}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    )
  }
}

