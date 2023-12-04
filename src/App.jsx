import CourseList from './components/CourseList'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import CourseDetails from './components/CourseDetails'
import { Link } from "react-router-dom";
import StudentDetails from './components/StudentDetails';
import StudentDashboard from './components/StudentDashboard';

function App() {


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="#">Alemno Institute</a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Course Details</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/studentDetails">Student Details</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<CourseList />} />
        <Route path='/details/:id' element={<CourseDetails />} />
        <Route path='studentDetails' element={<StudentDetails />} />
        <Route path='studentDashboard' element={<StudentDashboard />} />
      </Routes>

    </>
  )
}

export default App
