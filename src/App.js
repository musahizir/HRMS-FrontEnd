
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Navi from './Layout/Navi';
import { Container } from 'semantic-ui-react';
import JobAdForm from './Pages/JobAdForm';



function App() {
  return (
    <div  className="app">
  
    <Container>
    <Navi/>
    
      
     <JobAdForm></JobAdForm>
    </Container>
    console.log()
    </div>
    
  );
}

export default App;
