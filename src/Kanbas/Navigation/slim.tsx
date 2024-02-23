import { useEffect, useState } from 'react';
import { Nav, NavDropdown, Navbar, Container, Offcanvas, Button } from "react-bootstrap";
import { FaBars, FaBook, FaCaretDown, FaCaretRight, FaTachometerAlt, FaUser } from 'react-icons/fa';
import { useLocation } from 'react-router';
import './index.css';
import CourseNavigationSlim from '../Courses/Navigation/slim';
import { Link } from 'react-router-dom';

// https://react-bootstrap.netlify.app/docs/components/navbar

function SlimKanbasNavigation() {
    const { pathname } = useLocation();
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] : [boolean, Function] = useState(false);
  
    const toggleLeft = () => setShowLeft(!showLeft);
    const toggleRight = () => setShowRight(!showRight);

    const courseNavigationSlimToggle = !(pathname.includes('Courses')) ? <></> : (
        <Button variant="secondary" onClick={toggleRight} style={{ position: 'absolute', right: 16 }}>
            <FaCaretDown />
      </Button>
    );
    const courseNavigationSlim = !(pathname.includes('Courses')) ? <></> : (
        <Offcanvas show={showRight} onHide={toggleRight} placement="end">
          <Offcanvas.Header closeButton />
          <Offcanvas.Body>
            <CourseNavigationSlim />
          </Offcanvas.Body>
        </Offcanvas>
    );

    return (
      <>
        <Navbar bg="light" expand={false} fixed="top" className="d-block bg-dark d-sm-none">
          <Container fluid>
            <Button variant='secondary' onClick={toggleLeft}>
              <FaBars/>
            </Button>
            {courseNavigationSlimToggle}
          </Container>
        </Navbar>
  
        <Offcanvas show={showLeft} onHide={toggleLeft} placement="start">
          <Offcanvas.Header closeButton />
          <Offcanvas.Body>
          <ul className="wd-kanbas-navigation-slim">
            <li><Link to="/Kanbas/Dashboard" onClick={toggleLeft}>
                <FaTachometerAlt /> Dashboard</Link> </li>
            <li><Link to="/Kanbas/Linkccount/Profile" onClick={toggleLeft}>
                <FaUser className="ms-5" /> Account</Link>
                <FaCaretRight className="float-end me-5 fs-3" /></li>
            <li><Link to="/Kanbas/Dashboard" onClick={toggleLeft}>
                <FaBook /> Courses</Link>
                <FaCaretRight className="float-end me-5 fs-3"/></li>
          </ul>
          </Offcanvas.Body>
        </Offcanvas>

        {courseNavigationSlim}
        </>
    );
}

export default SlimKanbasNavigation;