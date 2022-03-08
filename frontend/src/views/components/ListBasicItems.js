import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';


const ListBasicItems = ({featureItem}) => {
  return (
    <>
      <Card className="mb-2" style = {{ height : "6.2rem"}}>
        <Row className="g-0 sh-10" style = {{ height : "6.2rem"}}>
          <Col style = {{ height : "6.2rem"}}>
            <Card.Body className="d-flex flex-column pt-0 pb-0 h-100 justify-content-center">
              <div className="d-flex flex-column">
                <Button variant="link" className="p-0 stretched-link text-start">
                {featureItem[0]}
                </Button>
                {/* <div className="text-small text-muted text-truncate">Chocolate cake icing liquorice oat roll bar marzipan marzipan carrot.</div> */}
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <Card className="mb-2" style = {{ height : "6.2rem"}}>
        <Row className="g-0 sh-10" style = {{ height : "6.2rem"}}>
          <Col style = {{ height : "6.2rem"}}>
            <Card.Body className="d-flex flex-column pt-0 pb-0 h-100 justify-content-center">
              <div className="d-flex flex-column">
                <Button variant="link" className="p-0 stretched-link text-start">
                {featureItem[1]}
                </Button>
                {/* <div className="text-small text-muted text-truncate">Chocolate cake icing liquorice oat roll bar marzipan marzipan carrot.</div> */}
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <Card className="mb-2" style = {{ height : "6.2rem"}}>
        <Row className="g-0 sh-10" style = {{ height : "6.2rem"}}>
          <Col style = {{ height : "6.2rem"}}>
            <Card.Body className="d-flex flex-column pt-0 pb-0 h-100 justify-content-center">
              <div className="d-flex flex-column">
                <Button variant="link" className="p-0 stretched-link text-start">
                {featureItem[2]}
                </Button>
                {/* <div className="text-small text-muted text-truncate">Chocolate cake icing liquorice oat roll bar marzipan marzipan carrot.</div> */}
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <Card className="mb-2" style = {{ height : "6.2rem"}}>
        <Row className="g-0 sh-10" style = {{ height : "6.2rem"}}>
          <Col style = {{ height : "6.2rem"}}>
            <Card.Body className="d-flex flex-column pt-0 pb-0 h-100 justify-content-center">
              <div className="d-flex flex-column">
                <Button variant="link" className="p-0 stretched-link text-start">
                {featureItem[3]}
                </Button>
                {/* <div className="text-small text-muted text-truncate">Chocolate cake icing liquorice oat roll bar marzipan marzipan carrot.</div> */}
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <Card className="mb-2" style = {{ height : "6.2rem"}}>
        <Row className="g-0 sh-10" style = {{ height : "6.2rem"}}>
          <Col style = {{ height : "6.2rem"}}>
            <Card.Body className="d-flex flex-column pt-0 pb-0 h-100 justify-content-center">
              <div className="d-flex flex-column">
                <Button variant="link" className="p-0 stretched-link text-start">
                {featureItem[4]}
                </Button>
                {/* <div className="text-small text-muted text-truncate">Chocolate cake icing liquorice oat roll bar marzipan marzipan carrot.</div> */}
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <Card className="mb-2" style = {{ height : "6.2rem"}}>
        <Row className="g-0 sh-10" style = {{ height : "6.2rem"}}>
          <Col style = {{ height : "6.2rem"}}>
            <Card.Body className="d-flex flex-column pt-0 pb-0 h-100 justify-content-center">
              <div className="d-flex flex-column">
                <Button variant="link" className="p-0 stretched-link text-start">
                {featureItem[5]}
                </Button>
                {/* <div className="text-small text-muted text-truncate">Chocolate cake icing liquorice oat roll bar marzipan marzipan carrot.</div> */}
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default ListBasicItems;
