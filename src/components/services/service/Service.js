import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../services.css"
const Service = ({ service }) => {
  const { name, img, details,id } = service;
  return (
    <div>
      <CardGroup className="">
        <Card className="border border-dark col bg-success mb-4">
          <Card.Img className="img-hight w-75 mx-auto border border-light rounded-3 mt-3" variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {details.slice(0, 100)}
            </Card.Text>
          </Card.Body>

          <Link to={`/details/${id}`}><Button className="w-50 mx-auto mb-3 w-sm-25" variant="outline-dark">More Details</Button></Link>

        </Card>
      </CardGroup>

    </div>
  );
};

export default Service;