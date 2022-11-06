import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const Signup = () => {
    const [text,setText]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [role,setRole]=useState("")



    const handleSignup=()=>{
      axios.post("http://localhost:8080/users/signup",{
        name:text,
        email,
        password,
        user_role:role
      }).then((res)=>{
        console.log(res.data)
             alert("signup successfull")
      })
    }

  return (
    <div>
    <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <select onChange={(e)=>setRole(e.target.value)} >
    <option disabled>Role</option>

        <option value={"reader"}>Reader</option>
        <option value={"writer"}>Writer</option>
    </select>
    <button onClick={handleSignup}>Signup</button>
    </div>
  )
}

export default Signup