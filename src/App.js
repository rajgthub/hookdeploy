import React, { Component } from "react"
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"
import "./App.css"
import Home from "./components/Home"
import About from "./components/About"
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
