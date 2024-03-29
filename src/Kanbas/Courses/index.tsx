import { Link, Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import { Breadcrumb } from "react-bootstrap";
import CourseStatusComponent from "./Status";
import { useState, useEffect } from "react";
import axios from "axios";


function Courses({ courses } : any) {
    const { courseId } = useParams();
    const COURSES_API = "http://localhost:4000/api/courses";
    const [course, setCourse] = useState<any>({ _id: "" });
    const findCourseById = async (courseId?: string) => {
      const response = await axios.get(
        `${COURSES_API}/${courseId}`
      );
      setCourse(response.data);
    };
    useEffect(() => {
      findCourseById(courseId);
    }, [courseId]);    
    const { pathname } = useLocation();
    const pathToCourse = (courseId ? pathname.split(courseId)[0] : '');
    const coursePath = (courseId ? pathname.split(courseId)[1] : '').split('/');
    const breadCrumbItems = coursePath.map((path, index) => {
        const link = pathToCourse + courseId + coursePath.slice(0, index + 1).join('/');
        if (path.length === 0) return null;
        return (
            <Breadcrumb.Item key={index} active={path === coursePath[coursePath.length - 1]} linkProps={{ to: link}} linkAs={Link}>{path}</Breadcrumb.Item>
        );
    });
    return (
        <div className="courses-container"> 
            <h2>
            <div style={{ display: 'flex', alignItems: 'left', verticalAlign: 'center', gap: '10px' }}>
                <HiMiniBars3 /><Breadcrumb>
                <Breadcrumb.Item linkProps={{ to: pathToCourse + courseId + '/Home'}} linkAs={Link}>{course?.name}</Breadcrumb.Item>
                {breadCrumbItems}
                </Breadcrumb>
            </div></h2>
        <hr />
        <div style={{ display: 'flex' }}>
            <CourseNavigation />
            <div
            style={{ flexGrow: 1, top: "80px" }} >
            <Routes>
                <Route path="/" element={<Navigate to="Home" />} />
                <Route path="Home" element={<Home />} />
                <Route path="Modules" element={<Modules />} />
                <Route path="Piazza" element={<h1>Piazza</h1>} />
                <Route path="Assignments" element={<Assignments />} />
                <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
                <Route path="Grades" element={<h1>Grades</h1>} />
            </Routes>
            </div>
            <div style={{ width: '250px'}} className="d-none d-lg-block">
                <CourseStatusComponent />
            </div>
        </div>
        </div>
    );
}

export default Courses;
