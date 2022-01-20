import React from 'react';
import { Badge, Button, Card, Col, Row } from 'react-bootstrap';
import Glide from 'components/carousel/Glide';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const CarouselSingle = () => {
  return (
    <Glide
      options={{
        gap: 0,
        peek: { before: 0, after: 10 },
        perView: 1,
      }}
    >
      {[1, 2, 3, 4].map((i) => (
        <Glide.Item key={`single.${i}`}>
          <Card className="mb-5" style = {{ height : "9rem"}}>
            <Row className="sh-10 g-0" style = {{ height : "9rem"}}>
              <Col className="d-flex align-items-center col-auto">
                <Card.Img src="/img/product/small/product-7.webp" alt="card image" className="card-img-horizontal sw-20" />
              </Col>
              <Col className="h-200 col" style = {{ height : "9rem"}}>
                <Row className="h-200 align-content-center g-0">
                  <Col xs="12" lg="5" className="d-flex align-items-center">
                    <p className="heading mb-0 ps-card" style = {{ padding : "3.6rem 1.8rem" }}>Sugar Plum Gummi</p>
                  </Col>
                  <Col xs="3" sm="4" lg="2" className="d-flex align-items-center mb-0">
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </Glide.Item>
      ))}
    </Glide>
  );
};

export default CarouselSingle;
