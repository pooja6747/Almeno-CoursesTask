import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCourse } from '../redux-store/Slices/CourseSlice'
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
 
const CourseList = () => {
    const { state } = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const data = useSelector(state => state.course.data)
    console.log(data, "data")
    useEffect(() => {
        dispatch(fetchCourse())
    }, [])

    const buttonHandle = ({value}) => {
        console.log("id", value)
        navigate(`/details/${value.id}`,{ state: value })
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row mt-5 d-flex mb-3">

                    {
                        data.map((value) => {
                            return (
                                <div className="col-md-4 ">
                                    <div className="card">
                                        <img className="card-img-top" src={value.thumbnail} alt="Card image" />
                                        <div className="card-body">
                                            <h4 className="card-title">{value.name}</h4>
                                            <p className="card-text">{value.description}</p>
                                            <button href="#" className="btn btn-primary" onClick={() => buttonHandle({value})}>View Details</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default CourseList