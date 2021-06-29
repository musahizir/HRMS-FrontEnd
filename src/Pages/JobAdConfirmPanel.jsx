import React, { useState, useEffect } from 'react'
import {Button, Table} from 'semantic-ui-react'
import JobAdvertisementService from '../Services/jobAdvertisementService'

export default function JobAdConfirmPanel() {



    // let jobAdChangeConfirmedFalseToTrue = (jobAdId) => {

    //     let jobAdvertisementService = new JobAdvertisementService();
    //     jobAdvertisementService.jobAdChangeConfirmedFalseToTrue(jobAdId);
    //     // window.location.reload();
       
    // }
   

    let jobAdRemove = (jobAdId) =>{

        let jobAdvertisementService = new JobAdvertisementService();
        jobAdvertisementService.jobAdRemove(jobAdId)

        window.location.reload()

    }

  //   let jobAdchangePassiveToActive = (jobAdId) =>{

  //     let jobAdvertisementService = new JobAdvertisementService();
  //     jobAdvertisementService.jobAdchangePassiveToActive(jobAdId)


  // }
 

  let  jobAdChangeConfirmRequestTrueToFalse = (jobAdId) =>{

    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService.jobAdChangeConfirmRequestTrueToFalse(jobAdId)
    window.location.reload()


}

// let  jobAdAdd = (jobAdId) =>{

//   let jobAdvertisementService = new JobAdvertisementService();
//   jobAdvertisementService.jobAdChangeConfirmRequestTrueToFalse(jobAdId)
//   jobAdvertisementService.jobAdchangePassiveToActive(jobAdId)
//   jobAdvertisementService.jobAdChangeConfirmedFalseToTrue(jobAdId);
  

// }

const [isLoading, setIsLoading] = useState(false);

const AddButton = () =>{

  setIsLoading(true);

  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  wait(4000).then(json => {console.log(json); setIsLoading(false)} )
}

const wait=ms=>new Promise(resolve => setTimeout(resolve, ms));

let  jobAdAdd = (jobAdId) =>{

  let jobAdvertisementService = new JobAdvertisementService();
  jobAdvertisementService.jobAdChangeConfirmRequestTrueToFalse(jobAdId);
  wait(1000).then(() => jobAdvertisementService.jobAdchangePassiveToActive(jobAdId));
  wait(2*1000).then(() => jobAdvertisementService.jobAdChangeConfirmedFalseToTrue(jobAdId));
  wait(3*1000).then(()=> window.location.reload())
  
  

}

    
    const [jobAdvertisements, setJobAdvertisements] = useState([])

    useEffect(() => {
        
       let jobAdvertisementService = new JobAdvertisementService();

       jobAdvertisementService.getAllByJobAdIsConfirmedFalseAndConfirmRequestTrue().then((result)=> {setJobAdvertisements(result.data.data)})
       
        
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
        <Table.Cell><Button  onClick={()=> jobAdRemove(jobAd.jobAdId)} color="red" floated ="right">Sil</Button>
        <Button  onClick={()=> jobAdChangeConfirmRequestTrueToFalse(jobAd.jobAdId)} color="orange" floated ="right">Reddet</Button>
        <p>{  !isLoading &&  
        <Button className="btn btn-danger mr-2" onClick={()=> {  AddButton(); jobAdAdd(jobAd.jobAdId);}} color="green" floated ="right">Onayla</Button>}
        {  isLoading &&  
        <Button className="btn btn-danger mr-2" disabled color="green" floated ="right">Onaylanıyor... <i className="fas fa-spinner fa-spin"></i></Button>}
        </p>

        
        </Table.Cell>
      </Table.Row>  
      ))}
      
      {/* {jobAdChangeConfirmedFalseToTrue(jobAd.jobAdId); jobAdchangePassiveToActive(jobAd.jobAdId); jobAdChangeConfirmRequestTrueToFalse(jobAd.jobAdId);} */}
    </Table.Body>
  </Table>
        </div>
    )
}
