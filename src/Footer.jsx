import React from 'react'
import { Header } from 'semantic-ui-react'

const Footer = () => {
  return (
    <footer>
      <Header id='footer'>Made with React {React.version}</Header>
    </footer>
  )
}

export default Footer