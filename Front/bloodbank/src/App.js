import logo from './logo.svg';
import './App.css';
import Header from './Componenet/Header';
import Body from './Componenet/Body';
import {Route,Routes} from 'react-router-dom'
import Register from './Componenet/Patient/Register';

function App() {
  return (
    <div>
      <Header/>
      
        <Routes>
          <Route path="/home" element={<Body/>}/>
          <Route path="/patient" element={<Register/>}/>
        </Routes>
    
      <Body/>
    </div>
  );
}

export default App;
