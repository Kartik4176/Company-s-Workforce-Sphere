import {Link} from "react-router-dom"
import React, { useState } from "react";

import './Profile.css';
import Sidebar from '../Sidebars/Sidebar';
import NavBaar from "../NavBar/NavBaar";

function Profile() {



                      //Edit Profile Modal
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    address: "",
    dob: "",
    secondaryNumber: "",
    email: "",
    manager: ""
  });

  // handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Data:", formData);
    setShowForm(false); // close modal after submit
  };



  //////////////////////Add education Modal//////////////////////

  const [showEducationForm, setShowEducationForm] = useState(false);
const [educationData, setEducationData] = useState({
  matriculationBoard: "",
  matriculationPercentage: "",
  intermediateBoard: "",
  intermediatePercentage: "",
  bachelorDegree: "",
  bachelorPercentage: "",
  bachelorCollege: "",
  diploma: "",
  postGraduation: "",
  postGraduationPercentage: ""
});


const handleEducationChange = (e) => {
  const { name, value } = e.target;
  setEducationData({
    ...educationData,
    [name]: value,
  });
};

const handleEducationSubmit = (e) => {
  e.preventDefault();
  console.log("Education Data Submitted:", educationData);
  setShowEducationForm(false);
};



///////////////////// Previous Company Modal//////////////////////

const [showCompanyForm, setShowCompanyForm] = useState(false);
const [companyData, setCompanyData] = useState({
  companyName: "",
  role: "",
  joiningDate: "",
  relievingDate: "",
  salaryJoining: "",
  salaryExit: "",
  location: "",
  reasonForLeaving: ""
});

const handleCompanyChange = (e) => {
  const { name, value } = e.target;
  setCompanyData({
    ...companyData,
    [name]: value,
  });
};

const handleCompanySubmit = (e) => {
  e.preventDefault();
  console.log("Previous Company Data Submitted:", companyData);
  setShowCompanyForm(false);
};


                                  //Id Proof 

     // State
const [showIdForm, setShowIdForm] = useState(false);
const [idData, setIdData] = useState({
  aadhar: "",
  pan: "",
  voter: "",
  passport: "",
  driving: "",
  employeeIdCard: "",
  otherId: "",
  criminalRecord: false
});

// Handlers
const handleIdChange = (e) => {
  const { name, value, type, checked } = e.target;
  setIdData({
    ...idData,
    [name]: type === "checkbox" ? checked : value,
  });
};

const handleIdSubmit = (e) => {
  e.preventDefault();
  console.log("ID Proof Data Submitted:", idData);
  setShowIdForm(false);
};
                             



                                        //Cab Facility Modal
// State
const [showCabForm, setShowCabForm] = useState(false);
const [cabData, setCabData] = useState({
  pickup: "",
  drop: "",
  cabType: "",
  cabNumber: "",
  driverName: "",
  driverContact: "",
  pickupTime: "",
  emergencyContact: ""
});

// Handlers
const handleCabChange = (e) => {
  const { name, value } = e.target;
  setCabData({
    ...cabData,
    [name]: value,
  });
};

const handleCabSubmit = (e) => {
  e.preventDefault();
  console.log("Cab Facility Data Submitted:", cabData);
  setShowCabForm(false);
};



//Add Emergency Details Modal 
// State
const [showEmerForm, setShowEmerForm] = useState(false);
const [emerData, setEmerData] = useState({
  name: "",
  relationship: "",
  contact: "",
  altContact: "",
  email: "",
  bloodGroup: "",
  doctor: "",
  doctorContact: "",
  medicalConditions: ""
});

// Handlers
const handleEmerChange = (e) => {
  const { name, value } = e.target;
  setEmerData({
    ...emerData,
    [name]: value,
  });
};

const handleEmerSubmit = (e) => {
  e.preventDefault();
  console.log("Emergency Details Submitted:", emerData);
  setShowEmerForm(false);
};




  return (
 <div className="main">
      <div className="mainbox">
        <Sidebar />

        <div className="main-content">
          <NavBaar />

          <div className="ticket-container">
            <h5>My Profile</h5>
          </div>

          {/* dynamic Box Container */}
          <div className="dynamic-box">
            <p
              style={{
                width: "100%",
                textAlign: "left",
                height: "95%",
                fontSize: "35px",
                fontWeight: "bold",
                marginLeft: "20px",
              }}
            >
              Employee Detail
            </p>

            <div className="profile-container">
              <div className="profile-pic">
                <img src="/image/Profile/phot.png" alt="profile" />
              </div>

              <p style={{ fontSize: "30px", marginLeft: "16%", marginTop: "1%" }}>
                Gaurav Vishwakarma
              </p>
              <p
                style={{
                  fontSize: "22px",
                  marginLeft: "32%",
                  marginTop: "-4%",
                  fontWeight: "normal",
                  color: "#808080",
                }}
              >
                Software Trainee
              </p>
              <p
                style={{
                  fontSize: "22px",
                  marginLeft: "4%",
                  marginTop: "3%",
                  fontWeight: "normal",
                  color: "#808080",
                }}
              >
                Employee ID :
              </p>
              <p
                style={{
                  fontSize: "22px",
                  marginLeft: "75%",
                  marginTop: "-15%",
                  fontWeight: "normal",
                  color: "#808080",
                }}
              >
                WFS52178
              </p>
              <p
                style={{
                  fontSize: "22px",
                  marginLeft: "4%",
                  marginTop: "-2%",
                  fontWeight: "normal",
                  color: "#808080",
                }}
              >
                Department :
              </p>
              <p
                style={{
                  fontSize: "22px",
                  marginLeft: "75%",
                  marginTop: "-15%",
                  fontWeight: "normal",
                  color: "#808080",
                }}
              >
                IT
              </p>
              <p
                style={{
                  fontSize: "22px",
                  marginLeft: "4%",
                  marginTop: "-2%",
                  fontWeight: "normal",
                  color: "#808080",
                }}
              >
                Date of Joining :
              </p>
              <p
                style={{
                  fontSize: "22px",
                  marginLeft: "75%",
                  marginTop: "-15%",
                  fontWeight: "normal",
                  color: "#808080",
                }}
              >
                21-08-2023
              </p>
            </div>

            <div className="employee-details">
              <div className="label">Email:</div>
              <div className="value">k.kartik4176@gmail.com</div>

              <div className="label">Phone:</div>
              <div className="value">+91 9570578335</div>

              <div className="label">Address:</div>
              <div className="value">Sec-62, Noida, Uttar Pradesh (In)</div>

              <div className="label">Date of Birth:</div>
              <div className="value">15-05-1995</div>

              <div className="label">Gender:</div>
              <div className="value">Male</div>

              <div className="label">Blood Group:</div>
              <div className="value">B+</div>

              <div className="label">Emergency Contact:</div>
              <div className="value">+91 987654321</div>

              <div className="label">Marital Status:</div>
              <div className="value">Single</div>

              <div className="label">Position:</div>
              <div className="value">Software Trainee</div>

              {/*  */}
            </div>

            <div className="form">
              <p className="form-title">Fill/Submit Form</p>

              <div className="button-grid">
                <button
                  className="edit-button"
                  onClick={() => setShowForm(true)}
                >
                  Edit Profile
                </button>
              <button className="add-edu" onClick={() => setShowEducationForm(true)}>
  Add Education
</button>

                <button className="add-pre" onClick={() => setShowCompanyForm(true)}>
  Add Previous Company
</button>

           <button className="add-id" onClick={() => setShowIdForm(true)}>
  Add ID Proof
</button>

            <button className="add-cab" onClick={() => setShowCabForm(true)}>
  Add Cab Facility
</button>

                <button className="add-emer" onClick={() => setShowEmerForm(true)}>
  Add Emergency Details
</button>

              </div>
            </div>


                   {/*// Profile Edit Modal */}
            {/* Popup modal */}
            {showForm && (
              <div className="modal">
                <div className="modal-content">
                  <h2 style={{alignContent:"center"}}>Edit Profile</h2>
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Updated Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="mobile"
                      placeholder="Enter Updated Mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="address"
                      placeholder="Enter Updated Address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="secondaryNumber"
                      placeholder="Enter Secondary Number"
                      value={formData.secondaryNumber}
                      onChange={handleChange}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Updated Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="manager"
                      placeholder="Enter Updated Manager"
                      value={formData.manager}
                      onChange={handleChange}
                    />

                    <div className="modal-buttons">
                      <button type="submit">Submit</button>
                      <button
                        type="button"
                        onClick={() => setShowForm(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}


              

                        {/* education Modal//////////////////////*/}
          {showEducationForm && (
  <div className="modal">
    <div className="modal-content">
      <h2>Add Education</h2>
      <form onSubmit={handleEducationSubmit}>
        <input
          type="text"
          name="matriculationBoard"
          placeholder="Matriculation Board"
          value={educationData.matriculationBoard}
          onChange={handleEducationChange}
        />
        <input
          type="text"
          name="matriculationPercentage"
          placeholder="Matriculation Percentage"
          value={educationData.matriculationPercentage}
          onChange={handleEducationChange}
        />
        <input
          type="text"
          name="intermediateBoard"
          placeholder="Intermediate Board"
          value={educationData.intermediateBoard}
          onChange={handleEducationChange}
        />
        <input
          type="text"
          name="intermediatePercentage"
          placeholder="Intermediate Percentage"
          value={educationData.intermediatePercentage}
          onChange={handleEducationChange}
        />
        <input
          type="text"
          name="bachelorDegree"
          placeholder="Bachelor Degree Name"
          value={educationData.bachelorDegree}
          onChange={handleEducationChange}
        />
        <input
          type="text"
          name="bachelorPercentage"
          placeholder="Bachelor Percentage"
          value={educationData.bachelorPercentage}
          onChange={handleEducationChange}
        />
        <input
          type="text"
          name="bachelorCollege"
          placeholder="Bachelor College"
          value={educationData.bachelorCollege}
          onChange={handleEducationChange}
        />
        <input
          type="text"
          name="diploma"
          placeholder="Diploma (If Any)"
          value={educationData.diploma}
          onChange={handleEducationChange}
        />
        <input
          type="text"
          name="postGraduation"
          placeholder="Post Graduation (If Any)"
          value={educationData.postGraduation}
          onChange={handleEducationChange}
        />
        <input
          type="text"
          name="postGraduationPercentage"
          placeholder="Post Graduation Percentage"
          value={educationData.postGraduationPercentage}
          onChange={handleEducationChange}
        />

        <div className="modal-buttons">
          <button type="submit">Submit</button>
          <button type="button" onClick={() => setShowEducationForm(false)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
)}



           {/* Previous Company Modal//////////////////////*/}

{showCompanyForm && (
  <div className="modal">
    <div className="modal-content">
      <h2>Add Previous Company</h2>
      <form onSubmit={handleCompanySubmit}>
        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          value={companyData.companyName}
          onChange={handleCompanyChange}
        />
        <input
          type="text"
          name="role"
          placeholder="Role / Designation"
          value={companyData.role}
          onChange={handleCompanyChange}
        />
        <input
          type="date"
          name="joiningDate"
          value={companyData.joiningDate}
          onChange={handleCompanyChange}
        />
        <input
          type="date"
          name="relievingDate"
          value={companyData.relievingDate}
          onChange={handleCompanyChange}
        />
        <input
          type="number"
          name="salaryJoining"
          placeholder="Salary at Joining"
          value={companyData.salaryJoining}
          onChange={handleCompanyChange}
        />
        <input
          type="number"
          name="salaryExit"
          placeholder="Salary at Exit"
          value={companyData.salaryExit}
          onChange={handleCompanyChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={companyData.location}
          onChange={handleCompanyChange}
        />
        <input
          type="text"
          name="reasonForLeaving"
          placeholder="Reason for Leaving"
          value={companyData.reasonForLeaving}
          onChange={handleCompanyChange}
        />

        <div className="modal-buttons">
          <button type="submit">Submit</button>
          <button type="button" onClick={() => setShowCompanyForm(false)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
)}



                       {/* ID Proof Modal//////////////////////*/}


{showIdForm && (
  <div className="modal">
    <div className="modal-content">
      <h2>Add ID Proof</h2>
      <form onSubmit={handleIdSubmit}>
        <input
          type="text"
          name="aadhar"
          placeholder="Aadhar Card Number"
          value={idData.aadhar}
          onChange={handleIdChange}
        />
        <input
          type="text"
          name="pan"
          placeholder="PAN Number"
          value={idData.pan}
          onChange={handleIdChange}
        />
        <input
          type="text"
          name="voter"
          placeholder="Voter ID Number"
          value={idData.voter}
          onChange={handleIdChange}
        />
        <input
          type="text"
          name="passport"
          placeholder="Passport Number"
          value={idData.passport}
          onChange={handleIdChange}
        />
        <input
          type="text"
          name="driving"
          placeholder="Driving Licence Number"
          value={idData.driving}
          onChange={handleIdChange}
        />
        <input
          type="text"
          name="employeeIdCard"
          placeholder="Employee ID Card Number"
          value={idData.employeeIdCard}
          onChange={handleIdChange}
        />
        <input
          type="text"
          name="otherId"
          placeholder="Other Government Issued ID"
          value={idData.otherId}
          onChange={handleIdChange}
        />

        <label>
          <input
            type="checkbox"
            name="criminalRecord"
            checked={idData.criminalRecord}
            onChange={handleIdChange}
          />
          Any Criminal Cases on You?
        </label>

        <div className="modal-buttons">
          <button type="submit">Submit</button>
          <button type="button" onClick={() => setShowIdForm(false)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
)}



             {/*Cab Facility Modal*/}

{showCabForm && (
  <div className="modal">
    <div className="modal-content">
      <h2>Add Cab Facility</h2>
      <form onSubmit={handleCabSubmit}>
        <input
          type="text"
          name="pickup"
          placeholder="Pickup Location"
          value={cabData.pickup}
          onChange={handleCabChange}
        />
        <input
          type="text"
          name="drop"
          placeholder="Drop Location"
          value={cabData.drop}
          onChange={handleCabChange}
        />
        <input
          type="text"
          name="cabType"
          placeholder="Cab Type (Shared / Individual)"
          value={cabData.cabType}
          onChange={handleCabChange}
        />
        <input
          type="text"
          name="cabNumber"
          placeholder="Cab Number / Vehicle ID"
          value={cabData.cabNumber}
          onChange={handleCabChange}
        />
        <input
          type="text"
          name="driverName"
          placeholder="Driver Name"
          value={cabData.driverName}
          onChange={handleCabChange}
        />
        <input
          type="text"
          name="driverContact"
          placeholder="Driver Contact Number"
          value={cabData.driverContact}
          onChange={handleCabChange}
        />
        <input
          type="time"
          name="pickupTime"
          value={cabData.pickupTime}
          onChange={handleCabChange}
        />
        <input
          type="text"
          name="emergencyContact"
          placeholder="Emergency Contact"
          value={cabData.emergencyContact}
          onChange={handleCabChange}
        />

        <div className="modal-buttons">
          <button type="submit">Submit</button>
          <button type="button" onClick={() => setShowCabForm(false)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
)}



                          {/* Emergency Details Modal */}

{showEmerForm && (
  <div className="modal">
    <div className="modal-content">
      <h2>Add Emergency Details</h2>
      <form onSubmit={handleEmerSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Emergency Contact Name"
          value={emerData.name}
          onChange={handleEmerChange}
        />
        <input
          type="text"
          name="relationship"
          placeholder="Relationship with Employee"
          value={emerData.relationship}
          onChange={handleEmerChange}
        />
        <input
          type="text"
          name="contact"
          placeholder="Emergency Contact Number"
          value={emerData.contact}
          onChange={handleEmerChange}
        />
        <input
          type="text"
          name="altContact"
          placeholder="Alternate Contact Number"
          value={emerData.altContact}
          onChange={handleEmerChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Emergency Email (Optional)"
          value={emerData.email}
          onChange={handleEmerChange}
        />
        <input
          type="text"
          name="bloodGroup"
          placeholder="Blood Group"
          value={emerData.bloodGroup}
          onChange={handleEmerChange}
        />
        <input
          type="text"
          name="doctor"
          placeholder="Primary Doctor / Hospital Name"
          value={emerData.doctor}
          onChange={handleEmerChange}
        />
        <input
          type="text"
          name="doctorContact"
          placeholder="Doctor / Hospital Contact Number"
          value={emerData.doctorContact}
          onChange={handleEmerChange}
        />
        <textarea
          name="medicalConditions"
          placeholder="Any Medical Conditions / Allergies"
          value={emerData.medicalConditions}
          onChange={handleEmerChange}
        />

        <div className="modal-buttons">
          <button type="submit">Submit</button>
          <button type="button" onClick={() => setShowEmerForm(false)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
)}


          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;  