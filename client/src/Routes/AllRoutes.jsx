import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Blogs from '../Pages/Blogs'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Logout from '../Pages/Logout'
import Signup from '../Pages/Signup'
import Yourblogs from '../Pages/Yourblogs'

const AllRoutes = () => {
  return (
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/blogs" element={<Blogs/>}/>
    <Route path="/yourblogs" element={<Yourblogs/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/logout" element={<Logout/>}/>




</Routes>
  )
}

export default AllRoutes