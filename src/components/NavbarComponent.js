import React from 'react';
import {
  Container,
  Row,
  Col,
  Image
} from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebook } from '@fortawesome/free-brands-svg-icons';
import {  faHome, faCircleChevronDown, faPlayCircle, faExpand } from '@fortawesome/free-solid-svg-icons';

export const NavbarComponent = () => {
  return (
    <>
      <Container fluid className="p-3 text-center bg-white">
        <Row>
          <Col xs={1} className="d-flex justify-content-center align-items-center">
            <FontAwesomeIcon size="3x" icon={faFacebook} className="text-primary"/>
          </Col>
          <Col xs={10}>
            <Row className="d-flex justify-content-center align-items-center">
              <Col xs={1} className="d-flex justify-content-center align-items-center">
                <FontAwesomeIcon size="md" icon={faHome} />
              </Col>
              <Col xs={1} className="d-flex justify-content-center align-items-center">
                <FontAwesomeIcon size="md" icon={faExpand} />
              </Col>
              <Col xs={1}>
                <Image
                  src="http://cdn.onlinewebfonts.com/svg/img_24787.png"
                  style={{ width: '40px'}}
                />
              </Col>
              <Col xs={1} className="d-flex justify-content-center align-items-center">
                <FontAwesomeIcon size="md" icon={faFacebook} />
              </Col>
              <Col xs={1} className="d-flex justify-content-center align-items-center">
                <FontAwesomeIcon size="md" icon={faPlayCircle} />
              </Col>
            </Row>
          </Col>
          <Col xs={1} className="d-flex justify-content-center align-items-center">
            <FontAwesomeIcon size="xl" icon={faCircleChevronDown} />
          </Col>
        </Row>
      </Container>
    </>
  )
}
