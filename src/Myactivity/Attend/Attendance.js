import { Link } from "react-router-dom";
import "./Attendance.css";
import Sidebar from "../../Sidebars/Sidebar";
import NavBaar from "../../NavBar/NavBaar";
// import { useState, useEffect } from "react";
import React, { useState, useEffect, useRef } from "react";

function Attendance() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const timeOptions = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  const [showOptions, setShowOptions] = useState(false);


  // Punch in , punch out functionality
  





const [isPunchIn, setIsPunchIn] = useState(false);
const [seconds, setSeconds] = useState(0);
const [showPopup, setShowPopup] = useState(false); // for popup visibility
const timerRef = useRef(null);

const formatTime = (totalSeconds) => {
  const hrs = Math.floor(totalSeconds / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;
  return `${hrs}:${mins.toString().padStart(2, "0")}:${secs
    .toString()
    .padStart(2, "0")}`;
};

const handlePunchIn = () => {
  if (!isPunchIn) {
    setIsPunchIn(true);
    timerRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  }
};

const handlePunchOut = () => {
  // Instead of stopping immediately, show popup
  setShowPopup(true);
};

const handleBreakOption = (type) => {
  setIsPunchIn(false);
  if (timerRef.current) {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  if (type === "end") {
    setSeconds(0); // reset only for End Work
  }

  setShowPopup(false); // close popup
};

// Cleanup on unmount
useEffect(() => {
  return () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };
}, []);



  return (
    <div className="main">
      <div className="mainbox">
        <Sidebar />

        <div className="main-content">
          <NavBaar />

          {/* Ticket Box */}

          <div class="ticket-container">
            <h5>My Attendance</h5>
          </div>

          {/* dynamic Box Container */}

          <div className="dynamic-box">
            <div className="attendance-boxes">
              <h2 className="attendance-heading">Attendance</h2>
              <p style={{ margin: 0 }}>
                {currentDateTime.toLocaleDateString("en-US", dateOptions)}
              </p>

              <p style={{ margin: 0 }}>
                {currentDateTime.toLocaleTimeString("en-US", timeOptions)}
              </p>

              <p
                style={{
                  paddingLeft: "55%",
                  marginTop: "-95px",
                  fontSize: "22px",
                }}
              >
                Your Office/Work Timings
              </p>
              <p
                style={{
                  paddingLeft: "40%",
                  marginTop: "10px",
                  fontSize: "15px",
                }}
              >
                Start Time <br></br> 09:00 AM
              </p>
              <p
                style={{
                  paddingLeft: "81%",
                  marginTop: "-50px",
                  fontSize: "15px",
                }}
              >
                End Time <br></br> 07:00 PM
              </p>

              <div className="Atten-meter">
                <div className="meter"></div>
              </div>


<p className="timer">
  {formatTime(seconds)} <br /> Hours
</p>

              <div className="punch">
                <button
                  className="punch-in-button"
                  onClick={handlePunchIn}
                  disabled={isPunchIn}
                >
                  PUNCH IN
                </button>
              </div>
              <div className="punch-out">
                <button
                  className="punch-out-button"
                  onClick={handlePunchOut}
                  disabled={!isPunchIn}
                >
                  PUNCH OUT
                </button>
              </div>


{showPopup && (
      <div className="popup-overlay">
        <div className="popup-box">
          <h3>Select Break Type</h3>
          <button onClick={() => handleBreakOption("lunch")}>Lunch Break</button>
          <button onClick={() => handleBreakOption("tea")}>Tea Break</button>
          <button onClick={() => handleBreakOption("small")}>Small Break</button>
          <button onClick={() => handleBreakOption("end")}>End Work</button>
        </div>
      </div>
    )}



            </div>

            <div className="main-attendance">
              <h4 style={{ fontSize: "22px", margin: "-12px" }}>Records</h4>
              <div className="main-attendance-punch">
                <p>
                  <h4
                    style={{
                      margin: "-24px",
                      marginLeft: "45px",
                      fontSize: "20px",
                      fontWeight: "normal",
                    }}
                  >
                    Punch In
                  </h4>
                </p>
                <p>
                  <h4
                    style={{
                      margin: "-44px",
                      marginLeft: "250px",
                      fontSize: "20px",
                      fontWeight: "normal",
                    }}
                  >
                    00:00 Hours
                  </h4>
                </p>

                <div className="punch-in-timer">
                  <p>0:00</p>

                  <p>hours</p>
                </div>
              </div>
              <div className="main-attendance-break">
                <p>
                  <h4
                    style={{
                      margin: "-24px",
                      marginLeft: "48px",
                      marginTop: "-38px",
                      fontSize: "15px",
                      fontWeight: "normal",
                    }}
                  >
                    Break
                  </h4>
                </p>
                <p>
                  <h4
                    style={{
                      margin: "-24px",
                      marginLeft: "25px",
                      fontSize: "20px",
                      fontWeight: "normal",
                      marginTop: "22px",
                    }}
                  >
                    00:00 hours
                  </h4>
                </p>
              </div>
              <div className="main-attendance-extra-time">
                <p>
                  <h4
                    style={{
                      margin: "-24px",
                      marginLeft: "48px",
                      marginTop: "-38px",
                      fontSize: "15px",
                      fontWeight: "normal",
                    }}
                  >
                    Extra Time
                  </h4>
                </p>
                <p>
                  <h4
                    style={{
                      margin: "-24px",
                      marginLeft: "25px",
                      fontSize: "20px",
                      fontWeight: "normal",
                      marginTop: "22px",
                    }}
                  >
                    00:00 hours
                  </h4>
                </p>
              </div>

              <p style={{ marginTop: "300px", marginLeft: "40%" }}>
                Exceptions
              </p>

              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "normal",
                  marginTop: "10px",
                }}
              >
                Late Check In 0
              </p>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "normal",
                  marginTop: "-15px",
                }}
              >
                Excess Break 0
              </p>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "normal",
                  marginTop: "-72px",
                  marginLeft: "250px",
                }}
              >
                Forget Check Out 0
              </p>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "normal",
                  marginTop: "-15px",
                  marginLeft: "250px",
                }}
              >
                Multiple Check In 0
              </p>
            </div>
            <div className="email-box">
              <h4
                style={{
                  fontSize: "22px",
                  marginTop: "-10px",
                  marginLeft: "-10px",
                }}
              >
                Send Email Reminder
              </h4>
              <div className="search-container">
                {/* Search Input */}
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search..."
                  onFocus={() => setShowOptions(true)}
                  onBlur={() => setShowOptions(false)}
                />

                {/* Hidden Dropdown Options */}
                {showOptions && (
                  <div className="dropdown">
                    <p className="dropdown-option">Late</p>
                    <p className="dropdown-option">Excess Leave</p>
                    <p className="dropdown-option">Exceeds Deadline</p>
                    <p className="dropdown-option">Forget Check Out</p>
                    <p className="dropdown-option">Multiple Check In</p>
                  </div>
                )}
              </div>
              <p> </p>
              <div className="search-container2">
                {/* Search Input */}
                <input
                  type="text"
                  className="search-input"
                  placeholder="-  -  -"
                  onFocus={() => setShowOptions(true)}
                  onBlur={() => setShowOptions(false)}
                />
              </div>
              <button className="send-email-button">Set Reminder</button>
            </div>
            <div className="today-activity">
              <h4
                style={{
                  fontSize: "22px",
                  marginTop: "-10px",
                  marginLeft: "-10px",
                }}
              >
                Today Activity
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Attendance;
