
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Navi from './Layout/Navi';
import { Container } from 'semantic-ui-react';
import MainDashboard from './Layout/MainDashboard';
import CandidateProfile from './Pages/CandidateProfile';
import EmployeeRegister from './Pages/Register/EmployeeRegister'
import EmployeeUpdate from './Pages/Register/EmployeeUpdate'



function App() {
  return (
    <div  className="app">
  
    <Container>
    <Navi/>
    {/* <JobAdForm></JobAdForm> */}
    {/* <JobAdConfirmPanel></JobAdConfirmPanel> */}
    {/* <JobAdvertisements></JobAdvertisements> */}
    <CandidateProfile></CandidateProfile>
    {/* <EmployeeRegister></EmployeeRegister>
    <EmployeeUpdate></EmployeeUpdate> */}
    

    

<MainDashboard></MainDashboard>
    </Container>
  
    </div>
    
  );
}

export default App;
