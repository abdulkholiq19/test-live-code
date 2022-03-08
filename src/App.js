import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavbarComponent } from './components/NavbarComponent';
import { StoryComponent } from './components/StoryComponent';
import { NewPostComponent } from './components/NewPostComponent';
import { ChatComponent } from './components/ChatComponent';
import {
  Row,
  Col,
  Container,
  Card
} from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSearch, faMessage, faBell, faGear } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <>
    <NavbarComponent />
    <Container fluid>
      <Row>
        <Col md={10}>
          <Row>
            <StoryComponent />
          </Row>
          <Row>
            <Container className="py-5 px-4">
              <Row>
                <Col sm="auto" className="d-flex justify-content-center align-items-center">
                  <Card className="py-3 rounded-pill">
                    <FontAwesomeIcon size="1x" icon={faSearch} className="text-secondary py-4 px-3"/>
                    <FontAwesomeIcon size="1x" icon={faMessage} className="text-secondary py-4 px-3"/>
                    <FontAwesomeIcon size="1x" icon={faBell} className="text-secondary py-4 px-3"/>
                    <FontAwesomeIcon size="1x" icon={faGear} className="text-secondary py-4 px-3"/>
                  </Card>
                </Col>
                <Col>
                  <h5 className="py-2 text-secondary"><b>New Post</b></h5>
                  <NewPostComponent />
                </Col>
                <Col>
                  <h5 className="py-2 text-secondary"><b>Chat</b></h5>
                  <ChatComponent />
                </Col>
              </Row>
            </Container>
          </Row>
        </Col>
        <Col md={2} className="py-4 bg-secondary">
          <h5 className="py-4 text-white"><b>Pages</b></h5>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default App;
