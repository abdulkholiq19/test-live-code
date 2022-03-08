import React from 'react';
import {
  Card,
  Row,
  Col
} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faCircleDot } from '@fortawesome/free-solid-svg-icons';

export const ChatComponent = () => {
  return (
    <div>
      {Array.from({ length: 5 }).map((_, idx) => (
        <Card className="my-3 shadow">
          <Row>
            <Col sm="auto">
              <Card.Body
                className="p-1"
                style={{
                  width: '80px'
                }}
              >
                <Card.Img
                  variant="top"
                  src="https://qph.fs.quoracdn.net/main-thumb-1278318002-200-ydzfegagslcexelzgsnplcklfkienzfr.jpeg"
                  style={{
                    width: '100%'
                  }}
                  />
              </Card.Body>
            </Col>
            <Col className="p-0">
              <Card.Body className="px-0 py-2">
                <Card.Text className="h5"><b>Catherine</b></Card.Text>
                <Card.Text className="h5"><FontAwesomeIcon size="xs" icon={faCircleDot} className="text-success"/> &nbsp;Online</Card.Text>
              </Card.Body>
            </Col>
            <Col sm="auto" className="d-flex justify-content-end px-4">
              <FontAwesomeIcon size="2x" icon={faEllipsis} className="text-primary"/>
            </Col>
          </Row>
        </Card>
      ))}
    </div>
  )
}
