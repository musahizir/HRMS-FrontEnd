
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Navi from './Layout/Navi';
import { Container } from 'semantic-ui-react';
import JobAdConfirmPanel from './Pages/JobAdConfirmPanel';
import JobAdForm from './Pages/JobAdForm';
import JobAdvertisements from './Pages/JobAdvertisements';
import MainDashboard from './Layout/MainDashboard';
import CandidateProfile from './Pages/CandidateProfile';


function App() {
  return (
    <div  className="app">
  
    <Container>
    <Navi/>
    {/* <JobAdForm></JobAdForm> */}
    {/* <JobAdConfirmPanel></JobAdConfirmPanel> */}
    {/* <JobAdvertisements></JobAdvertisements> */}
    <CandidateProfile></CandidateProfile>

    

<MainDashboard></MainDashboard>
    </Container>
  
    </div>
    
  );
}

export default App;
