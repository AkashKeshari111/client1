import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Yourblogs = () => {
    const [authData,setAuthData]=useState([]);
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("")
    const [role,setRole]=useState("");

    const token=JSON.parse(localStorage.getItem("token"))


    const getYourData=()=>{
        axios.get("http://localhost:8080/blogs/blog",{
            headers:{
                "token":`Bearer ${token}`
            }
        }).then(res=>{
            setAuthData(res.data)
            console.log(res.data)
        })
    }



    const postYourData=(title,description)=>{
       
        fetch("http://localhost:8080/blogs/blog",{
            method:"POST",
            headers:{
                'Content-Type': 'application/json',
                "token":`Bearer ${token}`
            },
            body:JSON.stringify({
                title,
                description
            })
        }).then(res=>res.json()).then((res)=>{
            console.log(res)
            getYourData()
        })
    }


    const deleteYourData=(id)=>{
        axios.delete(`http://localhost:8080/blogs/blog/${id}`,{
            headers:{
                "token":`Bearer ${token}`
            }
        }).then(res=>{
            getYourData()
        })
    }


    const updateYourData=(id)=>{
          fetch(`http://localhost:8080/blogs/blog/${id}`,{
        method:"PATCH",
        headers:{
            'Content-Type': 'application/json',
            "token":`Bearer ${token}`
        },
        body:JSON.stringify({
            title,
            description
        })
    }).then(res=>res.json()).then((res)=>{
        console.log(res)
        getYourData()
    })
    }



    // const updateYourRole=(id)=>{
    //     fetch(`http://localhost:8080/users/user/${id}`,{
    //     method:"PATCH",
    //     headers:{
    //         'Content-Type': 'application/json',
    //         "token":`Bearer ${token}`
    //     },
    //     body:JSON.stringify({
    //      user_role:role
    //     })
    // }).then(res=>res.json()).then((res)=>{
    //     console.log(res)
    //     getYourData()
    // })
    // }

    useEffect(()=>{
        getYourData()
    },[])
  return (
    <div>
        {/* <select onChange={(e)=>setRole(e.target.value)}>
           <option disabled>Role</option>
            <option value="reader">Reader</option>
            <option value="writer">Writer</option>

        </select>
        <button onClick={()=>updateYourRole()}>change my role</button> */}
      
      <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
    <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)}/>
    <button onClick={()=>postYourData(title,description)}>post</button>
        {authData?.map((el)=>{
            return <div key={el._id}>
                    <h2>{el.title}</h2>
                    <h2>{el.description}</h2>
                    <button onClick={()=>deleteYourData(el._id)}>Delete</button>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
    <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)}/>
        <button onClick={()=>updateYourData(el._id)}>update me</button>
                </div>
        })}
    </div>
  )
}

export default Yourblogs