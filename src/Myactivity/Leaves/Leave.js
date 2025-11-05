import { Link } from "react-router-dom";
import "./Leave.css";
import Sidebar from "../../Sidebars/Sidebar";
import NavBaar from "../../NavBar/NavBaar";
// import { useState, useEffect } from "react";
import React, { useState, useEffect, useRef } from "react";

function Leave() {

  return(
    <div className="main">
      <div className="mainbox">
         <Sidebar />

          <div className="main-content">
           <NavBaar />

          {/* Ticket Box */}

          <div class="ticket-container">
            <h5>My Leave</h5>
          </div>

          {/* dynamic Box Container */}

           <div className="dynamic-box">

<div class="main-box">
 
   <div class="box1">
   <div style={{ fontSize: '2vw', fontWeight: 600, textAlign: 'center', margin: 0 }}>Total Leaves</div>

  <br/> 
  <p style={{ fontSize: '2vw', color: '#ff6600', margin: 0,textAlign:'center' }}>30</p>

  </div>         

  <div class="box2">
<div style={{ fontSize: '2vw', fontWeight: 600, textAlign: 'center', margin: 0 }}>Leaves Taken</div>

  <br/> 
  <p style={{ fontSize: '2vw', color: '#ff6600', margin: 0,textAlign:'center' }}>8</p>

  </div>
  <div class="box3">
    <div style={{ fontSize: '2vw', fontWeight: 600, textAlign: 'center', margin: 0 }}>Remaing</div>

  <br/> 
  <p style={{ fontSize: '2vw', color: '#ff6600', margin: 0,textAlign:'center' }}>22</p>
  </div>
</div>




<div className="leave-container">
  <div className="leave-header">
    <h3>Leave Requests</h3>
    
  </div>

  <table className="leave-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Type</th>
        <th>From</th>
        <th>To</th>
        <th>Days</th>
        <th>Status</th>
        {/* <th>Actions</th> */}
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>001</td>
        <td>
          Kartik
          <div className="emp-id">E101</div>
        </td>
        <td>Sick</td>
        <td>2025-11-05</td>
        <td>2025-11-07</td>
        <td>3</td>
        <td><span className="status approved">Approved</span></td>
        {/* <td><button className="view-btn">View</button></td> */}
      </tr>

      <tr>
        <td>002</td>
        <td>
          Utkarsh Sanre
          <div className="emp-id">E102</div>
        </td>
        <td>Casual</td>
        <td>2025-10-20</td>
        <td>2025-10-21</td>
        <td>2</td>
        <td><span className="status pending">Pending</span></td>
        {/* <td><button className="view-btn">View</button></td> */}
      </tr>
    </tbody>
  </table>
</div>


<div className="footer">
  <div className="footer-header">
    <h3>Quick Action</h3>
    
  </div>

</div>





















           </div>
        </div>
      </div>
    </div>
  )
}

export default Leave;