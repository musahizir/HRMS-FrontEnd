
import React from 'react'
import {Menu,Image,Button} from 'semantic-ui-react'

export default function Navi() {
    return (
   

<div className ="navbar">


<Menu inverted stackable>

<Menu.Item>
<Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHtKUJe4t5YZcAt-_C0LLx3y_OCNafsZBVcaOHZngAocKg2hV7Hl54qFAPs6_rHeOV9gA&usqp=CAU" className="nav-image">

</Image>
</Menu.Item>
<Menu.Item >

<p > Home</p>
</Menu.Item>

<Menu.Menu position = "right">
<Menu.Item >

   <Button  color="grey" > <p > Sign In</p> </Button>
</Menu.Item>

<Menu.Item >

   <Button  color="grey" > <p> Sign Out</p> </Button>
</Menu.Item>
</Menu.Menu>

</Menu>

</div>
    )
}
