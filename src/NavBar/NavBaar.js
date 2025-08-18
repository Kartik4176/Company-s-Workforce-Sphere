
import {Link} from "react-router-dom"
import './NavBaar.css'; 
function NavBaar() {
  return (
    <div className="navbar">
      <div className = "mainbox">

                             {/* NavBar  */}


        

          <table className='navbar-table'>
            <tbody>
                <tr>
                        <td2>
                        <img src="/image/navbar/nav.png" alt="" width="40" height ="40" style={{ marginRight: "10px" }} />
                        </td2>
                        <td style={{ width: '2px' }}>
                        </td>

                        <td style={{backgroundColor: '#EEEEEE', color: 'black', padding: '2px',margin :'2pz', borderRadius: '10px'}}>
                            Finance
                        </td>

                         <td1 style={{ width: '10px' }}>
                        </td1>

                        <td style={{backgroundColor: '#EEEEEE', color: 'black', padding: '2px',margin :'2pz', borderRadius: '10px'}}>
                            General Docuent
                        </td>

                        <td1 style={{ width: '30px' }}>
                        </td1>

                        <td style={{backgroundColor: '#EEEEEE', color: 'black', padding: '2px',margin :'2pz', borderRadius: '10px'}}>
                            All form Category
                        </td>

                         <td1 style={{ width: '30px' }}>
                        </td1>

                        <td style={{backgroundColor: '#EEEEEE', color: 'black', padding: '2px',margin :'2pz', borderRadius: '10px'}}>
                            Upload Docuents
                        </td>

                        <td1 style={{ width: '30px' }}>
                        </td1>

                        <td style={{backgroundColor: '#EEEEEE', color: 'black', padding: '2px',margin :'2pz', borderRadius: '10px'}}>
                           Permissions
                        </td>
                           
                            <td1 style={{ width: '180px' }}>
                        </td1>

                        <td>
                           <img src="/image/navbar/search.png" alt="" width="24"  />
                           </td>
                            
                           
                            
                           <td>
                           <img src="/image/navbar/boy.png" alt="" width="24"  />
                            Kartik
                           
                        </td>

                </tr>
            </tbody>
            </table>
         </div>


                                          {/* Dashboard */}

            <div className ="dashboards">
                {/* <img src="/image/dashboard/dashboard.png" alt="" width="100"  style={{ marginRight: "16px" }} />
                <h5>Dashboard</h5> */}

                <div style={{ display: 'flex' }}>
                     <div ><img src="/image/dashboard/dashboard.png" alt="" width="50"  style={{ marginRight: "10px" }}></img></div>
                     
                     <h5>Dashboard</h5>
                       </div>  

            </div>



                                        {/* Ticket Box */}


{/* 
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


       */}

       
    </div>
   
  );
}
export default NavBaar;