import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import WizardBasic from 'views/components/WizardBasic';

const BlogDetail = () => {
  return (
    <>
      <Row>
        <Col xl="8" xxl="9" className="mb-3 mt-3">
            <img alt="detail" src='/img/product/large/banner.jpeg' className="responsive border-0 rounded mb-3 w-100 sh-50" />
        </Col>

        <Col xl="4" xxl="3">
          <Row>
            <Col xs="12" className="mb-3 mt-3">
              <Row className="mb-n2">
              <Card className="w-100 sh-50">
                <Card.Body>
                  <h2>
                    Course Recommendation
                  </h2>
                  <WizardBasic />
                </Card.Body>
              </Card>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default BlogDetail;
