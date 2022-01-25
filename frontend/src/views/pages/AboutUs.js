import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import HtmlHead from 'components/html-head/HtmlHead';
import { Helmet } from 'react-helmet';
import ContextMenuBasic from 'views/interface/plugins/context-menu/ContextMenuBasic';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import { h2 } from 'react-router-dom';
import ChartDoughnut from 'views/interface/plugins/chart/ChartDoughnut';

const AboutUs = () => {
  const title = 'About Us';
  const description = 'About Us';

  return (
    <>
      <HtmlHead title={title} description={description} />
      <Helmet>
        <link rel="canonical" href="/about_us">
        </link>
      </Helmet>
      {/* Title Start */}
      <div className="page-title-container">
        <h1 className="mb-0 pb-0 display-4">{title}</h1>
      </div>
      {/* Title End */}

      <img alt="detail" src='/img/product/large/banner.jpeg' className="responsive border-0 rounded mb-5 w-100 sh-50" />
      <Card body className="mb-5">
        <h2 className="small-title">Inner Title</h2>
        <p className="mb-0">
          Icing sesame snaps cake muffin lollipop carrot cake chocolate cake powder. Pie tart cotton candy pastry. Icing chocolate powder pie bear claw
          jelly-o cake marshmallow biscuit. Wafer chupa chups tart topping tiramisu. Icing cake donut. Topping candy canes fruitcake. Brownie danish cake.
          Marshmallow donut sweet roll. Wafer tootsie roll gingerbread croissant ice cream. Sweet roll ice cream marzipan croissant soufflé fruitcake.
          Soufflé bonbon cookie. Jujubes ice cream cotton candy tootsie roll sweet.
        </p>
      </Card>

      <h2 className="small-title">Our Values</h2>
      <Row xxl="3">
        <ContextMenuBasic/>
        <ContextMenuBasic/>
        <ContextMenuBasic/>
      </Row>

      <h2 className="small-title">Timeline</h2>
      <Row className="mb-5">
        <Card>
        <Card.Body>
          <Row className="g-0">
            <Col xs="auto" className="sw-5 d-flex flex-column justify-content-center align-items-center position-relative">
              <div className="w-100 d-flex h-0" />
              <div className="sw-5 sh-5 rounded-xl d-flex flex-shrink-0 justify-content-center align-items-center">
                <div className="bg-gradient-light sw-5 sh-5 rounded-xl">
                  <div className="text-white d-flex justify-content-center align-items-center h-100">
                    <CsLineIcons icon="cupcake" />
                  </div>
                </div>
              </div>
              <div className="w-100 d-flex h-100 justify-content-center position-relative">
                <div className="line-w-1 bg-separator h-100 position-absolute" />
              </div>
            </Col>
            <Col className="mb-4 ps-4">
              <div className="h-100">
                <div className="d-flex flex-column justify-content-start">
                  <div className="d-flex flex-column">
                    <Button variant="link" className="p-0 pt-1 heading text-start">
                      Powder Sesame Snaps Cupcake
                    </Button>
                    <div className="text-alternate">06.11.2020</div>
                    <div className="text-muted mt-1">
                      Jujubes tootsie roll liquorice cake jelly beans pudding gummi bears chocolate cake donut. Jelly-o sugar plum fruitcake bonbon bear claw cake
                      cookie chocolate bar. Tiramisu soufflé apple pie.
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="g-0">
            <Col xs="auto" className="sw-5 d-flex flex-column justify-content-center align-items-center position-relative">
              <div className="w-100 d-flex h-0" />
              <div className="sw-5 sh-5 rounded-xl d-flex flex-shrink-0 justify-content-center align-items-center">
                <div className="bg-gradient-light sw-5 sh-5 rounded-xl">
                  <div className="text-white d-flex justify-content-center align-items-center h-100">
                    <CsLineIcons icon="pepper" />
                  </div>
                </div>
              </div>
              <div className="w-100 d-flex h-100 justify-content-center position-relative">
                <div className="line-w-1 bg-separator h-100 position-absolute" />
              </div>
            </Col>
            <Col className="mb-4 ps-4">
              <div className="h-100">
                <div className="d-flex flex-column justify-content-start">
                  <div className="d-flex flex-column">
                    <Button variant="link" className="p-0 pt-1 heading text-start">
                      Jujubes Wafer Topping Biscuit
                    </Button>
                    <div className="text-alternate">25.11.2020</div>
                    <div className="text-muted mt-1">
                      Jelly-o wafer sesame snaps candy canes. Danish dragée toffee bonbon. Jelly-o marshmallow cake oat cake caramels jujubes.
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="g-0">
            <Col xs="auto" className="sw-5 d-flex flex-column justify-content-center align-items-center position-relative">
              <div className="w-100 d-flex h-0" />
              <div className="sw-5 sh-5 rounded-xl d-flex flex-shrink-0 justify-content-center align-items-center">
                <div className="bg-gradient-light sw-5 sh-5 rounded-xl">
                  <div className="text-white d-flex justify-content-center align-items-center h-100">
                    <CsLineIcons icon="pepper" />
                  </div>
                </div>
              </div>
              <div className="w-100 d-flex h-100 justify-content-center position-relative">
                <div className="line-w-1 bg-separator h-100 position-absolute" />
              </div>
            </Col>
            <Col className="mb-4 ps-4">
              <div className="h-100">
                <div className="d-flex flex-column justify-content-start">
                  <div className="d-flex flex-column">
                    <Button variant="link" className="p-0 pt-1 heading text-start">
                      Jujubes Wafer Topping Biscuit
                    </Button>
                    <div className="text-alternate">25.11.2020</div>
                    <div className="text-muted mt-1">
                      Jelly-o wafer sesame snaps candy canes. Danish dragée toffee bonbon. Jelly-o marshmallow cake oat cake caramels jujubes.
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="g-0">
            <Col xs="auto" className="sw-5 d-flex flex-column justify-content-center align-items-center position-relative">
              <div className="w-100 d-flex h-0" />
              <div className="sw-5 sh-5 rounded-xl d-flex flex-shrink-0 justify-content-center align-items-center">
                <div className="bg-gradient-light sw-5 sh-5 rounded-xl">
                  <div className="text-white d-flex justify-content-center align-items-center h-100">
                    <CsLineIcons icon="pepper" />
                  </div>
                </div>
              </div>
              <div className="w-100 d-flex h-100 justify-content-center position-relative">
                <div className="line-w-1 bg-separator h-100 position-absolute" />
              </div>
            </Col>
            <Col className="mb-4 ps-4">
              <div className="h-100">
                <div className="d-flex flex-column justify-content-start">
                  <div className="d-flex flex-column">
                    <Button variant="link" className="p-0 pt-1 heading text-start">
                      Jujubes Wafer Topping Biscuit
                    </Button>
                    <div className="text-alternate">25.11.2020</div>
                    <div className="text-muted mt-1">
                      Jelly-o wafer sesame snaps candy canes. Danish dragée toffee bonbon. Jelly-o marshmallow cake oat cake caramels jujubes.
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="g-0">
            <Col xs="auto" className="sw-5 d-flex flex-column justify-content-center align-items-center position-relative">
              <div className="w-100 d-flex h-0" />
              <div className="sw-5 sh-5 rounded-xl d-flex flex-shrink-0 justify-content-center align-items-center">
                <div className="bg-gradient-light sw-5 sh-5 rounded-xl">
                  <div className="text-white d-flex justify-content-center align-items-center h-100">
                    <CsLineIcons icon="loaf" />
                  </div>
                </div>
              </div>
              <div className="w-100 d-flex h-100 justify-content-center position-relative" />
            </Col>
            <Col className="ps-4">
              <div className="h-100">
                <div className="d-flex flex-column justify-content-start">
                  <div className="d-flex flex-column">
                    <Button variant="link" className="p-0 pt-1 heading text-start">
                      Jelly Beans Lemon Danish
                    </Button>
                    <div className="text-alternate">29.11.2020</div>
                    <div className="text-muted mt-1">
                      Cake fruitcake oat cake. Muffin jelly bonbon croissant. Bonbon topping donut marshmallow carrot cake muffin.
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      </Row>

      <h2 className="small-title">Chart</h2>
      <Row xxl="2">            
        <Col xs="12" xl="6">
          <section className="scroll-section" id="doughnutChart">
            <Card body className="mb-5">
              <div className="sh-35">
                <ChartDoughnut />
              </div>
            </Card>
          </section>
        </Col>            
        <Col xs="12" xl="6">
          <section className="scroll-section" id="doughnutChart">
            <Card body className="mb-5">
              <div className="sh-35">
                <ChartDoughnut />
              </div>
            </Card>
          </section>
        </Col>
      </Row>

      <h2 className="small-title">Our Team</h2>
      <Row className="row-cols-1 row-cols-md-2 row-cols-xxl-3 g-3 mb-5">
        <Col>
          <Card>
            <Card.Body>
              <Row className="g-0 sh-6">
                <Col xs="auto">
                  <img src="/img/profile/profile-1.webp" className="card-img rounded-xl sh-6 sw-6" alt="thumb" />
                </Col>
                <Col>
                  <div className="d-flex flex-row ps-4 h-100 align-items-center justify-content-between">
                    <div className="d-flex flex-column">
                      <div>Blaine Cottrell</div>
                      <div className="text-small text-muted">Project Manager</div>
                    </div>
                    <div className="d-flex">
                      <Button variant="outline-primary" size="sm" className="ms-1">
                        Follow
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Row className="g-0 sh-6">
                <Col xs="auto">
                  <img src="/img/profile/profile-2.webp" className="card-img rounded-xl sh-6 sw-6" alt="thumb" />
                </Col>
                <Col>
                  <div className="d-flex flex-row ps-4 h-100 align-items-center justify-content-between">
                    <div className="d-flex flex-column">
                      <div>Cherish Kerr</div>
                      <div className="text-small text-muted">Development Lead</div>
                    </div>
                    <div className="d-flex">
                      <Button variant="outline-primary" size="sm" className="ms-1">
                        Follow
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Row className="g-0 sh-6">
                <Col xs="auto">
                  <img src="/img/profile/profile-3.webp" className="card-img rounded-xl sh-6 sw-6" alt="thumb" />
                </Col>
                <Col>
                  <div className="d-flex flex-row ps-4 h-100 align-items-center justify-content-between">
                    <div className="d-flex flex-column">
                      <div>Kirby Peters</div>
                      <div className="text-small text-muted">Accounting</div>
                    </div>
                    <div className="d-flex">
                      <Button variant="outline-primary" size="sm" className="ms-1">
                        Follow
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Row className="g-0 sh-6">
                <Col xs="auto">
                  <img src="/img/profile/profile-4.webp" className="card-img rounded-xl sh-6 sw-6" alt="thumb" />
                </Col>
                <Col>
                  <div className="d-flex flex-row ps-4 h-100 align-items-center justify-content-between">
                    <div className="d-flex flex-column">
                      <div>Olli Hawkins</div>
                      <div className="text-small text-muted">Client Relations Lead</div>
                    </div>
                    <div className="d-flex">
                      <Button variant="outline-primary" size="sm" className="ms-1">
                        Follow
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Row className="g-0 sh-6">
                <Col xs="auto">
                  <img src="/img/profile/profile-5.webp" className="card-img rounded-xl sh-6 sw-6" alt="thumb" />
                </Col>
                <Col>
                  <div className="d-flex flex-row ps-4 h-100 align-items-center justify-content-between">
                    <div className="d-flex flex-column">
                      <div>Luna Wigglebutt</div>
                      <div className="text-small text-muted">Customer Engagement</div>
                    </div>
                    <div className="d-flex">
                      <Button variant="outline-primary" size="sm" className="ms-1">
                        Follow
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Row className="g-0 sh-6">
                <Col xs="auto">
                  <img src="/img/profile/profile-6.webp" className="card-img rounded-xl sh-6 sw-6" alt="thumb" />
                </Col>
                <Col>
                  <div className="d-flex flex-row ps-4 h-100 align-items-center justify-content-between">
                    <div className="d-flex flex-column">
                      <div>Kerr Jackson</div>
                      <div className="text-small text-muted">Frontend Developer</div>
                    </div>
                    <div className="d-flex">
                      <Button variant="outline-primary" size="sm" className="ms-1">
                        Follow
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Row className="g-0 sh-6">
                <Col xs="auto">
                  <img src="/img/profile/profile-7.webp" className="card-img rounded-xl sh-6 sw-6" alt="thumb" />
                </Col>
                <Col>
                  <div className="d-flex flex-row ps-4 h-100 align-items-center justify-content-between">
                    <div className="d-flex flex-column">
                      <div>Kathryn Mengel</div>
                      <div className="text-small text-muted">Team Leader</div>
                    </div>
                    <div className="d-flex">
                      <Button variant="outline-primary" size="sm" className="ms-1">
                        Follow
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Row className="g-0 sh-6">
                <Col xs="auto">
                  <img src="/img/profile/profile-8.webp" className="card-img rounded-xl sh-6 sw-6" alt="thumb" />
                </Col>
                <Col>
                  <div className="d-flex flex-row ps-4 h-100 align-items-center justify-content-between">
                    <div className="d-flex flex-column">
                      <div>Joisse Kaycee</div>
                      <div className="text-small text-muted">Copywriter</div>
                    </div>
                    <div className="d-flex">
                      <Button variant="outline-primary" size="sm" className="ms-1">
                        Follow
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Row className="g-0 sh-6">
                <Col xs="auto">
                  <img src="/img/profile/profile-9.webp" className="card-img rounded-xl sh-6 sw-6" alt="thumb" />
                </Col>
                <Col>
                  <div className="d-flex flex-row ps-4 h-100 align-items-center justify-content-between">
                    <div className="d-flex flex-column">
                      <div>Zayn Hartley</div>
                      <div className="text-small text-muted">Visual Effect Designer</div>
                    </div>
                    <div className="d-flex">
                      <Button variant="outline-primary" size="sm" className="ms-1">
                        Follow
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h2 className="small-title">Our Achievements</h2>
      <Row className="g-2 row-cols-1 row-cols-xl-2 row-cols-xxl-4 mb-5">
        <Col>
          <Card className="h-100">
            <Card.Body>
              <div className="text-center">
                <img src="/img/illustration/icon-launch.webp" className="theme-filter" alt="launch" />
                <div className="d-flex flex-column sh-5">
                  <h2 to="/support/knowledge-base" className="heading stretched-link">
                    Application Launch
                  </h2>
                </div>
              </div>
              <div className="text-muted">Chocolate cake marshmallow bear claw sweet. Apple pie macaroon sesame snaps candy jelly pudding.</div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body>
              <div className="text-center">
                <img src="/img/illustration/icon-performance.webp" className="theme-filter" alt="performance" />
                <div className="d-flex flex-column sh-5">
                  <h2 to="/support/knowledge-base" className="heading stretched-link">
                    Performance Tweaks
                  </h2>
                </div>
              </div>
              <div className="text-muted">Cheesecake chocolate carrot cake pie lollipop lemon drops toffee lollipop.</div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body>
              <div className="text-center">
                <img src="/img/illustration/icon-configure.webp" className="theme-filter" alt="configure" />
                <div className="d-flex flex-column sh-5">
                  <h2 to="/support/knowledge-base" className="heading stretched-link">
                    Advanced Configuration
                  </h2>
                </div>
              </div>
              <div className="text-muted">Sweet roll apple pie tiramisu bonbon sugar plum muffin sesame snaps chocolate. Lollipop halvah powder.</div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body>
              <div className="text-center">
                <img src="/img/illustration/icon-analytics.webp" className="theme-filter" alt="analytics" />
                <div className="d-flex flex-column sh-5">
                  <h2 to="/support/knowledge-base" className="heading stretched-link">
                    Server Analytics
                  </h2>
                </div>
              </div>
              <div className="text-muted">Cake tart apple pie bear bonbon sugar plum muffin sesame snaps sweet roll gingerbread bonbon sugar.</div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default AboutUs;