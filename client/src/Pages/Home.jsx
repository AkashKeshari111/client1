import React from 'react'
import axios from "axios"
import { useEffect } from 'react';
import { useState } from 'react';

const Home = () => {
  
    const [data,setData]=useState();

    const getData=()=>{
        axios.get("https://b1-bpbv.onrender.com/").then((res) => {
            setData(res.data)
            // console.log(res.data);
          });
    }

    useEffect(()=>{
        getData()
    },[])
   
  

  return (
    <div>{data}</div>
  )
}

export default Home