import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const CourseList = () => {

    const dispatch = useDispatch()
    const data = useSelector(state => state.course)
    console.log(data, "data")



    return (
        <>
            <div className="container">
                <h1>Alemno Institute </h1>
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </>
    )
}

export default CourseList