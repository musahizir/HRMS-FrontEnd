import React from 'react'
import { Menu,Dropdown } from 'semantic-ui-react'

export default function SignedIn(props) {
    return (
        <div>
            <Menu.Item> 
                <Dropdown pointing = "top right" text = "Kullanıcı Adı" >
                    <Dropdown.Menu>
                        
                        <Dropdown.Item text ="Profil" icon = "info"></Dropdown.Item>
                        <Dropdown.Item onClick={props.signOut} text ="Çıkış Yap" icon ="sign-out"></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
