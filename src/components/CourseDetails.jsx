import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";

const CourseDetails = () => {
    const [syllabusHide, setSyllabusHide] = useState(false)
    const [requisitesHide, setrequisitesHide] = useState(false)
    const { state } = useLocation();

    const handleSyllabus = () => {

        if (syllabusHide || requisitesHide) {
            setSyllabusHide(false)
        } else {
            setSyllabusHide(true)
        }
    }

    const handleRequisites = () => {
        if (requisitesHide || syllabusHide) {
            setrequisitesHide(false)
        } else {
            setrequisitesHide(true)
        }
    }

    
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3"> <img className="card-img-top" src={state.thumbnail} alt="Card image" /></div>
                    <div className="col-md-6">


                        <div className="card-body">
                            <h2 className="card-title">Course name : {state.name}</h2>
                            <h4 className=''>Instructor's name : {state.instructor}</h4>
                            <p className="card-text">Description : {state.description}</p>
                            <h3>Enrollment status : {state.enrollmentStatus}</h3>
                            <h3>Course duration : {state.duration}</h3>

                            <h3>Schedule : {state.schedule}</h3>

                            <h3>Location:{state.location}</h3>

                            <button className='btn btn-primary m-5' onClick={handleRequisites}>Pre-requisites</button>
                            <button className='btn btn-primary' onClick={handleSyllabus}>Syllabus</button>


                        </div>
                    </div>
                    {
                        syllabusHide ? (state.syllabus.map((item) => {
                            return (
                                <><p><span className='fw-bold '>Duration</span> : {item.week}<br />
                                    <span className='fw-bold'>Topic</span> :{item.topic}<br />
                                    <span className='fw-bold'>Content</span> :{item.content}</p></>
                            )
                        })) : null
                    }

                    {
                        requisitesHide ? (state.prerequisites.map((item) => {
                            return (
                                <><p><span className='fw-bold '>{item}</span></p></>
                            )
                        })) : null
                    }
                </div>
            </div>
        </>
    )
}

export default CourseDetails