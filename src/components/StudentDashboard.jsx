import React from 'react'
import { useLocation } from "react-router-dom";

const StudentDashboard = () => {
    const { state } = useLocation();
    const value = state;
    console.log("state", value.students)
    return (
        <>
            <div className="row mt-5 text-center m-2 p-2">
                <h4>Enrolled student for {value.name} course</h4>
                <h4>Instuctor name is {value.instructor}</h4>
                <h4>Status for course is {value.enrollmentStatus}</h4>
               

                {
                    value.students.map((item) => {
                        return (
                            <div className="col-md-4">
                                <div className="card mt-4">
                                    <h1>{item.name}</h1>
                                    <h3>{item.email}</h3>
                                    
                                </div>


                            </div>
                        )
                    })
                }
            </div>


        </>
    )
}

export default StudentDashboard