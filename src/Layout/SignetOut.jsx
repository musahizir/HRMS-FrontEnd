import React from 'react'
import {Button, Menu} from 'semantic-ui-react'

export default function SignetOut() {
    return (
        <div>
            <Menu.Item>
            <Button  color="grey" > <p> Kayıt Ol</p> </Button>
             <Button  color="grey" style={{marginLeft: "0.5em"}} > <p> Giriş Yap</p> </Button>
            </Menu.Item>
             
        </div>
    )
}
