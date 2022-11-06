import React from 'react'
import axios from "axios"
import { useEffect } from 'react';
import { useState } from 'react';

const Home = () => {
  
    const [data,setData]=useState();

    const getData=()=>{
        axios.get("http://localhost:8080/").then((res) => {
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