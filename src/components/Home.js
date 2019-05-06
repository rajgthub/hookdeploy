import React from "react"
import { Link } from "react-router-dom"
const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to RajDevDep!</h1>
        <Link to="about">About</Link>
      </header>
    </div>
  )
}
export { Home as default }
