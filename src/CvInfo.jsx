import React from 'react'
import { List } from 'semantic-ui-react'

const CvInfo = ({ cv }) => {
  return (
    <List>
      <List.Content>
      <List.Header><b>{cv.jobs}</b></List.Header>
      <List.Item>{cv.job}</List.Item>
      <List.Item>{cv.description}</List.Item>
      <List.Header><b>{cv.education}</b></List.Header>
      <List.Item>{cv.school}</List.Item>
      </List.Content>
    </List>

  )
}

export default CvInfo