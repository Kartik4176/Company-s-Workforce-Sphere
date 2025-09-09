import {Link} from "react-router-dom"
import './Activity.css';
import Sidebar from '../Sidebars/Sidebar';

import NavBaar from "../NavBar/NavBaar";
function Dashboard (){

  return (
    <div className="main">
     
     <div className="mainbox">
        <Sidebar />
        
     
        

<div className = "main-content">

                       
<NavBaar/>
                          

<div class="ticket-container">
 
  <h5>My Activity </h5>
</div>





                                       {/* dynamic Box Container */}

            <div className="dynamic-box">
                
                
  <div className="boxes">
    
    <img src ="/image/activity/Attendance.png" alt =""  width="190" style={{ marginRight: "16px" }}/>
    <Link to ="/attendance"><h3 style={{ color: "#0c0c0cff",textDecoration:"none" ,fontWeight: "bold"}}>Attendance</h3></Link>
    

    
    </div>
  <div className="boxes">
        <img src ="/image/activity/leave.png" alt =""  width="180" style={{ marginRight: "-40px" }}/>
    <h3>Leave</h3>
    </div>

  <div className="boxes">
        <img src ="/image/activity/contract.png" alt =""  width="180" style={{ marginRight: "-39px" }}/>

    <h3>Regulization</h3>
    </div>
  <div className="boxes">
    
    <img src ="/image/activity/task.png" alt =""  width="180" style={{ marginRight: "-40px" }}/>
    <h3>Task Management</h3>
    </div>
  <div className="boxes">
        <img src ="/image/activity/asset.png" alt =""  width="180" style={{ marginRight: "-40px" }}/>
    <h3>Asset Management</h3>
    </div>
  <div className="boxes">
    
    <img src ="/image/activity/wtf.png" alt =""  width="180" style={{ marginRight: "-40px" }}/>
    <h3>Work From Home</h3>
    </div>


</div>
</div>

</div>
    </div>
  );
}
export default Dashboard;