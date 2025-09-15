

import { Link } from "react-router-dom";
import "./Activity.css";
import Sidebar from "../Sidebars/Sidebar";
import NavBaar from "../NavBar/NavBaar";

function Dashboard() {
  return (
    <div className="main">
      <div className="mainbox">
        <Sidebar />

        <div className="main-content">
          <NavBaar />

          <div className="ticket-container">
            <h5>My Activity</h5>
          </div>

          {/* Dynamic Box Container */}
          <div className="dynamic-box">
            

       
<div className="boxe1">
  <img 
    src="/image/activity/Attendance.png" 
    alt="Attendance"
    style={{ width: "5rem", height: "auto", marginBottom: "0.5rem", borderRadius: "0.5rem",marginLeft:"3rem" }} 
  />
  <Link to="/attendance">
    <h3 style={{ color: "#0c0c0c", fontWeight: "bold",marginLeft:"2rem" }}>Attendance</h3>
  </Link>
</div>

<div className="boxe2">
  <img 
    src="/image/activity/leave.png" 
    alt="Leave"
    style={{ width: "5rem", height: "auto", marginBottom: "0.5rem", borderRadius: "0.5rem",marginLeft:"3rem" }}
  />
  <h3  style={{ color: "#0c0c0c", fontWeight: "bold",marginLeft:"3.5rem" }}>Leave</h3>
</div>

<div className="boxe3">
  <img 
    src="/image/activity/contract.png" 
    alt="Regulization"
    style={{ width: "5rem", height: "auto", marginBottom: "0.5rem", borderRadius: "0.5rem",marginLeft:"3rem" }}
  />
  <h3 style={{ color: "#0c0c0c", fontWeight: "bold",marginLeft:"2rem" }}>Regulization</h3>
</div>


<div className="boxe4">
  <img 
    src="/image/activity/task.png" 
    alt="Task Management"
    style={{ width: "5rem", height: "auto", marginBottom: "0.5rem", borderRadius: "0.5rem",marginLeft:"4.5rem" }}
  />
  <h3 style={{ color: "#0c0c0c", fontWeight: "bold",marginLeft:"1rem" }}>Task Management</h3>
</div>

<div className="boxe5">
  <img 
    src="/image/activity/asset.png" 
    alt="Asset Management"
    style={{ width: "5rem", height: "auto", marginBottom: "0.5rem", borderRadius: "0.5rem",marginLeft:"4.5rem" }}
  />
  <h3  style={{ color: "#0c0c0c", fontWeight: "bold",marginLeft:"1rem" }}>Asset Management</h3>
</div>

<div className="boxe6">
  <img 
    src="/image/activity/wtf.png" 
    alt="Work From Home"
    style={{ width: "5rem", height: "auto", marginBottom: "0.5rem", borderRadius: "0.5rem",marginLeft:"4.5rem"  }}
  />
  <h3 style={{ color: "#0c0c0c", fontWeight: "bold",marginLeft:"1rem" }}>Work From Home</h3>
</div>




          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
