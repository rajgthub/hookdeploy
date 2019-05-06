import React from "react"
import { Link } from "react-router-dom"
const About = () => {
  return (
    <div>
      <h1>About me</h1>
      <p>Welcome to my website!</p>
      <Link to="/">go back to home</Link>
    </div>
  )
}
export { About as default }
