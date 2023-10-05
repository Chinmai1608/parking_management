import {
  BrowserRouter as Router, Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import DriverLogin from "./pages/DriverLogin";
import Driverhomepage from "./pages/Driverhomepage";
import OwnerLogin from "./pages/OwnerLogin";
import OwnerHomePage from "./pages/OwnerHomePage";
import Homepg from './pages/Homepg';

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/Homepg' element={<Homepg/>}/>
      <Route exact path='/DriverLogin' element={<DriverLogin/>}/>
      <Route exact path='/Driverhomepage' element={<Driverhomepage/>}/>
      <Route exact path='/OwnerLogin' element={<OwnerLogin/>}/>
      <Route exact path='/Ownerhomepage' element={<OwnerHomePage/>}/>

      </Routes>
    </Router>
  );
}

export default App;
