import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { NavLink } from 'react-router-dom';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import ChartSmallDoughnutChart1 from 'views/interface/plugins/chart/ChartSmallDoughnutChart1';
import BlogGrid from 'views/pages/blog/BlogGrid';
import BlogHome from 'views/pages/blog/BlogHome';     
import BlogDetail from 'views/pages/blog/BlogDetail';
import CarouselFlow from 'views/interface/plugins/carousel/CarouselFlow';
import CarouselSingle from 'views/interface/plugins/carousel/CarouselSingle';
import 'intro.js/introjs.css';                          
import { ThumbnailsIconContent } from 'views/blocks/thumbnails/ThumbnailsIconContent';
import { Helmet } from 'react-helmet';
import PlayerBasic from 'views/interface/plugins/player/PlayerBasic';

const DashboardsDefault = () => {
  const title = 'Dashboard';
  const description = 'Default Dashboard';
  return (
    <>
    <HtmlHead title={title} description={description} />
    <Helmet>
        <link rel="canonical" href="/home">
        </link>
    </Helmet>

    <BlogDetail/>

    <Row>
        <h2 className="small-title">Extend Your Knowledge</h2>
        <Col md="4" className="mb-3">
          <Card className="sh-13">
            <Card.Body className="py-0 d-flex align-items-center">
              <ChartSmallDoughnutChart1 />
            </Card.Body>
          </Card>
        </Col>
        <Col md="4" className="mb-3">
          <Card className="sh-13">
            <Card.Body className="py-0 d-flex align-items-center">
              <ChartSmallDoughnutChart1 />
            </Card.Body>
          </Card>
        </Col>
        <Col md="4" className="mb-3">
          <Card className="sh-13">
            <Card.Body className="py-0 d-flex align-items-center">
              <ChartSmallDoughnutChart1 />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md="4" className="mb-3">
          <Card className="sh-13">
            <Card.Body className="py-0 d-flex align-items-center">
              <ChartSmallDoughnutChart1 />
            </Card.Body>
          </Card>
        </Col>
        <Col md="4" className="mb-3">
          <Card className="sh-13">
            <Card.Body className="py-0 d-flex align-items-center">
              <ChartSmallDoughnutChart1 />
            </Card.Body>
          </Card>
        </Col>
        <Col md="4" className="mb-3">
          <Card className="sh-13">
            <Card.Body className="py-0 d-flex align-items-center">
              <ChartSmallDoughnutChart1 />
            </Card.Body>
          </Card>
        </Col>
    </Row>

    <h2 className="small-title">Blogs</h2> 
    <BlogGrid/>

    <Row>
        <Col lg="4" className="mb-5">
          <h2 className="small-title">Logs</h2>
          <Card className="sh-40 h-lg-100-card">
            <Card.Body className="mb-n2 scroll-out h-100">
              <OverlayScrollbarsComponent options={{ scrollbars: { autoHide: 'leave' }, overflowBehavior: { x: 'hidden', y: 'scroll' } }} className="h-100">
                <Row className="g-0 mb-2">
                  <Col xs="auto">
                    <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                      <div className="sh-3">
                        <CsLineIcons icon="circle" className="text-primary align-top" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                      <div className="d-flex flex-column">
                        <div className="text-alternate mt-n1 lh-1-25">New user registiration</div>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="g-0 mb-2">
                  <Col xs="auto">
                    <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                      <div className="sh-3">
                        <CsLineIcons icon="square" className="text-secondary align-top" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                      <div className="d-flex flex-column">
                        <div className="text-alternate mt-n1 lh-1-25">Product out of stock: Breadstick</div>
                      </div>
                    </div>
                  </Col>
              
                </Row>
                <Row className="g-0 mb-2">
                  <Col xs="auto">
                    <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                      <div className="sh-3">
                        <CsLineIcons icon="triangle" className="text-tertiary align-top" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                      <div className="d-flex flex-column">
                        <div className="text-alternate mt-n1 lh-1-25">Category page returned an error</div>
                      </div>
                    </div>
                  </Col>
                
                </Row>
                <Row className="g-0 mb-2">
                  <Col xs="auto">
                    <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                      <div className="sh-3">
                        <CsLineIcons icon="hexagon" className="text-quaternary align-top" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                      <div className="d-flex flex-column">
                        <div className="text-alternate mt-n1 lh-1-25">14 products added</div>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="g-0 mb-2">
                  <Col xs="auto">
                    <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                      <div className="sh-3">
                        <CsLineIcons icon="hexagon" className="text-quaternary align-top" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                      <div className="d-flex flex-column">
                        <div className="text-alternate mt-n1 lh-1-25">New sale: Soda Bread</div>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="g-0 mb-2">
                  <Col xs="auto">
                    <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                      <div className="sh-3">
                        <CsLineIcons icon="square" className="text-secondary align-top" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                      <div className="d-flex flex-column">
                        <div className="text-alternate mt-n1 lh-1-25">Product out of stock: Breadstick</div>
                      </div>
                    </div>
                  </Col>
                  
                </Row>
                <Row className="g-0 mb-2">
                  <Col xs="auto">
                    <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                      <div className="sh-3">
                        <CsLineIcons icon="triangle" className="text-tertiary align-top" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                      <div className="d-flex flex-column">
                        <div className="text-alternate mt-n1 lh-1-25">Product page returned an error</div>
                      </div>
                    </div>
                  </Col>
                  
                </Row>
                <Row className="g-0 mb-2">
                  <Col xs="auto">
                    <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                      <div className="sh-3">
                        <CsLineIcons icon="hexagon" className="text-quaternary align-top" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                      <div className="d-flex flex-column">
                        <div className="text-alternate mt-n1 lh-1-25">New sale: Steirer Brot</div>
                      </div>
                    </div>
                  </Col>
                  
                </Row>
                <Row className="g-0 mb-2">
                  <Col xs="auto">
                    <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                      <div className="sh-3">
                        <CsLineIcons icon="hexagon" className="text-quaternary align-top" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                      <div className="d-flex flex-column">
                        <div className="text-alternate mt-n1 lh-1-25">Recived a support ticket</div>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="g-0 mb-2">
                  <Col xs="auto">
                    <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                      <div className="sh-3">
                        <CsLineIcons icon="hexagon" className="text-quaternary align-top" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                      <div className="d-flex flex-column">
                        <div className="text-alternate mt-n1 lh-1-25">Recived a support ticket</div>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="g-0 mb-2">
                  <Col xs="auto">
                    <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                      <div className="sh-3">
                        <CsLineIcons icon="hexagon" className="text-quaternary align-top" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                      <div className="d-flex flex-column">
                        <div className="text-alternate mt-n1 lh-1-25">Recived a comment</div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </OverlayScrollbarsComponent>
            </Card.Body>
          </Card>
        </Col>

        <Col lg="8" className="mb-5">
          <h2 className="small-title">Categories</h2>
          <Row className="g-2">
            <Col xs="6" xl="4" className="sh-19">
              <Card className="h-100 hover-scale-up" id="introThird">
                <Card.Body className="text-center">
                  <NavLink to="#">
                    <CsLineIcons icon="cupcake" className="text-primary" />
                    <p className="heading mt-3 text-body">Cupcakes</p>
                    <div className="text-extra-small fw-medium text-muted">14 PRODUCTS</div>
                  </NavLink>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="6" xl="4" className="sh-19">
              <Card className="h-100 hover-scale-up">
                <Card.Body className="text-center">
                  <NavLink to="#">
                    <CsLineIcons icon="loaf" className="text-primary" />
                    <p className="heading mt-3 text-body">Breads</p>
                    <div className="text-extra-small fw-medium text-muted">3 PRODUCTS</div>
                  </NavLink>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="6" xl="4" className="sh-19">
              <Card className="h-100 hover-scale-up">
                <Card.Body className="text-center">
                  <NavLink to="#">
                    <CsLineIcons icon="radish" className="text-primary" />
                    <p className="heading mt-3 text-body">Vegetables</p>
                    <div className="text-extra-small fw-medium text-muted">8 PRODUCTS</div>
                  </NavLink>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="6" xl="4" className="sh-19">
              <Card className="h-100 hover-scale-up">
                <Card.Body className="text-center">
                  <NavLink to="#">
                    <CsLineIcons icon="pear" className="text-primary" />
                    <p className="heading mt-3 text-body">Fruits</p>
                    <div className="text-extra-small fw-medium text-muted">9 PRODUCTS</div>
                  </NavLink>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="6" xl="4" className="sh-19">
              <Card className="h-100 hover-scale-up">
                <Card.Body className="text-center">
                  <NavLink to="#">
                    <CsLineIcons icon="loaf" className="text-primary" />
                    <p className="heading mt-3 text-body">Mushrooms</p>
                    <div className="text-extra-small fw-medium text-muted">3 PRODUCTS</div>
                  </NavLink>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="6" xl="4" className="sh-19">
              <Card className="h-100 hover-scale-up">
                <Card.Body className="text-center">
                  <NavLink to="#">
                    <CsLineIcons icon="water" className="text-primary" />
                    <p className="heading mt-3 text-body">Drinks</p>
                    <div className="text-extra-small fw-medium text-muted">4 PRODUCTS</div>
                  </NavLink>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
    </Row>

    <Row>
        <h2 className="small-title">Testimonials</h2>
        <BlogHome/>
    </Row>
    <Row>
        <h2 className="small-title">Admission Procedure</h2>
        <CarouselSingle/>
    </Row>
    <Row>
        <h2 className="small-title">Our Partners</h2>
        <CarouselFlow/>
    </Row>

    <h2 className="small-title">Our Courses</h2>
    <ThumbnailsIconContent/>

    <Row>
        <h2 className="small-title">Videos</h2>
        <PlayerBasic/>
    </Row>
    </>
  );
};

export default DashboardsDefault;
