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

function App() {
  return (
    <div>
      <Header/>
      
        <Routes>
          <Route path="/home" element={<Body/>}/>
          <Route path="/patient" element={<Register/>}/>
          <Route path="/Login" element={<Plogin/>}/>
          <Route path="/dashboard" element={<Main/>}/>
          <Route path="/request" element={<Makerequest/>}/>
          <Route path="/patient/myrequest" element={<Myreque/>}/>
          <Route path="/DonnerLogin" element={<DLogin/>}/>
          <Route path="/DonnerRegister" element={<Dregister/>}/>
          <Route path="/DonnerDashboard" element={<Dmain/>}/>
          <Route path="/Donate" element={<Donateblood/>}/>
          <Route path="/AdminDashboard" element={<Adashboard/>}/>
        </Routes>
    
      <Body/>
    </div>
  );
}

export default App;
