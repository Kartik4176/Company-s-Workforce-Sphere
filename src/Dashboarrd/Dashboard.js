import {Link} from "react-router-dom"
import './Dashboard.css';
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
  <div class="ticket-left">
    <div class="ticket-count">
      <div>Total Tickets</div>
      <div>0</div>
    </div>
  </div>
  <div class="ticket-right">
    <button class="add-ticket-btn">Add Ticket</button>
  </div>
</div>
            

                                       {/* dynamic Box Container */}

            <div class="dynamic-box">
                
    <div className='headline'><h3>Dashboard</h3></div>            
  <div class="boxes">box 1 </div>
  <div class="boxes">Box 2</div>
  <div class="boxes">Box 3</div>
  <div class="boxes">Box 4</div>
  <div class="boxes">Box 5</div>
  <div class="boxes">Box 6</div>


</div>
</div>

</div>
    </div>
  );
}
export default Dashboard;