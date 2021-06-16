import React, { useState, useEffect } from 'react'
import { Icon, Menu, Table, Header } from 'semantic-ui-react'
import JobAdvertisementService from '../Services/jobAdvertisementService';


export default function JobAdvertisements() {

  const [jobAdvertisements, setJobAdvertisements] = useState([]);


  useEffect(()=>{

    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService.getJobAdvertisements().then(result=>setJobAdvertisements(result.data.data))
    
  },[])


  return (
    <div>

<Header as='h3' textAlign='left'>
      Job Advertisements
    </Header>

      <Table celled inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>Job Position</Table.HeaderCell>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>Open Position</Table.HeaderCell>
            <Table.HeaderCell>Application Ends</Table.HeaderCell>

          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdvertisements.map(jobAdvertisement =>(
            <Table.Row>

              <Table.Cell>{jobAdvertisement.employer.companyName}</Table.Cell>
              <Table.Cell>{jobAdvertisement.jobPosition.jobName}</Table.Cell>
              <Table.Cell>{jobAdvertisement.city.cityName}</Table.Cell>
              <Table.Cell>{jobAdvertisement.jobAdMaxOpenPosition}</Table.Cell>
              <Table.Cell>{jobAdvertisement.jobAdApplicationEnd}</Table.Cell>

            </Table.Row>
          ))
         }

    </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='5'>
              <Menu floated='right' pagination>
                <Menu.Item as='a' icon>
                  <Icon name='chevron left' />
                </Menu.Item>
                <Menu.Item as='a'>1</Menu.Item>
                <Menu.Item as='a'>2</Menu.Item>
                <Menu.Item as='a'>3</Menu.Item>
                <Menu.Item as='a'>4</Menu.Item>
                <Menu.Item as='a' icon>
                  <Icon name='chevron right' />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  )
}
