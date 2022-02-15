import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import Glide from 'components/carousel/Glide';


export const ThumbnailsIconContent = props => {
  console.log(props);
  let x;
  return (
    <Row>
    <Glide  className="mb-5"
      options={{
        perView: 3,
        peek: { before: 0, after: 10 },        
        breakpoints: {
          400: {
            perView: 1
          }
        }
      }}
      >
      {props.items.map((p) => {
        {x = props.type + p.slug;}
        return(
          <Glide.Item>
          <Col className="mb-3">
            <Card>
              <Card.Img src="/img/product/small/product-6.webp" className="card-img-top sh-16" alt="card image" />
              <Card.Body>
                <h5 className="heading mb-0">
                  <NavLink to={x} className="body-link stretched-link">
                    {p.title}
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
          );
      })}
    </Glide>
    </Row>
  );
};
