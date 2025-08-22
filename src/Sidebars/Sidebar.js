import {Link} from "react-router-dom"
import './Sidebar.css';


function Sidebar (){

  return (
    <div className="main">
     
     <div className="mainbox">
        
        <div className ="SlideBar">
            <table className='table-border'>
                <thead>
                    <tr>
                        <td ><img src ="/image/sidebar/logo.png"  alt=""  width="210px" textAlign='center'  cursor= "default" /></td>
                    </tr>

                   
                </thead>
                <br/>
                <tbody>
                    <tr>
                        <td>
                            
          <Link to="/activity" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
  <img src="/image/sidebar/activity.png" alt="" width="24" style={{ marginRight: "16px" }} />
  My Activity
</Link>
</td>
        
                    </tr>

                     <tr>
                        <td>
                                     <Link to="/awating" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
 
                            <img src="/image/sidebar\wait.png" alt="" width="24" style={{ marginRight: "16px" }} />   Awating Approval
</Link> </td>
                       
                    </tr>

                    <tr>
                    <td>
                                  <Link to="/calenders" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>

                        <img src="/image/sidebar/cal.png" alt="" width="24"  style={{ marginRight: "16px" }} />  Calender/Task </Link></td>
                    
                    </tr>

                    <tr>
                        <td>
                                      <Link to="/report" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>

                             <img src="/image/sidebar/report.png" alt="" width="24" style={{ marginRight: "16px" }} /> Reports </Link></td> 
                        
                    </tr>

                    <tr>
                        <td> 
                                      <Link to="/docMana" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>

                            <img src ="/image/sidebar/doc.png" alt ="" width="24" style={{ marginRight: "16px" }}/> Document Management </Link></td>
                        
                    </tr>

                    <tr>
                        <td>
                                      <Link to="/doc" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>

                             <img src ="/image/sidebar/enq.png" alt =""   width="24" style={{ marginRight: "16px" }}/>Document Enquiry </Link></td> 
                        
                    </tr>
                     <tr>
                        <td> 
                                      <Link to="/exits" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>

                            <img src ="/image/sidebar/exit.png" alt ="" width="24" style={{ marginRight: "16px" }}/>Exit Request </Link></td> 
                        
                    </tr>
                    <tr>
                        <td>
                                      <Link to="/hrPolicy" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>

                             <img src ="/image/sidebar/policy.png" alt ="" width="24"  style={{ marginRight: "16px" }}/>Hr Policy Documents </Link></td> 
                    </tr>
                    <tr>
                        <td> 
                                      <Link to="/payroll" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>

                            <img src ="/image/sidebar/pay.png" alt ="" width="24" style={{ marginRight: "16px" }}/>My Payroll </Link></td> 
                        
                    </tr>


                    <tr>
                        <td>
                            
                             <Link to="/profile" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
  <img src="/image/sidebar/profile.png" alt="" width="24" style={{ marginRight: "16px" }} />
  My Profile
</Link>

                             </td> 
                    </tr>



                     <tr>
                        <td> 
                                      <Link to="/performanceApprasial" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>

                            <img src ="/image/sidebar/performance.png" alt ="" width="24" style={{ marginRight: "16px" }}/>Performance Apprasial </Link></td>
                        
                    </tr>
                    <tr>
                        <td> 
                                      <Link to="/time" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
<img src ="/image/sidebar/time.png" alt ="" width="24" style={{ marginRight: "16px" }}/>Timesheet Report </Link></td>
                        
                        
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
        </div>
  );
}
      export default Sidebar;    
