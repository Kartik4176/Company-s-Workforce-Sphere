import { Link } from "react-router-dom";
import "./Attendance.css";
import Sidebar from "../../Sidebars/Sidebar";
import NavBaar from "../../NavBar/NavBaar";
// import { useState, useEffect } from "react";
import React, { useState, useEffect, useRef } from "react";



function Attendance() {

                                 //Break Hour Shown

// Break timer states
const [breakTime, setBreakTime] = useState(0); 
const breakTimerRef = useRef(null);

const startBreakTimer = () => {
  if (!breakTimerRef.current) {
    breakTimerRef.current = setInterval(() => {
      setBreakTime(prev => prev + 1);
    }, 1000);
  }
};

const stopBreakTimer = () => {
  if (breakTimerRef.current) {
    clearInterval(breakTimerRef.current);
    breakTimerRef.current = null;
  }
};







// state to store latest punch-in time
const [latestPunchInTime, setLatestPunchInTime] = useState(null);



// Current date and time functionality
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

const [selectedOption, setSelectedOption] = useState(null); // Work From Home / Office
const [selectedOffice, setSelectedOffice] = useState(null); // Noida/Gurugram/Bengaluru

// popup states
const [showWorkModePopup, setShowWorkModePopup] = useState(false);
const [showOfficePopup, setShowOfficePopup] = useState(false);
const [showBreakPopup, setShowBreakPopup] = useState(false);

const timerRef = useRef(null);

const formatTime = (totalSeconds) => {
  const hrs = Math.floor(totalSeconds / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;
  return `${hrs}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    
    
};

const startTimer = () => {
  timerRef.current = setInterval(() => {
    setSeconds((prev) => prev + 1);
  }, 1000);
};


const stopTimer = () => {
  if (timerRef.current) {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }
};

const handlePunchIn = () => {
  if (!isPunchIn) {
    if (!selectedOption) {
      setShowWorkModePopup(true);
    } else {
      setIsPunchIn(true);
      setLatestPunchInTime(new Date());
      startTimer();
      stopBreakTimer();   //  stop break when punching in again

      const now = new Date();
      // check if current time is after 10:30 AM
      if (
        now.getHours() > EXTRA_START_HOUR ||
        (now.getHours() === EXTRA_START_HOUR && now.getMinutes() >= EXTRA_START_MINUTE)
      ) {
        startExtraTimer();
      }
    }
  }
};





const handlePunchOut = () => {
  setIsPunchIn(false);
  stopTimer();       // pause work timer
  stopExtraTimer();  // pause extra timer
  startBreakTimer(); // ✅ start break timer
  setShowBreakPopup(true);
};




// Break option handler
// Break option handler
const handleBreakOption = (type) => {
  if (type === "end") {
    stopTimer();        // stop work timer
    stopExtraTimer();   // stop extra timer
    stopBreakTimer();   // stop break timer

    setIsPunchIn(false);
    setSeconds(0);
    setExtraTime(0);
    setBreakTime(0);
    setSelectedOption(null);
    setSelectedOffice(null);
  }
  setShowBreakPopup(false);
};





const handleOptionSelect = (option) => {
  setSelectedOption(option);

  if (option === "Work From Home") {
    setShowWorkModePopup(false);
    setIsPunchIn(true);
    startTimer();
  } else if (option === "Office") {
    setShowWorkModePopup(false);
    setShowOfficePopup(true); // now show office list instead of break popup
  }
};

const handleOfficeSelect = (office) => {
  setSelectedOffice(office);
  setShowOfficePopup(false);
  setIsPunchIn(true);
  setLatestPunchInTime(new Date()); //  save latest punch-in immediately
  startTimer();
};


useEffect(() => {
  return () => {
    stopTimer();
  };
}, []);












// Attendance meter functionality
const [progress, setProgress] = useState(0);

useEffect(() => {
  if (!isPunchIn) {
    setProgress(0); // reset when not punched in
    return;
  }

  const totalSeconds =   60; // seconds mai le raha hai.

  const updateProgress = () => {
    const percent = Math.min((seconds / totalSeconds) * 100, 100);
    setProgress(percent);
  };

  updateProgress();
}, [seconds, isPunchIn]);




                                        //  Extra time shown 

// Extra timer
const [extraTime, setExtraTime] = useState(0);
const extraTimerRef = useRef(null);
const EXTRA_START_HOUR = 11;
const EXTRA_START_MINUTE = 53;



// Start extra timer
const startExtraTimer = () => {
  if (!extraTimerRef.current) {
    extraTimerRef.current = setInterval(() => {
      setExtraTime(prev => prev + 1);
    }, 1000);
  }
};

// Stop extra timer
const stopExtraTimer = () => {
  if (extraTimerRef.current) {
    clearInterval(extraTimerRef.current);
    extraTimerRef.current = null;
  }
};
  
 useEffect(() => {
    const checkExtraTimer = setInterval(() => {
      const now = new Date();
      if (
        isPunchIn &&
        (now.getHours() > EXTRA_START_HOUR ||
          (now.getHours() === EXTRA_START_HOUR && now.getMinutes() >= EXTRA_START_MINUTE))
      ) {
        startExtraTimer();
      }
    }, 1000);

    return () => clearInterval(checkExtraTimer);
  }, [isPunchIn]);


// Break handler
const handleBreak = () => {
  setIsPunchIn(false);
  stopTimer();
  stopExtraTimer(); // pause extra timer
  setShowBreakPopup(true);
};

// End work handler
const handleEndWork = () => {
  stopTimer();        // stop work timer
  stopExtraTimer();   // stop extra timer
  stopBreakTimer();   // stop break timer

  setIsPunchIn(false);   // mark user not punched in
  setSeconds(0);         // reset work timer
  setExtraTime(0);       // reset extra timer
  setBreakTime(0);       // reset break timer
  setSelectedOption(null);
  setSelectedOffice(null);
  setShowBreakPopup(false);
};







                 





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
  <div className="meter" style={{ width: `${progress}%` }}></div>
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

{/* Work Mode popup (first punch in) */}
{showWorkModePopup && (
  <div className="popup-overlay">
    <div className="popup-box">
      <h3>Select Work Mode</h3>
      <button onClick={() => handleOptionSelect("Work From Home")}>
        Work From Home
      </button>
      <button onClick={() => handleOptionSelect("Office")}>Office</button>
    </div>
  </div>
)}


{/* Office list popup (only if Office chosen) */}
{showOfficePopup && (
  <div className="popup-overlay">
    <div className="popup-box">
      <h3>Select Office Location</h3>
      <button onClick={() => handleOfficeSelect("Noida")}>Noida</button>
      <button onClick={() => handleOfficeSelect("Gurugram")}>Gurugram</button>
      <button onClick={() => handleOfficeSelect("Bengaluru")}>Bengaluru</button>
    </div>
  </div>
)}

{/* Break popup (after punch out) */}
{showBreakPopup && (
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
  {latestPunchInTime
    ? latestPunchInTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    : "00:00"}
</h4>

</p>

               <div className="punch-in-timer">
  <p>{formatTime(extraTime)}</p>
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
 <h4
  style={{
    margin: "-24px",
    marginLeft: "25px",
    fontSize: "20px",
    fontWeight: "normal",
    marginTop: "22px",
  }}
>
  {formatTime(breakTime)} hours
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
  Late Check In : 0
</p>

              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "normal",
                  marginTop: "-15px",
                }}
              >
                Excess Break : 0
              </p>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "normal",
                  marginTop: "-72px",
                  marginLeft: "250px",
                }}
              >
                Forget Check Out : 0
              </p>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "normal",
                  marginTop: "-15px",
                  marginLeft: "250px",
                }}
              >
                Multiple Check In : 0
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
