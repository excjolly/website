import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Clamp from 'components/clamp';
import Glide from 'components/carousel/Glide';
import { testimonials } from 'data/testimonials';

const BlogHome = () => {
  return (
    <div>
      <Row>
        <Glide
          className="mb-5"
          options={{
            gap: 0,
            perView: 3,
            type: 'carousel',
            peek: { before: 50, after: 50 },
            breakpoints: {
              1000: { perView: 1 },
              1600: { perView: 2 },
              2560: { perView: 3 },
            },
            autoplay: 3000,
          }}
          noDots =  {true}
          noControls = {true}
        >

          {testimonials.map((t) => {
            return (
              <Glide.Item>
                <Col>
                  <Card className="w-100 sh-25 hover-img-scale-up">
                    <img src="/img/banner/cta-standard-1.webp" className="card-img h-100 scale" alt="card" />
                    <div className="card-img-overlay d-flex flex-column bg-transparent">
                      <NavLink to={{pathname: t.link}} className="stretched-link" target="_blank">
                        <div className="mb-3 text-black w-100">{t.name}</div>
                        <div className="w-75 text-black d-none d-md-block">
                          <Clamp tag="div" clamp="5" className="">
                          {t.text}
                          </Clamp>
                        </div>
                      </NavLink>
                    </div>
                  </Card>
                </Col>
              </Glide.Item>
            );
          })}

        </Glide>
      </Row>
    </div>
  );
};

export default BlogHome;
