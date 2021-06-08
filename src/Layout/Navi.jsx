import React from 'react'
import { Menu, Container } from 'semantic-ui-react'

export default function Navi() {
    return (
        <div>

            <Container>

                <Menu inverted size="large">
                    <Menu.Item
                        name='home'

                    >
                        Home
        </Menu.Item>


                    <Menu.Menu position='right'>
                        <Menu.Item
                            name='signup'

                        >
                            Sign Up
          </Menu.Item>

                        <Menu.Item
                            name='signup'

                        >
                            Sign In
          </Menu.Item>
                    </Menu.Menu>
                </Menu>
                </Container>
        </div>
    )
}
