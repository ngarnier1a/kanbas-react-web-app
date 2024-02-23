import { FaBook, FaFile, FaHome } from "react-icons/fa";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./index.css";


function CourseNavigationSlim() {
    const { pathname } = useLocation();
    const courseName = pathname.split('/')[3];

    return (
        <div>
            <ul className="wd-navigation-slim">
                <li><Link to={`/Kanbas/Courses/${courseName}/Home`}><FaHome /> Home</Link></li>
                <li><Link to={`/Kanbas/Courses/${courseName}/Modules`}>Modules</Link></li>
                <li><Link to={`/Kanbas/Courses/${courseName}/Assignments`}><FaFile /> Assignments</Link></li>
                <li><Link to={`/Kanbas/Courses/${courseName}/Grades`}><FaBook /> Grades</Link></li>
            </ul>
        </div>
    )
}


export default CourseNavigationSlim;