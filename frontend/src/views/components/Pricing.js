import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const MiscellaneousPricing = () => {
  return (
    <>
      {/* Plans Start */}
      <h2 className="small-title">Pricing</h2>
      <div className="mb-5">
        <Row className="row-cols-1 row-cols-lg-3 g-2">
          <Col>
            <Card className="h-100 hover-scale-up">
              <Card.Body className="pb-0">
                <div className="d-flex flex-column align-items-center mb-4">
                  <div className="bg-gradient-light sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center mb-2">
                    <CsLineIcons icon="building-small" className="text-white" />
                  </div>
                  <div className="cta-4 text-primary mb-1">Team</div>
                  <div className="text-muted sh-3 line-through">$ 10.50</div>
                  <div className="display-4">$ 3.50</div>
                  <div className="text-small text-muted mb-1">User/Month</div>
                </div>
                <p className="text-alternate mb-4">
                  Jelly-o jelly oat cake cheesecake halvah. Cupcake sweet roll donut. Sesame snaps lollipop macaroon. Icing tiramisu oat cake pudding danish
                  gummies.
                </p>
              </Card.Body>
              <Card.Footer className="pt-0 border-0">
                <div className="mb-4">
                  <Row className="g-0 mb-2">
                    <Col xs="auto">
                      <div className="sw-3 me-1">
                        <CsLineIcons icon="user" className="d-inline-block text-primary align-top" size="17" />
                      </div>
                    </Col>
                    <Col className="lh-1-25 text-alternate">Single user</Col>
                  </Row>
                  <Row className="g-0 mb-2">
                    <Col xs="auto">
                      <div className="sw-3 me-1">
                        <CsLineIcons icon="help" className="d-inline-block text-primary align-top" size="17" />
                      </div>
                    </Col>
                    <Col className="lh-1-25 text-alternate">Forum support</Col>
                  </Row>
                  <Row className="g-0 mb-2">
                    <Col xs="auto">
                      <div className="sw-3 me-1">
                        <CsLineIcons icon="clipboard" className="d-inline-block text-primary align-top" size="17" />
                      </div>
                    </Col>
                    <Col className="lh-1-25 text-alternate">Access to library</Col>
                  </Row>
                  <Row className="g-0 mb-2">
                    <Col xs="auto">
                      <div className="sw-3 me-1">
                        <CsLineIcons icon="database" className="d-inline-block text-primary align-top" size="17" />
                      </div>
                    </Col>
                    <Col className="lh-1-25 text-alternate">1 GB disk space</Col>
                  </Row>
                </div>
                <div className="d-flex justify-content-center">
                  <Button variant="foreground" className="btn-icon btn-icon-start hover-outline stretched-link">
                    <CsLineIcons icon="chevron-right" /> <span>Purchase</span>
                  </Button>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card className="h-100 hover-scale-up">
              <Card.Body className="pb-0">
                <div className="d-flex flex-column align-items-center mb-4">
                  <div className="bg-gradient-light sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center mb-2">
                    <CsLineIcons icon="building" className="text-white" />
                  </div>
                  <div className="cta-4 text-primary mb-1">Company</div>
                  <div className="text-muted sh-3" />
                  <div className="display-4">$ 12.75</div>
                  <div className="text-small text-muted mb-1">User/Month</div>
                </div>
                <p className="text-alternate mb-4">
                  Danish brownie chocolate bar lollipop cookie tootsie roll candy canes. Jujubes lollipop cheesecake gummi bears cheesecake.
                </p>
              </Card.Body>
              <Card.Footer className="pt-0 border-0">
                <div className="mb-4">
                  <Row className="g-0 mb-2">
                    <Col xs="auto">
                      <div className="sw-3 me-1">
                        <CsLineIcons icon="user" className="d-inline-block text-primary align-top" size="17" />
                      </div>
                    </Col>
                    <Col className="lh-1-25 text-alternate">Up to 50 users</Col>
                  </Row>
                  <Row className="g-0 mb-2">
                    <Col xs="auto">
                      <div className="sw-3 me-1">
                        <CsLineIcons icon="support" className="d-inline-block text-primary align-top" size="17" />
                      </div>
                    </Col>
                    <Col className="lh-1-25 text-alternate">Direct support</Col>
                  </Row>
                  <Row className="g-0 mb-2">
                    <Col xs="auto">
                      <div className="sw-3 me-1">
                        <CsLineIcons icon="clipboard" className="d-inline-block text-primary align-top" size="17" />
                      </div>
                    </Col>
                    <Col className="lh-1-25 text-alternate">Access to library</Col>
                  </Row>
                  <Row className="g-0 mb-2">
                    <Col xs="auto">
                      <div className="sw-3 me-1">
                        <CsLineIcons icon="database" className="d-inline-block text-primary align-top" size="17" />
                      </div>
                    </Col>
                    <Col className="lh-1-25 text-alternate">50 GB disk space</Col>
                  </Row>
                </div>
                <div className="d-flex justify-content-center">
                  <Button variant="foreground" className="btn-icon btn-icon-start hover-outline stretched-link">
                    <CsLineIcons icon="chevron-right" /> <span>Purchase</span>
                  </Button>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card className="h-100 hover-scale-up">
              <Card.Body className="pb-0">
                <div className="d-flex flex-column align-items-center mb-4">
                  <div className="bg-gradient-light sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center mb-2">
                    <CsLineIcons icon="building-large" className="text-white" />
                  </div>
                  <div className="cta-4 text-primary mb-1">Enterprise</div>
                  <div className="text-muted sh-3" />
                  <div className="display-4">$ 15.00</div>
                  <div className="text-small text-muted mb-1">User/Month</div>
                </div>
                <p className="text-alternate mb-4">Apple pie macaroon sesame snaps cotton candy jelly pudding lollipop caramels marshmallow. </p>
              </Card.Body>
              <Card.Footer className="pt-0 border-0">
                <div className="mb-4">
                  <Row className="g-0 mb-2">
                    <Col xs="auto">
                      <div className="sw-3 me-1">
                        <CsLineIcons icon="user" className="d-inline-block text-primary align-top" size="17" />
                      </div>
                    </Col>
                    <Col className="lh-1-25 text-alternate">Unlimited users</Col>
                  </Row>
                  <Row className="g-0 mb-2">
                    <Col xs="auto">
                      <div className="sw-3 me-1">
                        <CsLineIcons icon="support" className="d-inline-block text-primary align-top" size="17" />
                      </div>
                    </Col>
                    <Col className="lh-1-25 text-alternate">Direct support</Col>
                  </Row>
                  <Row className="g-0 mb-2">
                    <Col xs="auto">
                      <div className="sw-3 me-1">
                        <CsLineIcons icon="clipboard" className="d-inline-block text-primary align-top" size="17" />
                      </div>
                    </Col>
                    <Col className="lh-1-25 text-alternate">Access to library & hot fixes</Col>
                  </Row>
                  <Row className="g-0 mb-2">
                    <Col xs="auto">
                      <div className="sw-3 me-1">
                        <CsLineIcons icon="database" className="d-inline-block text-primary align-top" size="17" />
                      </div>
                    </Col>
                    <Col className="lh-1-25 text-alternate">Unlimited disk space</Col>
                  </Row>
                </div>
                <div className="d-flex justify-content-center">
                  <Button variant="foreground" className="btn-icon btn-icon-start hover-outline stretched-link">
                    <CsLineIcons icon="chevron-right" /> <span>Purchase</span>
                  </Button>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </div>
      {/* Plans End */}

      {/* Faq Start */}
      
      {/* Faq End */}
    </>
  );
};

export default MiscellaneousPricing;
