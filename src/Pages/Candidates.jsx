
import React, { useState, useEffect } from 'react'
import { Icon, Menu, Table, Header } from 'semantic-ui-react'
import CandidateService from '../Services/candidateService';

export default function Candidates() {


    const [candidates, setCandidates] = useState([]);

    useEffect(()=>{

        let candidateService = new CandidateService();
        candidateService.getCandidates().then(result=>setCandidates(result.data.data))

    },[])

    return (
        
            <div>

<Header textAlign='left' size="medium">
      İş Arayanlar
    </Header>
      <Table celled inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Ad</Table.HeaderCell>
            <Table.HeaderCell>Soyad</Table.HeaderCell>
            <Table.HeaderCell>Doğum Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
           

          </Table.Row>
        </Table.Header>

        <Table.Body>
          {candidates.map(candidate =>(
            <Table.Row>

              <Table.Cell>{candidate.firstName}</Table.Cell>
              <Table.Cell>{candidate.lastName}</Table.Cell>
              <Table.Cell>{candidate.birthYear}</Table.Cell>
              <Table.Cell>{candidate.email}</Table.Cell>
              

            </Table.Row>
          ))
         }

    </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='4'>
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
