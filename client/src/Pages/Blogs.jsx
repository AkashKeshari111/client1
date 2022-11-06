import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Blogs = () => {
    const [userData,setUserData]=useState([])
    const token=JSON.parse(localStorage.getItem("token"))
    console.log(token)

    const getUserData=()=>{
         axios.get("http://localhost:8080/blogs/all_blogs",{
            headers:{
                "token":`Bearer ${token}`
            }
         }).then((res)=>{
            setUserData(res.data)
            console.log(res.data)
         })
    }

    useEffect(()=>{
        getUserData()
    })
  return (
    <div>
        {userData?.map((el)=>{
            return <div key={el._id}>
                <h2>{el.title}</h2>
                <h2>{el.description}</h2>
                
            </div>
        })}
    </div>
  )
}

export default Blogs