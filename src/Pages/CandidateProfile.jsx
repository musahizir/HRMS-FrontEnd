import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import {Table, Button} from 'semantic-ui-react'
import CvService from '../Services/cvService'
import { Link } from 'react-router-dom';
import CvDetailsAdd from './Cv/CvDetailsAdd';


export default function CandidateProfile() {

    const [cvs, setCvs] = useState([])


    

useEffect(()=>{

  let cvService = new CvService();
  cvService.getAllByCandidateId().then(result=>setCvs(result.data.data))

},[])


    return (
        
            <div >
              
                <h1>Profile</h1>
  <Table celled>

    <Table.Row>
        <Table.HeaderCell>Cv Adı</Table.HeaderCell>
        <Table.HeaderCell>Durumu</Table.HeaderCell>
        <Table.HeaderCell>Düzenle & Sil</Table.HeaderCell>
       
    </Table.Row>

{cvs.map(cv=>(

  
  
  <Table.Row key = {cv.cvId}>
<Table.Cell >
{cv.cvName}
  </Table.Cell>
<Table.Cell>1</Table.Cell>
<Table.Cell>
  
<Link to={`/candidateprofile/cv/${cv.cvId}`}  >  <Button >Düzenle</Button></Link>
 </Table.Cell>

 
</Table.Row>



)

)
 
}

    
  </Table>
  <Button as ={NavLink} to= "/candidateprofile/cvadd"> Ekle</Button>
        </div>
    )

    
}
