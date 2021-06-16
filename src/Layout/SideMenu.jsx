import React from 'react'
import { Menu } from 'semantic-ui-react'

export default function SideMenu() {
    return (
        <div className ="sideMenu">

<Menu inverted vertical size ="large">
        <Menu.Item
          name='companies'
          
        >
          
          <p>Companies</p>
        </Menu.Item>

        <Menu.Item
          name='candidates'
          
        >
          
          <p>Candidates</p>
        </Menu.Item>

        <Menu.Item
          name='jobAdvertisements'
          
        >
          
          <p>Job Advertisements</p>
        </Menu.Item>

        <Menu.Item
          name='employees'
          
        >
          
          <p>Employees</p>
        </Menu.Item>
      </Menu>
            
           

        </div>
    )
}
