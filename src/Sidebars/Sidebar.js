import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="main">
      <div className="mainbox">
        <div className="SlideBar">
          <table className="table-border">
            <thead>
              <tr>
                <td className="logo-cell">
                  <img
                    src="/image/sidebar/logo.png"
                    alt="Logo"
                    className="logo"
                  />
                </td>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <Link to="/activity" className="sidebar-link">
                    <img src="/image/sidebar/activity.png" alt="" className="icon" />
                    My Activity
                  </Link>
                </td>
              </tr>

              <tr>
                <td>
                  <Link to="/awating" className="sidebar-link">
                    <img src="/image/sidebar/wait.png" alt="" className="icon" />
                    Awaiting Approval
                  </Link>
                </td>
              </tr>

              <tr>
                <td>
                  <Link to="/calenders" className="sidebar-link">
                    <img src="/image/sidebar/cal.png" alt="" className="icon" />
                    Calendar/Task
                  </Link>
                </td>
              </tr>

              <tr>
                <td>
                  <Link to="/report" className="sidebar-link">
                    <img src="/image/sidebar/report.png" alt="" className="icon" />
                    Reports
                  </Link>
                </td>
              </tr>

              <tr>
                <td>
                  <Link to="/docMana" className="sidebar-link">
                    <img src="/image/sidebar/doc.png" alt="" className="icon" />
                    Document Management
                  </Link>
                </td>
              </tr>

              <tr>
                <td>
                  <Link to="/doc" className="sidebar-link">
                    <img src="/image/sidebar/enq.png" alt="" className="icon" />
                    Document Enquiry
                  </Link>
                </td>
              </tr>

              <tr>
                <td>
                  <Link to="/exits" className="sidebar-link">
                    <img src="/image/sidebar/exit.png" alt="" className="icon" />
                    Exit Request
                  </Link>
                </td>
              </tr>

              <tr>
                <td>
                  <Link to="/hrPolicy" className="sidebar-link">
                    <img src="/image/sidebar/policy.png" alt="" className="icon" />
                    HR Policy Documents
                  </Link>
                </td>
              </tr>

              <tr>
                <td>
                  <Link to="/payroll" className="sidebar-link">
                    <img src="/image/sidebar/pay.png" alt="" className="icon" />
                    My Payroll
                  </Link>
                </td>
              </tr>

              <tr>
                <td>
                  <Link to="/profile" className="sidebar-link">
                    <img src="/image/sidebar/profile.png" alt="" className="icon" />
                    My Profile
                  </Link>
                </td>
              </tr>

              <tr>
                <td>
                  <Link to="/performanceApprasial" className="sidebar-link">
                    <img src="/image/sidebar/performance.png" alt="" className="icon" />
                    Performance Appraisal
                  </Link>
                </td>
              </tr>

              <tr>
                <td>
                  <Link to="/time" className="sidebar-link">
                    <img src="/image/sidebar/time.png" alt="" className="icon" />
                    Timesheet Report
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
