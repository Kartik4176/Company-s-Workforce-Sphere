import { BrowserRouter, Routes, Route } from 'react-router-dom';


import React from 'react';


import './App.css';
import Dashboard from './Dashboarrd/Dashboard';
import Calenders from './Calender/Calenders';
import Activity from './Myactivity/Activity';
// import DocMana from './DocMana/DocumentManagement';
// import DocEnq from './DocEnq/DocumentEnquiry';
import Awating from './AwatingApproval/Awating';
import Exits from './Exit/Exits';
import HrPolicy from './Hr/HrPolicy';
import Payroll from './MyPayroll/Payroll';
import Profile from './MyProfile/Profile';
import PerformanceApprasial from './Performance/PerformanceApprasial';
import Report from './Reports/Report';
import Time from './TimeSheet/Time';    
import Attendance from './Myactivity/Attend/Attendance';
import Sidebar from './Sidebars/Sidebar';
import NavBaar from './NavBar/NavBaar';

function App() {
  return (
    

 <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/myactivity/attend" element={<Attendance />} />
         <Route path="/attendance" element={<Attendance />} />
        <Route path="/calenders" element={<Calenders />} />
        <Route path="/awating" element={<Awating />} />
        <Route path="/exits" element={<Exits />} />
        <Route path="/hrpolicy" element={<HrPolicy />} />
        <Route path="/payroll" element={<Payroll />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/performance" element={<PerformanceApprasial />} />
        <Route path="/report" element={<Report />} />
        <Route path="/time" element={<Time />} />

        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/navbaar" element={<NavBaar />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
