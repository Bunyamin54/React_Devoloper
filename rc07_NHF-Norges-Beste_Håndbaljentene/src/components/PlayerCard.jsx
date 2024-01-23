import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const PlayerCard = ({name, img, statistic}) => {
  return (
    <Col>

      <Card>
        <Card.Img variant="top" src={img} />

        <Card.Footer>
          <Card.Title>Card title</Card.Title>
        </Card.Footer>
      </Card>

    </Col>
  );
};

export default PlayerCard;
