import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const CourseList = () => {
    const [data,setData]=useState([]);

    useEffect(()=>{
        const url=`http://localhost:4000/api/course`;
        fetch(url)
        .then((res)=>res.json())
        .then((response)=>{
            setData(response);
        })
        console.log("data",data)
    },[])

    return (
      <>
      <h1>Check list</h1>
      </>
    )
}

export default CourseList