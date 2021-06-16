import React from 'react'
import { Grid, Container } from 'semantic-ui-react'
import Employees from '../Pages/Employees'

import SideMenu from "./SideMenu"



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
                   <Employees/>
                   

                   </Grid.Column>
               </Grid.Row>
           </Grid>
           </Container>
            
                
            
        </div>
    )
}
