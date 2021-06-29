import React from 'react'
import { Route } from 'react-router-dom'
import { Grid, Container } from 'semantic-ui-react'
import Employees from '../Pages/Employees'
import Candidates from '../Pages/Candidates'
import Companies from '../Pages/Companies'
import SideMenu from "./SideMenu"
import JobAdvertisements from '../Pages/JobAdvertisements'
import HomePage from '../Pages/HomePage'
import CvAdd from '../Pages/CvAdd'
import CvCandidateAdd from '../Pages/CvCandidateAdd'
import CvDetailsAdd from '../Pages/Cv/CvDetailsAdd'
import CvExperienceAdd from '../Pages/Cv/CvExperienceAdd'
import CvLanguageAdd from '../Pages/Cv/CvLanguageAdd'
import CvLinkAdd from '../Pages/Cv/CvLinkAdd'
import CvProgrammingLanguageAdd from '../Pages/Cv/CvProgrammingLanguageAdd'
import CvSchoolAdd from '../Pages/Cv/CvSchoolAdd'
import CvDetailsUpdate from '../Pages/Cv/CvDetailsUpdate'
import CvExperienceUpdate from '../Pages/Cv/CvExperienceUpdate'
import CvLanguageUpdate from '../Pages/Cv/CvLanguageUpdate'
import CvLinkUpdate from '../Pages/Cv/CvLinkUpdate'
import CvProgrammingLanguageUpdate from '../Pages/Cv/CvProgrammingLanguageUpdate'
import CvSchoolUpdate from '../Pages/Cv/CvSchoolUpdate'




export default function MainDashboard() {
    return (
        <div>
           
        <Container className="main-dashboard">
           <Grid>
               <Grid.Row>
                   <Grid.Column width={4}>
                   <SideMenu/>
                   </Grid.Column>
                   <Grid.Column width={12}>
                   <Route exact path= "/employees" component ={Employees}></Route>
                   <Route exact path="/candidates" component = {Candidates}></Route>
                   <Route exact path="/companies" component ={Companies}></Route>
                   <Route exact path="/jobAdvertisements" component ={JobAdvertisements}></Route>
                   <Route exact path="/" component ={HomePage}></Route>
                   <Route exact path="/candidateprofile/cv/:cvId" component ={CvAdd}></Route>
                   <Route exact path="/candidateprofile/cvadd" component ={CvCandidateAdd}></Route>
                   <Route exact path="/candidateprofile/cv/:cvId/cvdetailsadd" component ={CvDetailsAdd}></Route>
                   <Route exact path="/candidateprofile/cv/:cvId/cvexperiencesadd" component ={CvExperienceAdd}></Route>
                   <Route exact path="/candidateprofile/cv/:cvId/cvlanguagesadd" component ={CvLanguageAdd}></Route>
                   <Route exact path="/candidateprofile/cv/:cvId/cvlinksadd" component ={CvLinkAdd}></Route>
                   <Route exact path="/candidateprofile/cv/:cvId/cvprogramminglanguagesadd" component ={CvProgrammingLanguageAdd}></Route>
                   <Route exact path="/candidateprofile/cv/:cvId/cvschoolsadd" component ={CvSchoolAdd}></Route>
                   <Route exact path="/candidateprofile/detailsupdate/:cvDetailsId" component ={CvDetailsUpdate}></Route>
                   <Route exact path="/candidateprofile/experienceupdate/:cvExperienceId" component ={CvExperienceUpdate}></Route>
                   <Route exact path="/candidateprofile/languageupdate/:cvLanguageId" component ={CvLanguageUpdate}></Route>
                   <Route exact path="/candidateprofile/linkupdate/:cvLinkId" component ={CvLinkUpdate}></Route>
                   <Route exact path="/candidateprofile/programminglanguageupdate/:cvProgrammingLanguageId" component ={CvProgrammingLanguageUpdate}></Route>
                   <Route exact path="/candidateprofile/schoolupdate/:cvSchoolId" component ={CvSchoolUpdate}></Route>



                   
                   
                    {/* <Route path="" component ={}></Route> */}
                   </Grid.Column>
               </Grid.Row>
           </Grid>
           </Container>
            
                
            
        </div>
    )
}
