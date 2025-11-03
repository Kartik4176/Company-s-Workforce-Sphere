

import { Link } from "react-router-dom";
import "./Activity.css";
import Sidebar from "../Sidebars/Sidebar";
import NavBaar from "../NavBar/NavBaar";

function Activity() {
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
            

       
       <div className="activity-grid">
  <div className="boxe1">
    <img src="/image/activity/Attendance.png" alt="Attendance" />
    <Link to="/attendance"><h3>Attendance</h3></Link>
  </div>

  <div className="boxe2">
    <img src="/image/activity/leave.png" alt="Leave" />
    <h3>Leave</h3>
  </div>

  <div className="boxe3">
    <img src="/image/activity/contract.png" alt="Regulization" />
    <h3>Regulization</h3>
  </div>

  <div className="boxe4">
    <img src="/image/activity/task.png" alt="Task Management" />
    <h3>Task Management</h3>
  </div>

  <div className="boxe5">
    <img src="/image/activity/asset.png" alt="Asset Management" />
    <h3>Asset Management</h3>
  </div>

  <div className="boxe6">
    <img src="/image/activity/wtf.png" alt="Work From Home" />
    <h3>Work From Home</h3>
  </div>
</div>






          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activity;