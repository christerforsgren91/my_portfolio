import React from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { NavLink, Link } from 'react-router-dom'

const Header = () => 
   (
    <Segment inverted>
      <Menu inverted secondary>
        <Menu.Item
        id='header'
        name='my portfolio'
        as={Link}
        to={{ pathname: './'}}
        />
        <Menu.Item
        id='about-tab'
        name='about me'
        as={NavLink}
        to={{ pathname: './about'}}
        />
        <Menu.Item
        id='projects-tab'
        name='my projects'
        as={NavLink}
        to={{ pathname: './projects'}}
        />
        <Menu.Item
        id='cv-tab'
        name='cv'
        as={NavLink}
        to={{ pathname: './cv'}}
        />
        <Menu.Item position='right'
        id='contact-tab'
        name='contact'
        as={NavLink}
        to={{ pathname: './contact'}}
        />
      </Menu>
    </Segment>
  )


export default Header