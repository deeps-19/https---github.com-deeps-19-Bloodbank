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

function App() {
  return (
    <div>
      <Header/>
      
        <Routes>
          <Route path="/home" element={<Body/>}/>
          <Route path="/patient" element={<Register/>}/>
          <Route path="/Login" element={<Plogin/>}/>
          <Route path="/dashboard" element={<Main/>}/>
          <Route path="/patient/request" element={<Makerequest/>}/>
          <Route path="/patient/myrequest" element={<Myreque/>}/>
          <Route path="/DonnerLogin" element={<DLogin/>}/>
        </Routes>
    
      <Body/>
    </div>
  );
}

export default App;
