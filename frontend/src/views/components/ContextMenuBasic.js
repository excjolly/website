import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Menu, Item, contextMenu } from 'react-contexify';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import 'react-contexify/dist/ReactContexify.css';


const ContextMenuBasic = () => {
  return (
    <>
      <div>
        <Card className="mb-2 cursor-default">
          <Row className="sh-9 p-card pt-0 pb-0 g-0">
            <Col xs="2" className="d-flex align-items-center justify-content-center">
              <div className="pe-card">
                <CsLineIcons icon="radio" width="20" height="20" className="cs-icon icon text-primary" />
              </div>
            </Col>
            <Col xs="10" className="d-flex flex-column justify-content-center">
              <p className="heading mb-0">Right Click</p>
              <p className="text-small text-muted mb-0">Sugar plum gummi bears jujubes cookie.</p>
            </Col>
          </Row>
        </Card>
      </div>
    </>
  );
};

export default ContextMenuBasic;
