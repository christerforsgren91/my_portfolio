import React, { Component } from 'react'
import { Container, List, Image } from 'semantic-ui-react'
import CvInfo from './CvInfo'
import axios from 'axios'

class CV extends Component {
  state = {
    cv: [],
    } 
    componentDidMount() {
      axios.get('./data/cv.json').then((response) => {
        this.setState({ cv: response.data})
      })
    }

  render() {
    const { cv } = this.state
    let cvList = cv.map((cv) => {
      return (
        <div id={`cv-${cv.id}`} key={cv.id}>
          <CvInfo cv={cv}/>
        </div>
      )
    })
      
    return (
      <Container>
        <h1 id='cv-header'>Christer Forsgren<Image src='img/kenta.jpg' size='tiny' floated='right'/></h1>
        <List>{cvList}</List>
      </Container>
    )
  }
}


  


export default CV