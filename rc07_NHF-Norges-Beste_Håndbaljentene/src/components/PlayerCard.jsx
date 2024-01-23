import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const PlayerCard = ({name, img, statistic}) => {
  return (
    <Col>

      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />

        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>

    </Col>
  );
};

export default PlayerCard;
