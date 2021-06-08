import React from 'react'
import { Grid } from 'semantic-ui-react'
import Companies from '../Pages/Companies'
import Employees from '../Pages/Employees'
import JobAdvertisements from '../Pages/JobAdvertisements'
import SideMenu from "./SideMenu"
import Candidates from '../Pages/Candidates'


export default function MainDashboard() {
    return (
        <div>
           
           <Grid>
               <Grid.Row>
                   <Grid.Column width={4}>
                   <SideMenu/>
                   </Grid.Column>
                   <Grid.Column width={12}>
                   <Employees/>
                   <Companies/>
                   <JobAdvertisements/>
                   <Candidates/>

                   </Grid.Column>
               </Grid.Row>
           </Grid>

            
                
            
        </div>
    )
}
