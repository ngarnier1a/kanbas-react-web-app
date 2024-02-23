import React from 'react';

function CourseStatusComponent() {
  return (
    <div>
      <h3>Course Status</h3>
      <button className="wd-modules-btn wd-modules-btn-green" style={{ width: '46%' }}>
        <i className="fa fa-check-circle"></i> Published
      </button>
      <button className="wd-modules-btn" style={{ width: '46%' }}>
        <i className="fa fa-ban"></i> Unpublish
      </button>
      <button className="wd-modules-btn" style={{ width: '95%' }}>
        <i className="fa "></i> Import Existing Content
      </button><br />
      <button className="wd-modules-btn" style={{ width: '95%' }}>
        <i className="fa "></i> Import From Commons
      </button><br />
      <button className="wd-modules-btn" style={{ width: '95%' }}>
        <i className="fa "></i> Choose Home Page
      </button><br />
      <button className="wd-modules-btn" style={{ width: '95%' }}>
        <i className="fa fa-bar-chart"></i> View Course Stream
      </button><br />
      <button className="wd-modules-btn" style={{ width: '95%' }}>
        <i className="fa "></i> New Announcement
      </button><br />
      <button className="wd-modules-btn" style={{ width: '95%' }}>
        <i className="fa fa-bar-chart "></i> New Analytics
      </button><br />
      <button className="wd-modules-btn" style={{ width: '95%' }}>
        <i className="fa fa-bell"></i> View Course Notifications
      </button><br />
      <h4>To Do</h4>
      <hr />
      <p>
          <i className='fa fa-question-circle'></i> Grade A1 - ENV + HTML
        
      </p>
      <h4>Coming Up
        <h6>View Calendar</h6>
      </h4>
      <hr />
      <ul>
        <li>Lecture 1</li>
        <li>Lecture 2</li>
        <li>Lecture 3</li>
      </ul>
    </div>
  );
};

export default CourseStatusComponent;