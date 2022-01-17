import React from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { LAYOUT } from 'constants.js';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import Clamp from 'components/clamp';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import useCustomLayout from 'hooks/useCustomLayout';
import Glide from 'components/carousel/Glide';

const BlogGrid = () => {
  const title = 'Blog Grid';
  const description = 'Blog Grid';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'pages', text: 'Pages' },
    { to: 'pages/blog', text: 'Blog' },
  ];
  useCustomLayout({ layout: LAYOUT.Boxed });

  return (
    <>
      {/* Title Start */}
      {/* Title End */}
      <Row className="g-5">
        <Col xl="8" xxl="9" className="mb-5">
          {/* Grid Start */}
          <Row className="row-cols-1 row-cols-sm-2 row-cols-xl-3 g-2 mb-5">
            <Glide
            options={{
              perView: 3,
            }}>
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <Glide.Item key={`basic.${i}`} >
              <Col className="mb-5">
                <Card className="h-100">
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
            {/* <Col>
              <Card className="h-100">
                <Card.Img src="/img/product/small/product-2.webp" className="card-img-top sh-19" alt="card image" />
                <Card.Body>
                  <NavLink to="/pages/blog/detail" className="body-link stretched-link d-block heading sh-8 mb-0 sh-md-6 d-block h5 heading lh-1-5">
                    <Clamp tag="span" clamp="2">
                      14 Grim Facts About Sugar Industry
                    </Clamp>
                  </NavLink>
                </Card.Body>
                <Card.Footer className="border-0 pt-0">
                  <Row className="g-0">
                    <Col xs="auto" className="pe-3">
                      <CsLineIcons icon="like" size="15" className="text-primary me-1" />
                      <span className="align-middle">54</span>
                    </Col>
                    <Col>
                      <CsLineIcons icon="clock" size="15" className="text-primary me-1" />
                      <span className="align-middle">15 Min</span>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
            </Col> */}
            {/* <Col>
              <Card className="h-100">
                <Card.Img src="/img/product/small/product-3.webp" className="card-img-top sh-19" alt="card image" />
                <Card.Body>
                  <NavLink to="/pages/blog/detail" className="body-link stretched-link d-block heading sh-8 mb-0 sh-md-6 d-block h5 heading lh-1-5">
                    <Clamp tag="span" clamp="2">
                      Fresh Apple Cake Recipe for Absolute Starters
                    </Clamp>
                  </NavLink>
                </Card.Body>
                <Card.Footer className="border-0 pt-0">
                  <Row className="g-0">
                    <Col xs="auto" className="pe-3">
                      <CsLineIcons icon="like" size="15" className="text-primary me-1" />
                      <span className="align-middle">79</span>
                    </Col>
                    <Col>
                      <CsLineIcons icon="clock" size="15" className="text-primary me-1" />
                      <span className="align-middle">20 Min</span>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
            </Col>           */}
          </Row>
          <Row>
            <Col xs="12" className="text-center">
              {/* <Button size="xl" variant="outline-primary" className="sw-30">
                Load More
              </Button> */}
            </Col>
          </Row>
          {/* Grid End */}
        </Col>

        {/* Sidebar Start */}
        <Col xl="4" xxl="3">
          <Row>
            {/* Mailing List Start */}
            <Col xs="12" className="mb-5">
              <Card>
                <Card.Body>
                  {/* <div className="cta-3">Ready to make bread?</div> */}
                  <div className="mb-3 cta-3 text-primary">Enquire Now</div>
                  {/* <div className="text-muted mb-3">Cheesecake chocolate carrot cake pie lollipop lemon drops.</div> */}
                  <Form.Control type="name" className="mb-2" placeholder="Name" />
                  <Form.Control type="email" className="mb-2" placeholder="E-mail" />
                  <Form.Control type="phone" className="mb-2" placeholder="Phone" />
                  <Form.Control
                    as="select"
                    className="mb-2"
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
            {/* Mailing List End */}

            {/* Must Read Start */}
            {/* <Col xs="12" className="mb-5">
              <h2 className="small-title">Must Read</h2>
              <Row className="mb-n2">
                <Col md="6" xl="12" className="mb-2">
                  <Card className="sh-11 sh-sm-14">
                    <Row className="g-0 h-100">
                      <Col className="col-auto">
                        <img src="/img/product/small/product-3.webp" alt="user" className="card-img card-img-horizontal sw-10 sw-sm-14" />
                      </Col>
                      <Col>
                        <Card.Body className="d-flex flex-column pt-0 pb-0 h-100 justify-content-center">
                          <NavLink to="/pages/blog/detail" className="body-link stretched-link">
                            <Clamp tag="span" clamp="2">
                              A Complete Guide to Mix Dough for the Molds
                            </Clamp>
                          </NavLink>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <Col md="6" xl="12" className="mb-2">
                  <Card className="sh-11 sh-sm-14">
                    <Row className="g-0 h-100">
                      <Col className="col-auto">
                        <img src="/img/product/small/product-4.webp" alt="user" className="card-img card-img-horizontal sw-10 sw-sm-14" />
                      </Col>
                      <Col>
                        <Card.Body className="d-flex flex-column pt-0 pb-0 h-100 justify-content-center">
                          <NavLink to="/pages/blog/detail" className="body-link stretched-link">
                            <Clamp tag="span" clamp="2">
                              Apple Cake Recipe for Starters
                            </Clamp>
                          </NavLink>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <Col md="6" xl="12" className="mb-2">
                  <Card className="sh-11 sh-sm-14">
                    <Row className="g-0 h-100">
                      <Col className="col-auto">
                        <img src="/img/product/small/product-5.webp" alt="user" className="card-img card-img-horizontal sw-10 sw-sm-14" />
                      </Col>
                      <Col>
                        <Card.Body className="d-flex flex-column pt-0 pb-0 h-100 justify-content-center">
                          <NavLink to="/pages/blog/detail" className="body-link stretched-link">
                            <Clamp tag="span" clamp="2">
                              Basic Introduction to Bread Making
                            </Clamp>
                          </NavLink>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <Col md="6" xl="12" className="mb-2">
                  <Card className="sh-11 sh-sm-14">
                    <Row className="g-0 h-100">
                      <Col className="col-auto">
                        <img src="/img/product/small/product-7.webp" alt="user" className="card-img card-img-horizontal sw-10 sw-sm-14" />
                      </Col>
                      <Col>
                        <Card.Body className="d-flex flex-column pt-0 pb-0 h-100 justify-content-center">
                          <NavLink to="/pages/blog/detail" className="body-link stretched-link">
                            <Clamp tag="span" clamp="2">
                              Easy and Efficient Tricks for Baking Crispy Breads
                            </Clamp>
                          </NavLink>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
            </Col> */}
            {/* Must Read End */}

            {/* Categories Start */}
            {/* <Col sm="6" xl="12" className="mb-5">
              <h2 className="small-title">Categories</h2>
              <Card>
                <Card.Body>
                  <Row className="g-0">
                    <Col sm="6" className="mb-n2">
                      <NavLink to="/pages/blog/list" className="body-link d-block mb-2">
                        Anpan
                      </NavLink>
                      <NavLink to="/pages/blog/list" className="body-link d-block mb-2">
                        Arboud
                      </NavLink>
                      <NavLink to="/pages/blog/list" className="body-link d-block mb-2">
                        Arepa
                      </NavLink>
                      <NavLink to="/pages/blog/list" className="body-link d-block mb-2">
                        Bagel
                      </NavLink>
                    </Col>
                    <Col sm="6" className="mb-n2">
                      <NavLink to="/pages/blog/list" className="body-link d-block mb-2">
                        Kulcha
                      </NavLink>
                      <NavLink to="/pages/blog/list" className="body-link d-block mb-2">
                        Mohnflesserl
                      </NavLink>
                      <NavLink to="/pages/blog/list" className="body-link d-block mb-2">
                        Pan Dulce
                      </NavLink>
                      <NavLink to="/pages/blog/list" className="body-link d-block mb-2">
                        Rieska
                      </NavLink>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col> */}
            {/* Categories End */}

            {/* Tags Start */}
            {/* <Col sm="6" xl="12">
              <h2 className="small-title">Tags</h2>
              <Card>
                <Card.Body className="mb-n1">
                  <Button size="sm" variant="outline-primary" className="mb-1 me-1">
                    Food (12)
                  </Button>
                  <Button size="sm" variant="outline-primary" className="mb-1 me-1">
                    Baking (3)
                  </Button>
                  <Button size="sm" variant="outline-primary" className="mb-1 me-1">
                    Sweet (1)
                  </Button>
                  <Button size="sm" variant="outline-primary" className="mb-1 me-1">
                    Molding (3)
                  </Button>
                  <Button size="sm" variant="outline-primary" className="mb-1 me-1">
                    Pastry (5)
                  </Button>
                  <Button size="sm" variant="outline-primary" className="mb-1 me-1">
                    Healthy (7)
                  </Button>
                </Card.Body>
              </Card>
            </Col> */}
            {/* Tags End */}
          </Row>
        </Col>
        {/* Sidebar End */}
      </Row>
    </>
  );
};

export default BlogGrid;
