import React, { useState, useEffect } from 'react'
import { Icon, Menu, Table, Header } from 'semantic-ui-react'
import CompanyService from '../Services/companyService';
import Test123 from './Test123';

export default function Companies() {

  const [companies, setCompanies] = useState([]);

  useEffect(() => {


    let companyService = new CompanyService();
    companyService.getCompanies().then(result => setCompanies(result.data.data))


  }, [])

  return (

    <div>
      <Header textAlign='left' size="medium">
        Şirketler
      </Header>
      <Table celled inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
            <Table.HeaderCell>Website</Table.HeaderCell>
            <Table.HeaderCell>Telefon Numarası</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            


          </Table.Row>
        </Table.Header>

        <Table.Body>
          {companies.map(employer => (
            
              
            
            <Table.Row>

              

              <Table.Cell>{employer.companyName}</Table.Cell>
              <Table.Cell>{employer.website}</Table.Cell>
              <Table.Cell>{employer.phoneNumber}</Table.Cell>
              <Table.Cell>{employer.email}</Table.Cell>
              

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
