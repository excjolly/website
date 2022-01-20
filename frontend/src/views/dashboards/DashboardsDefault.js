import React, { useState } from 'react';
import { Button, Row, Col, Card } from 'react-bootstrap';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { NavLink } from 'react-router-dom';
import { Steps } from 'intro.js-react';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import Glide from 'components/carousel/Glide';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import ChartLargeLineSales from 'views/interface/plugins/chart/ChartLargeLineSales';
import ChartLargeLineStock from 'views/interface/plugins/chart/ChartLargeLineStock';
import ChartSmallDoughnutChart1 from 'views/interface/plugins/chart/ChartSmallDoughnutChart1';
import BlogGrid from 'views/pages/blog/BlogGrid';
import BlogHome from 'views/pages/blog/BlogHome';     
import BlogDetail from 'views/pages/blog/BlogDetail';
import CarouselFlow from 'views/interface/plugins/carousel/CarouselFlow';
import CarouselSingle from 'views/interface/plugins/carousel/CarouselSingle';
import 'intro.js/introjs.css';                          
import { ThumbnailsIconContent } from 'views/blocks/thumbnails/ThumbnailsIconContent';
import { Helmet } from 'react-helmet';
import { ThumbnailsImagesVertical } from 'views/blocks/thumbnails/ThumbnailsImagesVertical';
import PlayerBasic from 'views/interface/plugins/player/PlayerBasic';

const DashboardsDefault = () => {
  const title = 'Dashboard';
  const description = 'Default Dashboard';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'dashboards', text: 'Dashboards' },
  ];

  const [tourEnabled, setTourEnabled] = useState(false);
  const tourSteps = [
    {
      element: '#introFirst',
      title: 'Fancy Charts',
      intro: 'Some charts over here!',
    },
    {
      element: '#introSecond',
      title: 'Product Card',
      intro: 'Here is a product card with buttons!',
    },
    {
      element: '#introThird',
      title: 'More Cards',
      intro: 'Category card with an icon!',
    },
  ];
  const tourOptions = {
    nextLabel: '<span>Next</span><i class="cs-chevron-right"></i>',
    prevLabel: '<i class="cs-chevron-left"></i><span>Prev</span>',
    skipLabel: '<i class="cs-close"></i>',
    doneLabel: '<i class="cs-check"></i><span>Done</span>',
    overlayOpacity: 0.5,
    exitOnOverlayClick: true,
    exitOnEsc: true,
  };
  return (
    <>
      <HtmlHead title={title} description={description} />
      <Helmet>
        <link rel="canonical" href="/dashboards/default">
        </link>
      </Helmet>

      {/* Tour Start */}
      {/* <Steps
        enabled={tourEnabled}
        steps={tourSteps}
        initialStep={0}
        options={tourOptions}
        onExit={() => {
          setTourEnabled(false);
        }}
      /> */}
      {/* Tour End */}

      {/* Title and Top Buttons Start */}

        {/* <Row> */}
          {/* Title Start */}
           {/* <Col md="7"> */}
            {/* <h1 className="mb-0 pb-0 display-4">{title}</h1> */}
            {/* <BreadcrumbList items={breadcrumbs} /> */}
          {/* </Col> */}
          {/* Title End */}

          {/* Top Buttons Start */}
           {/* <Col md="5" className="d-flex align-items-start justify-content-end">
             <h1>Course recommendation</h1> */}
            {/* <Button
              variant="outline-primary"
              className="btn-icon btn-icon-start btn-icon w-100 w-md-auto ms-1"
              onClick={() => {
                setTourEnabled(true);
              }}
            >
              <CsLineIcons icon="flag" /> <span>Take a Tour</span>
            </Button> */}
          {/* </Col> */}
          {/* Top Buttons End */}
        {/* </Row> */}
      {/* Title and Top Buttons End */}
      <Row>
        <BlogDetail/>
      </Row>

      <Row>
        {/* <h2 className="small-title">Extend Your Knowledge</h2> */}
        <Col md="4" className="mb-5">
          <Card className="sh-13">
            <Card.Body className="py-0 d-flex align-items-center">
              <ChartSmallDoughnutChart1 />
            </Card.Body>
          </Card>
        </Col>
        <Col md="4" className="mb-5">
          <Card className="sh-13">
            <Card.Body className="py-0 d-flex align-items-center">
              <ChartSmallDoughnutChart1 />
            </Card.Body>
          </Card>
        </Col>
        <Col md="4" className="mb-5">
          <Card className="sh-13">
            <Card.Body className="py-0 d-flex align-items-center">
              <ChartSmallDoughnutChart1 />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md="4" className="mb-5">
          <Card className="sh-13">
            <Card.Body className="py-0 d-flex align-items-center">
              <ChartSmallDoughnutChart1 />
            </Card.Body>
          </Card>
        </Col>
        <Col md="4" className="mb-5">
          <Card className="sh-13">
            <Card.Body className="py-0 d-flex align-items-center">
              <ChartSmallDoughnutChart1 />
            </Card.Body>
          </Card>
        </Col>
        <Col md="4" className="mb-5">
          <Card className="sh-13">
            <Card.Body className="py-0 d-flex align-items-center">
              <ChartSmallDoughnutChart1 />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <BlogGrid/>
      </Row>
      <Row>
        {/* Logs Start */}
        <Col lg="6" className="mb-5">
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
                  <Col xs="auto">
                    <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                      <div className="text-muted ms-2 mt-n1 lh-1-25">18 Dec</div>
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
                  <Col xs="auto">
                    <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                      <div className="text-muted ms-2 mt-n1 lh-1-25">15 Dec</div>
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
                  <Col xs="auto">
                    <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                      <div className="text-muted ms-2 mt-n1 lh-1-25">14 Dec</div>
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
                  <Col xs="auto">
                    <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                      <div className="text-muted ms-2 mt-n1 lh-1-25">14 Dec</div>
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
                  <Col xs="auto">
                    <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                      <div className="text-muted ms-2 mt-n1 lh-1-25">14 Dec</div>
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
                  <Col xs="auto">
                    <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                      <div className="text-muted ms-2 mt-n1 lh-1-25">15 Dec</div>
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
                  <Col xs="auto">
                    <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                      <div className="text-muted ms-2 mt-n1 lh-1-25">14 Dec</div>
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
                  <Col xs="auto">
                    <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                      <div className="text-muted ms-2 mt-n1 lh-1-25">13 Dec</div>
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
                  <Col xs="auto">
                    <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                      <div className="text-muted ms-2 mt-n1 lh-1-25">13 Dec</div>
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
                  <Col xs="auto">
                    <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                      <div className="text-muted ms-2 mt-n1 lh-1-25">13 Dec</div>
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
                  <Col xs="auto">
                    <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                      <div className="text-muted ms-2 mt-n1 lh-1-25">13 Dec</div>
                    </div>
                  </Col>
                </Row>
              </OverlayScrollbarsComponent>
            </Card.Body>
          </Card>
        </Col>
        {/* Logs End */}

        {/* Categories Start */}
        <Col lg="6" className="mb-5">
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
        {/* Categories End */}
      </Row>
      <Row>
        <h2 className="small-title">Categories</h2>
        <ThumbnailsImagesVertical/>
        {/* autoplay */}
        {/* portfolio home left  */}
      </Row>
      <Row>
        <h2 className="small-title">Categories</h2>
        <CarouselSingle/>
      </Row>
      <Row>
        <h2 className="small-title">Categories</h2>
        <CarouselFlow/>
      </Row>
      <Row>
        <h2 className="small-title">Categories</h2>
        <ThumbnailsIconContent/>
      </Row>
      <Row>
        <h2 className="small-title">Categories</h2>
        <PlayerBasic/>
      </Row>
    </>
  );
};

export default DashboardsDefault;
