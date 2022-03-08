import React from 'react';
import {
  Card,
  Form,
  Button
} from "react-bootstrap"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faFileVideo, faLocationPin, faMusic, faFileZipper } from '@fortawesome/free-solid-svg-icons';

export const NewPostComponent = () => {
  return (
    <div>
      <Card className="rounded shadow">
        <Card.Body className="d-flex justify-content-center p-0">
          <FontAwesomeIcon size="xl" icon={faImage} className="text-secondary p-3"/>
          <FontAwesomeIcon size="xl" icon={faFileVideo} className="text-secondary p-3"/>
          <FontAwesomeIcon size="xl" icon={faLocationPin} className="text-secondary p-3"/>
          <FontAwesomeIcon size="xl" icon={faMusic} className="text-secondary p-3"/>
          <FontAwesomeIcon size="xl" icon={faFileZipper} className="text-secondary p-3"/>
        </Card.Body>
        <Card.Body className="p-0 px-5">
        <Form.Control
          as="textarea" rows={3}
          placeholder="New Post"
        />
        <div className="d-grid gap-2 py-3">
          <Button variant="outline-primary"><b>Publish</b></Button>
        </div>
        </Card.Body>
      </Card>
    </div>
  )
}
