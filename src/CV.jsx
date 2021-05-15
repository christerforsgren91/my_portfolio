import React, { useState, useEffect } from 'react';
import { Container, List, Image } from 'semantic-ui-react';
import CvInfo from './CvInfo';
import axios from 'axios';

const CV = () => {
  const [cv, setCv] = useState([]);

  useEffect(() => {
    axios.get('./data/cv.json').then((response) => {
      setCv(response.data);
    });
  });

  let cvList = cv.map((cv) => {
    return (
      <div id={`cv-${cv.id}`} key={cv.id}>
        <CvInfo cv={cv} />
      </div>
    );
  });

  return (
    <Container>
      <h1 id="cv-header">
        Christer Forsgren
        <Image src="img/kenta.jpg" size="tiny" floated="right" />
      </h1>
      <List>{cvList}</List>
    </Container>
  );
};

export default CV;
