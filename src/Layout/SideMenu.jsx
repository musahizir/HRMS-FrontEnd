import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default function SideMenu() {
    return (
        <div className ="sideMenu">

<Menu inverted vertical size ="large">
        <Menu.Item
          name='companies'
          as = {NavLink} to="/companies"
        >
          
          <p>Şirketler</p>
        </Menu.Item>

        <Menu.Item
          name='candidates'
          as ={NavLink} to = "/candidates"
          
        >
          
          <p>İş Arayanlar</p>
        </Menu.Item>

        <Menu.Item
          name='jobAdvertisements'
          as = {NavLink} to="/jobAdvertisements"
        >
          
          <p>İş İlanları</p>
        </Menu.Item>

        <Menu.Item
          name='employees'
          as = {NavLink} to="/employees"
        >
          
          <p>Çalışanlar</p>
        </Menu.Item>
      </Menu>
            
           

        </div>
    )
}
