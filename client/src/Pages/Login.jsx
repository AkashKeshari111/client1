import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const Login = () => {

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const handleLogin=()=>{
      axios.post("http://localhost:8080/users/login",{
        email,
        password,
      }).then((res)=>{
        console.log(res.data.token)
        localStorage.setItem("token",JSON.stringify(res.data.token))
        alert(res.data.msg)
      })
    }


   

  return (
    <div>
  
    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <button onClick={handleLogin}>Login</button>
  
    </div>
  )
}

export default Login