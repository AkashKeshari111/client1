import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <Link to="/">Home</Link>
    <Link to="/blogs">Blogs</Link>
    <Link to="/yourblogs">Your blog</Link>
    <Link to="/signup">Signup</Link>
    <Link to="/login">Login</Link>
    <Link to="/logout">Logout</Link>



    </div>
  )
}

export default Navbar