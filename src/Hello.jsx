import React from 'react'
import { Container, Header, Image } from 'semantic-ui-react'

const Hello = () => {
  return (
    <Container text>
      <Header id='hello' textAlign='center' >My Journey Through Coding</Header>
      <Image src='/img/aoustronat.png' size='big' centered/>
    </Container>
  )
}

export default Hello