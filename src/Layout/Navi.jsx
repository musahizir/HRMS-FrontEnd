
import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import {Menu,Image} from 'semantic-ui-react'
import SignedIn from './SignedIn'
import SignedOut from './SignetOut'

export default function Navi() {

    const [isAuthenticated, setIsAuthenticated] = useState(false)

    function hamndleSignOut(params) {
        setIsAuthenticated(false)
        
    }

    return (
   

<div className ="navbar">


<Menu inverted stackable>

<Menu.Item>
<Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHtKUJe4t5YZcAt-_C0LLx3y_OCNafsZBVcaOHZngAocKg2hV7Hl54qFAPs6_rHeOV9gA&usqp=CAU" className="nav-image">

</Image>
</Menu.Item>

<Menu.Item as ={NavLink} to="/" >

<p > Ana Sayfa</p>
</Menu.Item>

<Menu.Menu position = "right">
<Menu.Item >

{isAuthenticated?<SignedIn signOut= {hamndleSignOut} />:<SignedOut/>}
  
</Menu.Item>


</Menu.Menu>

</Menu>

</div>
    )
}
