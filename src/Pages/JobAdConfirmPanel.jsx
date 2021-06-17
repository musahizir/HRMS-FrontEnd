import React, { useState, useEffect } from 'react'
import {Button, Table} from 'semantic-ui-react'
import JobAdvertisementService from '../Services/jobAdvertisementService'

export default function JobAdConfirmPanel() {



    let jobAdChangeConfirmedFalseToTrue = (jobAdId) => {

        let jobAdvertisementService = new JobAdvertisementService();
        jobAdvertisementService.jobAdChangeConfirmedFalseToTrue(jobAdId);
        window.location.reload();
       
    }

    let jobAdRemove = (jobAdId) =>{

        let jobAdvertisementService = new JobAdvertisementService();
        jobAdvertisementService.jobAdRemove(jobAdId)


    }

    
    const [jobAdvertisements, setJobAdvertisements] = useState([])

    useEffect(() => {
        
       let jobAdvertisementService = new JobAdvertisementService();

       jobAdvertisementService.getJobAdvertisementsNotConfirmed().then((result)=> {setJobAdvertisements(result.data.data)})
       
        
    }, [])

    return (
        <div>
         <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>  Şirket Adı  </Table.HeaderCell>
        <Table.HeaderCell>İş Pozisyonu</Table.HeaderCell>
        <Table.HeaderCell>Şehir</Table.HeaderCell>
        <Table.HeaderCell>Ekle & Sil</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
     {jobAdvertisements.map((jobAd,key)=> (
     <Table.Row key={key}>
        <Table.Cell>{jobAd.employer.companyName}</Table.Cell>
        <Table.Cell>{jobAd.jobPosition.jobName}</Table.Cell>
        <Table.Cell>{jobAd.city.cityName}</Table.Cell>
        <Table.Cell><Button onClick={()=> jobAdRemove(jobAd.jobAdId)} color="red" floated ="right">Sil</Button>
        <Button onClick={()=> jobAdChangeConfirmedFalseToTrue(jobAd.jobAdId)} color="green" floated ="right">Ekle</Button>
        </Table.Cell>
      </Table.Row>  
      ))}
      
      
    </Table.Body>
  </Table>
        </div>
    )
}
