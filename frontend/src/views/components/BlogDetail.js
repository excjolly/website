import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import WizardBasic from 'views/components/WizardBasic';

const BlogDetail = () => {
  return (
    <>
      <Row>
        <Col xl="8" xxl="9" className="mt-2">
            <img alt="detail" src='/img/product/large/banner.jpeg' className="responsive border-0 rounded mb-3 w-100 sh-50" />
        </Col>

        <Col xl="4" xxl="3">
          <Row>
            <Col xs="12" className="mt-2 mb-5">
              <Row className="mb-n2">
              <Col>
              <Card className="w-100 sh-50">
                <Card.Body>
                <div className="mb-3">
                  <h2>
                    Choose the right path for you
                  </h2>
                </div>
                  <WizardBasic />
                </Card.Body>
              </Card>
              </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default BlogDetail;
