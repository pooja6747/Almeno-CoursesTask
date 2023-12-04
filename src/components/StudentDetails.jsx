import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const StudentDetails = () => {
    const navigate = useNavigate();

    const data = useSelector(state => state.course.data)


    const buttonHandle = (value) => {
        navigate(`/studentDashboard`,{ state: value})
    }
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    {
                        data.map((value) => {
                            return (
                                <div className="col-md-4">
                                    <div className="card mt-3">
                                        <img className="card-img-top" src={value.thumbnail} alt="Card image" />
                                        <div className="card-body">
                                            <h4 className="card-title">{value.name}</h4>
                                            <p className="card-text">{value.description}</p>
                                            <button href="#" className="btn btn-success text-dark fw-bold" onClick={() => buttonHandle(value)}>Show student details</button>
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

export default StudentDetails