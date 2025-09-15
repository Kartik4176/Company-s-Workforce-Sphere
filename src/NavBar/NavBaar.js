import { Link } from "react-router-dom";
import "./NavBaar.css";

function NavBaar() {
  return (
    <div className="navbar">
      <div className="mainbox">
        {/* Nav Items */}
        <div className="nav-items">
          <img
            src="/image/navbar/nav.png"
            alt="logo"
            className="nav-logo"
          />

          <span className="nav-btn">Finance</span>
          <span className="nav-btn">General Document</span>
          <span className="nav-btn">All Form Category</span>
          <span className="nav-btn">Upload Documents</span>
          <span className="nav-btn">Permissions</span>

          <div className="nav-right">
            <img
              src="/image/navbar/search.png"
              alt="search"
              className="nav-icon"
            />
            <div className="profile">
              <img
                src="/image/navbar/boy.png"
                alt="profile"
                className="profile-icon"
              />
              <span>Kartik</span>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard */}
      <div className="dashboards">
        <div className="dashboard-box">
          <img
            src="/image/dashboard/dashboard.png"
            alt="dashboard"
            className="dash-icon"
          />
          <h5>Dashboard</h5>
        </div>
      </div>
    </div>
  );
}

export default NavBaar;
