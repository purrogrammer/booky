import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';
import CustomNavbar from './CustomNavbar';

function HomePage() {
  return (
    <div> 
      <CustomNavbar />
      <Container>
        <Row>
          <div className='home-main'>
            <h1>Welcome to the Book Club!</h1>
            <p>This is a bunch of text and stuff. I'm just going to keep typing until I have enough text to fill up the space. I'm not sure how much text I need, but I'm just going to keep typing until I have enough. I hope this is enough text. I'm not sure what else to say. I'm just going to keep typing until I have enough text to fill up the space. I'm not sure how much text I need, but I'm just going to keep typing until I have enough. I hope this is enough text.</p>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;