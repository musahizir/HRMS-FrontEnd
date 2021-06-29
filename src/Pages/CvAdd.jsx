import React, { useState, useEffect } from 'react'
import { Table,Button } from 'semantic-ui-react'
import CvDetailsService from '../Services/cvDetailsService';
import { NavLink, useParams } from 'react-router-dom';
import CvExperiencesService from '../Services/cvExperienceService';
import CvLanguageService from '../Services/cvLanguageService';
import CvLinkService from '../Services/cvLinkService';
import CvProgrammingLanguageService from '../Services/cvProgrammingLanguageService';
import CvSchoolService from '../Services/cvSchoolService';
import { Link } from 'react-router-dom';




  export default function CvAdd() {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };

    
    
    const {cvId} = useParams()

    

    const [cvDetails, setCvDetails] = useState([])
    
    const [cvExperiences, setCvExperiences] = useState([])
    
    const [cvLanguages, setCvLanguages] = useState([])

    const [cvLinks, setCvLinks] = useState([])

    const [cvProgrammingLanguages, setCvProgrammingLanguages] = useState([])

    const [cvSchools, setCvSchools] = useState([])
    
    useEffect(()=>{

      let cvDetailService = new CvDetailsService()

      cvDetailService.getAllByCvId(cvId).then(result=>setCvDetails(result.data.data))
      
    },[])

    useEffect(()=>{

      let cvExperienceService = new CvExperiencesService()

      cvExperienceService.getAllByCvId(cvId).then(result=>setCvExperiences(result.data.data))
      
    },[])

    useEffect(()=>{

      let cvLanguageService = new CvLanguageService()

      cvLanguageService.getAllByCvId(cvId).then(result=>setCvLanguages(result.data.data))
      
    },[])

    useEffect(()=>{

      let cvLinkService = new CvLinkService()

      cvLinkService.getAllByCvId(cvId).then(result=>setCvLinks(result.data.data))
      
    },[])

    useEffect(()=>{

      let cvProgrammingLanguageService = new CvProgrammingLanguageService()

      cvProgrammingLanguageService.getAllByCvId(cvId).then(result=>setCvProgrammingLanguages(result.data.data))
      
    },[])

    useEffect(()=>{

      let cvSchoolService = new CvSchoolService()

      cvSchoolService.getAllByCvId(cvId).then(result=>setCvSchools(result.data.data))
      
    },[])

     let deleteCvSchool = (cvSchoolId) => {

      let cvSchoolService = new CvSchoolService()
      cvSchoolService.deleteCvSchool(cvSchoolId)
      window.location.reload()
    }

    let deleteCvProgrammingLanguage = (cvProgrammingLanguageId) => {

      let cvProgrammingLanguageService = new CvProgrammingLanguageService()
      cvProgrammingLanguageService.deleteCvProgrammingLanguage(cvProgrammingLanguageId)
      window.location.reload()
    }

    let deleteCvLink = (cvLinkId) => {

      let cvLinkService = new CvLinkService()
      cvLinkService.deleteCvLink(cvLinkId)
      window.location.reload()
    }
    let deleteCvLanguage = (cvLanguageId) => {

      let cvLanguageService = new CvLanguageService()
      cvLanguageService.deleteCvLanguage(cvLanguageId)
      window.location.reload()
    }
    let deleteCvExperience = (cvExperienceId) => {

      let cvExperienceService = new CvExperiencesService()
      cvExperienceService.deleteCvExperience(cvExperienceId)
      window.location.reload()
    }
    let deleteCvDetails = (cvDetailsId) => {

      let cvDetailsService = new CvDetailsService()
      cvDetailsService.deleteCvDetails(cvDetailsId)
      window.location.reload()
    }

 
    

  
    
      return (

        
        
        <div className="container">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Okullar
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            İş Tecrübeleri
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            Linkler
          </button>

          <button
            className={toggleState === 4? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(4)}
          >
            Diller
          </button>
          <button
            className={toggleState === 5? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(5)}
          >
            Programlama Dilleri
          </button>
          <button
            className={toggleState === 6? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(6)}
          >
            Detaylar
          </button>
        </div>
  
        <div className="content-tabs">
          <div
            className={toggleState === 1 ? "content  active-content" : "content"}
          >
            <h2>Okullar</h2>
            <hr />
            <p>
            <Table celled>
            

    <Table.Row>
        <Table.HeaderCell>Okul Adı</Table.HeaderCell>
        <Table.HeaderCell>Bölümü</Table.HeaderCell>
        <Table.HeaderCell>Baslama Tarihi</Table.HeaderCell>
        <Table.HeaderCell>Bitis Tarihi</Table.HeaderCell>
        <Table.HeaderCell>Sil-Güncelle</Table.HeaderCell>

        
        
       
    </Table.Row>
<Table.Body>
{cvSchools.map(cvSchool =>(
    <Table.Row>

    <Table.Cell>{cvSchool.cvSchoolName}</Table.Cell>
    <Table.Cell>{cvSchool.cvSchoolBranch}</Table.Cell>
    <Table.Cell>{cvSchool.cvSchoolStartDate}</Table.Cell>
    <Table.Cell>{cvSchool.cvSchoolGraduateDate}</Table.Cell>
    <Table.Cell><Button  onClick={()=> deleteCvSchool(cvSchool.cvSchoolId)} color="red" floated ="right">Sil</Button></Table.Cell>
    <Table.Cell>  <Link to={`/candidateprofile/schoolupdate/${cvSchool.cvSchoolId}`}>  <Button color="orange" floated ="right">Güncelle</Button> </Link></Table.Cell>
    </Table.Row>
))}
    </Table.Body>
    
    <Button as ={NavLink} to = {`/candidateprofile/cv/${cvId}/cvschoolsadd`} >Ekle</Button>
    
  </Table>

  

  
            </p>
          </div>
  
          <div
            className={toggleState === 2 ? "content  active-content" : "content"}
          >
            <h2>Content 2</h2>
            <hr />
            <p>
            <Table celled>

<Table.Row>
    <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
    <Table.HeaderCell>Pozisyonu</Table.HeaderCell>
    <Table.HeaderCell>Baslama Tarihi</Table.HeaderCell>
    <Table.HeaderCell>Ayrılma Tarihi</Table.HeaderCell>
    
    
   
</Table.Row>

<Table.Body>
{cvExperiences.map(cvExperiences =>(

<Table.Row>

<Table.Cell>{cvExperiences.cvExperienceCompanyName}</Table.Cell>
<Table.Cell>{cvExperiences.cvExperiencePosition}</Table.Cell>
<Table.Cell>{cvExperiences.cvExperienceStartDate}</Table.Cell>
<Table.Cell>{cvExperiences.cvExperienceLeaveDate}</Table.Cell>
<Table.Cell><Button  onClick={()=> deleteCvExperience(cvExperiences.cvExperienceId)} color="red" floated ="right">Sil</Button></Table.Cell>
<Table.Cell>  <Link to={`/candidateprofile/experienceupdate/${cvExperiences.cvExperienceId}`}>  <Button color="orange" floated ="right">Güncelle</Button> </Link></Table.Cell>

</Table.Row>

))}

</Table.Body>

<Button as ={NavLink} to = {`/candidateprofile/cv/${cvId}/cvexperiencesadd`} >Ekle</Button>
</Table>
            </p>
          </div>
  
          <div
            className={toggleState === 3 ? "content  active-content" : "content"}
          >
            <h2>Content 3</h2>
            <hr />
            <p>
            <Table celled>

<Table.Row>
    
    <Table.HeaderCell>Link</Table.HeaderCell>
  
    
    
   
</Table.Row>

<Table.Body>

{cvLinks.map(cvLinks =>(
<Table.Row>

<Table.Cell>{cvLinks.linkName}</Table.Cell>
<Table.Cell><Button  onClick={()=> deleteCvLink(cvLinks.cvLinkId)} color="red" floated ="right">Sil</Button></Table.Cell>
<Table.Cell>  <Link to={`/candidateprofile/linkupdate/${cvLinks.cvLinkId}`}>  <Button color="orange" floated ="right">Güncelle</Button> </Link></Table.Cell>



</Table.Row>
))}
</Table.Body>
<Button  as ={NavLink} to = {`/candidateprofile/cv/${cvId}/cvlinksadd`} >Ekle</Button>
</Table>
            </p>
          </div>

          <div
            className={toggleState === 4 ? "content  active-content" : "content"}
          >
            <h2>Content 4</h2>
            <hr />
            <p>
            <Table celled>

<Table.Row>
    <Table.HeaderCell>Dil Adı</Table.HeaderCell>
    <Table.HeaderCell>Seviyesi</Table.HeaderCell>
   
    
    
   
</Table.Row>

<Table.Body>
{cvLanguages.map(cvLanguages =>(

<Table.Row>

<Table.Cell>{cvLanguages.cvLanguageName}</Table.Cell>
<Table.Cell>{cvLanguages.cvLanguageLevel}</Table.Cell>
<Table.Cell><Button  onClick={()=> deleteCvLanguage(cvLanguages.cvLanguageId)} color="red" floated ="right">Sil</Button></Table.Cell>
<Table.Cell>  <Link to={`/candidateprofile/languageupdate/${cvLanguages.cvLanguageId}`}>  <Button color="orange" floated ="right">Güncelle</Button> </Link></Table.Cell>



</Table.Row>
))}
</Table.Body>
<Button  as ={NavLink} to = {`/candidateprofile/cv/${cvId}/cvlanguagesadd`} >Ekle</Button>
</Table>
            </p>
          </div>
          <div
            className={toggleState === 5 ? "content  active-content" : "content"}
          >
            <h2>Content 5</h2>
            <hr />
            <p>
            <Table celled>

<Table.Row>
    <Table.HeaderCell>Dil Adı</Table.HeaderCell>
    <Table.HeaderCell>Seviyesi</Table.HeaderCell>
   
    
    
   
</Table.Row>

<Table.Body>
{cvProgrammingLanguages.map(cvProgrammingLanguages =>(
<Table.Row>

<Table.Cell>{cvProgrammingLanguages.cvProgrammingLanguageName}</Table.Cell>
<Table.Cell>{cvProgrammingLanguages.cvProgrammingLanguageLevel}</Table.Cell>
<Table.Cell><Button  onClick={()=> deleteCvProgrammingLanguage(cvProgrammingLanguages.cvProgrammingLanguageId)} color="red" floated ="right">Sil</Button></Table.Cell>
<Table.Cell>  <Link to={`/candidateprofile/programminglanguageupdate/${cvProgrammingLanguages.cvProgrammingLanguageId}`}>  <Button color="orange" floated ="right">Güncelle</Button> </Link></Table.Cell>


</Table.Row>
))}
</Table.Body>
<Button as ={NavLink} to = {`/candidateprofile/cv/${cvId}/cvprogramminglanguagesadd`} >Ekle</Button>
</Table>
            </p>
          </div>
          <div
            className={toggleState === 6 ? "content  active-content" : "content"}
          >
            <h2>Content 6</h2>
            <hr />
            <p>
            <Table celled>

<Table.Row>
    <Table.HeaderCell>Açıklamalar</Table.HeaderCell>
   
   
    
    
   
</Table.Row>
<Table.Body>
{cvDetails.map(cvDetails =>(
  <Table.Row>
    

<Table.Cell>{cvDetails.cvDetailsField}</Table.Cell>
<Table.Cell><Button  onClick={()=> deleteCvDetails(cvDetails.cvDetailsId)} color="red" floated ="right">Sil</Button></Table.Cell>
<Table.Cell>  <Link to={`/candidateprofile/detailsupdate/${cvDetails.cvDetailsId}`}>  <Button color="orange" floated ="right">Güncelle</Button> </Link></Table.Cell>



</Table.Row>
  
))}
</Table.Body>
<Button as ={NavLink} to = {`/candidateprofile/cv/${cvId}/cvdetailsadd`} >Ekle</Button>

</Table>
            </p>
          </div>
        </div>
      </div>
      

      

        
    )
}
