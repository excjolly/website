import React from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Glide from 'components/carousel/Glide';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const BlogGrid = () => {
  return (
    <>
      <Row>
        <Col>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-xl-3 g-2 mb-3">
            <Glide
            options={{
              perView: 3,    
              breakpoints: {
                400: {
                  perView: 1
                }
              }
            }}>
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <Glide.Item key={`basic.${i}`} >
              <Col className="mb-3">
                <Card>
                  <Card.Img src="/img/product/small/product-6.webp" className="card-img-top sh-16" alt="card image" />
                  <Card.Body>
                    <h5 className="heading mb-0">
                      <NavLink to="#" className="body-link stretched-link">
                        Tricks for Crispy Bread Baking
                      </NavLink>
                    </h5>
                  </Card.Body>
                  <Card.Footer className="border-0 pt-0">
                    <Row className="g-0">
                      <Col xs="auto" className="pe-3">
                        <CsLineIcons icon="star" size="15" className="text-primary me-2" />
                        <span className="align-middle">4.8</span>
                      </Col>
                      <Col>
                        <CsLineIcons icon="clock" size="15" className="text-primary me-2" />
                        <span className="align-middle">00:40</span>
                      </Col>
                    </Row>
                  </Card.Footer>
                </Card>
              </Col>
              </Glide.Item>
            ))}
          </Glide>
          </Row>
        </Col>

        {/* Sidebar Start */}
        <Col xl="4" xxl="3">
          <Row className="mb-5">
            {/* Mailing List Start */}
            <Col xs="12">
              <Card>
                <Card.Body className="pb-4 pt-3">
                  {/* <div className="cta-3">Ready to make bread?</div> */}
                  <div className="mb-2 pt-0 text-primary">Enquire Now</div>
                  {/* <div className="text-muted mb-3">Cheesecake chocolate carrot cake pie lollipop lemon drops.</div> */}
                  <Form.Control type="name" className="mb-1" placeholder="Name" />
                  <Form.Control type="email" className="mb-1" placeholder="E-mail" />
                  <Form.Control type="phone" className="mb-1" placeholder="Phone" />
                  <Form.Control
                    as="select"
                    className="mb-1"
                  >
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="black">Black</option>
                    <option value="orange">Orange</option>
                  </Form.Control>
                  <Button variant="primary" className="btn-icon btn-icon-start">
                    <CsLineIcons icon="chevron-right" /> <span>Submit</span>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        {/* Sidebar End */}
      </Row>
    </>
  );
};

export default BlogGrid;
