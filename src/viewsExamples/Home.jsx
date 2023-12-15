import React from 'react';
import { Card, Button } from 'react-bootstrap'; 

const Home = () => {
  const cards = [];
  
  for (let i = 0; i < 10; i++) {
    cards.push(
      <Card key={i} style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  }

  return (
    <>
      <h1>HOME</h1>
      <div>
      {cards}
      </div>
    </>
  );
};

export default Home;
