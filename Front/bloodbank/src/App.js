import logo from './logo.svg';
import './App.css';
import Header from './Componenet/Header';
import Body from './Componenet/Body';
import {Route,Routes} from 'react-router-dom'
import Register from './Componenet/Patient/Register';

import Plogin from './Componenet/Patient/Plogin';
import Pdashboard from './Componenet/Patient/Pdashboard';
import Main from './Componenet/Patient/Main';
import Makerequest from './Componenet/Patient/Makerequest';
import Myreque from './Componenet/Patient/Myreque';
import DLogin from './Componenet/Donor/DLogin';
import Dregister from './Componenet/Donor/Dregister';
import Dmain from './Componenet/Donor/Dmain';
import Donateblood from './Componenet/Donor/Donateblood';
import Adashboard from './Componenet/Admin/Adashboard';
import Amain from './Componenet/Admin/Amain';
import Donordetails from './Componenet/Admin/Donordetails';
import Update from './Componenet/Admin/Update';
import Patientdetails from './Componenet/Admin/Patientdetails';
import Updatepatient from './Componenet/Admin/Updatepatient';
import Donation from './Componenet/Admin/Donation';
import Requestblood from './Componenet/Admin/Requestblood';
import REquesthistory from './Componenet/Admin/REquesthistory';
import Bloodhistory from './Componenet/Admin/Bloodhistory';
import Donorrequest from './Componenet/Donor/Donorrequest';
import Drequesthistory from './Componenet/Donor/Drequesthistory';
import Dhistory from './Componenet/Donor/Dhistory';
import Updatereq from './Componenet/Admin/Updatereq';
import Cmain from './Componenet/Cmain';

function App() {
  return (
    <div>
            
        <Routes>
          <Route path="/home" element={<Cmain/>}/>
          <Route path="/patient" element={<Register/>}/>
          <Route path="/Login" element={<Plogin/>}/>
          <Route path="/dashboard" element={<Main/>}/>
          <Route path="/request" element={<Makerequest/>}/>
          <Route path="/patient/myrequest" element={<Myreque/>}/>
          <Route path="/DonnerLogin" element={<DLogin/>}/>
          <Route path="/DonnerRegister" element={<Dregister/>}/>
          <Route path="/DonnerDashboard" element={<Dmain/>}/>
          <Route path="/Donate" element={<Donateblood/>}/>
          <Route path="/donor/donation-history" element={<Dhistory/>}/>

          <Route path="/Donerrequest" element={<Donorrequest/>}/>
          <Route path="/donor/request-history" element={<Drequesthistory/>}/>
          <Route path="/AdminDashboard" element={<Amain/>}/>
          <Route path="/admin-donor" element={<Donordetails/>}/>
          <Route path="/update/donore/:id" element={<Update/>}/>
          <Route path="/admin-patient" element={<Patientdetails/>}/>
          <Route path="/update/patient/:id" element={<Updatepatient/>}/>
          <Route path="/admin-donation" element={<Donation/>}/>
          <Route path="/admin-request" element={<Requestblood/>}/>
          <Route path="/admin-request-history" element={<REquesthistory/>}/>
          <Route path="/admin-blood" element={<Bloodhistory/>}/>
          <Route path="/admin-req/:id" element={<Updatereq/>}/>
        </Routes>
    
      <Body/>
    </div>
  );
}

export default App;
