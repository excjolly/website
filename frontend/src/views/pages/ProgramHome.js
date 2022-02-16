import React from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { LAYOUT } from 'constants.js';
import HtmlHead from 'components/html-head/HtmlHead';
import Clamp from 'components/clamp';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import useCustomLayout from 'hooks/useCustomLayout';
import { Helmet } from 'react-helmet';
import { programs } from 'data/programs';

const BlogGrid = () => {
  const title = 'Blog Grid';
  const description = 'Blog Grid';
  let x;

  useCustomLayout({ layout: LAYOUT.Boxed });

  return (
    <>
      <HtmlHead title={title} description={description} />
      <Helmet>
        <link rel="canonical" href="/knowledge-centre/blogs">
        </link>
      </Helmet>
      {/* Title Start */}
      <div className="page-title-container">
        <h1 className="mb-0 pb-0 display-4">{title}</h1>
      </div>
      {/* Title End */}

      <Row className="g-5">
        <Col xl="8" xxl="9" className="mb-5">
          {/* Grid Start */}
          <Row className="row-cols-1 row-cols-sm-2 row-cols-xl-3 g-2 mb-5">
          { programs.map((b) => {
            x = '/programs/' + b.slug;
            return (
              <Col>
                <Card className="h-100">
                  <Card.Img src="/img/product/small/product-1.webp" className="card-img-top sh-19" alt="card image" />
                  <Card.Body>
                    <NavLink to={x} className="body-link stretched-link d-block heading sh-8 mb-0 sh-md-6 d-block h5 heading lh-1-5">
                      <Clamp tag="span" clamp="2">
                        {b.title}
                      </Clamp>
                    </NavLink>
                  </Card.Body>
                  <Card.Footer className="border-0 pt-0">
                    <Row className="g-0">
                      <Col xs="auto" className="pe-3">
                        <CsLineIcons icon="like" size="15" className="text-primary me-1" />
                        <span className="align-middle">452</span>
                      </Col>
                      <Col>
                        <CsLineIcons icon="clock" size="15" className="text-primary me-1" />
                        <span className="align-middle">30 Min</span>
                      </Col>
                    </Row>
                  </Card.Footer>
                </Card>
              </Col>              
              );
          })}

            
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
                  <div className="cta-3">Ready to make bread?</div>
                  <div className="mb-3 cta-3 text-primary">Join our email list!</div>
                  <div className="text-muted mb-3">Cheesecake chocolate carrot cake pie lollipop lemon drops.</div>
                  <Form.Control type="email" className="mb-2" placeholder="E-mail" />
                  <Button variant="primary" className="btn-icon btn-icon-start">
                    <CsLineIcons icon="chevron-right" /> <span>Join Now</span>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            {/* Mailing List End */}

            {/* Must Read Start */}
            <Col xs="12" className="mb-5">
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
            </Col>
            {/* Must Read End */}

            {/* Categories Start */}
            <Col sm="6" xl="12" className="mb-5">
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
            </Col>
            {/* Categories End */}

            {/* Tags Start */}
            <Col sm="6" xl="12">
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
            </Col>
            {/* Tags End */}
          </Row>
        </Col>
        {/* Sidebar End */}
      </Row>
    </>
  );
};

export default BlogGrid;