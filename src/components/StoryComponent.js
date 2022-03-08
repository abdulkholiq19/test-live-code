import React from 'react';

import {
  Row,
  Col,
  Container,
  Image,
  Card
} from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';


export const StoryComponent = () => {
  return (
    <div>
      <Container className="py-3">
        <h5 className="py-2 px-5 text-secondary"><b>Stories</b></h5>
        <Row>
          <Col sm="auto" className="d-flex justify-content-center align-items-center">
            <FontAwesomeIcon size="2x" icon={faCirclePlus} className="text-black"/>
          </Col>
          <Col>
            <Card
              className="card-story shadow">
              <Image
                variant="top"
                src="https://ambojafarm.com/wp-content/uploads/2020/05/default-png-9.png"
                className="img-story" alt="Card image"
                />
              <div
                className="image-overlay"
              >
                <Card.Img
                  src="https://qph.fs.quoracdn.net/main-thumb-1278318002-200-ydzfegagslcexelzgsnplcklfkienzfr.jpeg"
                  className="image-icon"
                  />
              </div>
            </Card>
          </Col>
          <Col>
            <Card
              className="card-story shadow">
              <Image
                variant="top"
                src="https://ambojafarm.com/wp-content/uploads/2020/05/default-png-9.png"
                className="img-story" alt="Card image"
                />
              <div
                className="image-overlay"
              >
                <Card.Img
                  src="https://qph.fs.quoracdn.net/main-thumb-1278318002-200-ydzfegagslcexelzgsnplcklfkienzfr.jpeg"
                  className="image-icon"
                  />
              </div>
            </Card>
          </Col>
          <Col>
            <Card
              className="card-story shadow">
              <Image
                variant="top"
                src="https://ambojafarm.com/wp-content/uploads/2020/05/default-png-9.png"
                className="img-story" alt="Card image"
                />
              <div
                className="image-overlay"
              >
                <Card.Img
                  src="https://qph.fs.quoracdn.net/main-thumb-1278318002-200-ydzfegagslcexelzgsnplcklfkienzfr.jpeg"
                  className="image-icon"
                  />
              </div>
            </Card>
          </Col>
          <Col>
            <Card
              className="card-story shadow">
              <Image
                variant="top"
                src="https://ambojafarm.com/wp-content/uploads/2020/05/default-png-9.png"
                className="img-story" alt="Card image"
                />
              <div
                className="image-overlay"
              >
                <Card.Img
                  src="https://qph.fs.quoracdn.net/main-thumb-1278318002-200-ydzfegagslcexelzgsnplcklfkienzfr.jpeg"
                  className="image-icon"
                  />
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
