
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Navi from './Layout/Navi';
import MainDashboard from './Layout/MainDashboard';
import { Container } from 'semantic-ui-react';


function App() {
  return (
    <div className="App">
      


<Container className="layout">
<Navi/>
<MainDashboard/>



</Container>



    </div>
  );
}

export default App;
