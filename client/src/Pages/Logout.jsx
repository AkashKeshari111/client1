import React from 'react'

const Logout = () => {
    const Logout=()=>{
        localStorage.setItem("token","")
    }
  return (
    <button onClick={Logout}>Logout</button>
  )
}

export default Logout