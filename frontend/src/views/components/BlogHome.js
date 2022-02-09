import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Clamp from 'components/clamp';
import Glide from 'components/carousel/Glide';


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
          <Glide.Item>
            <Col>
              <Card className="w-100 sh-25 hover-img-scale-up">
                <img src="/img/banner/cta-standard-1.webp" className="card-img h-100 scale" alt="card" />
                <div className="card-img-overlay d-flex flex-column justify-content-end bg-transparent">
                  <NavLink to="/pages/blog/list" className="stretched-link">
                    <div className="cta-3 mb-3 text-black w-100 w-sm-50">14 Facts About Sugar</div>
                    <div className="w-50 text-black d-none d-md-block">
                      <Clamp tag="div" clamp="3" className="sh-8">
                        Sesame snaps brownie gummi bears tootsie roll caramels dragée. Powder cake gummies jelly beans toffee carrot cake bonbon powder muffin.
                      </Clamp>
                    </div>
                  </NavLink>
                </div>
              </Card>
            </Col>
          </Glide.Item>
          <Glide.Item>
            <Col>
              <Card className="w-100 sh-25 hover-img-scale-up">
                <img src="/img/banner/cta-standard-1.webp" className="card-img h-100 scale" alt="card" />
                <div className="card-img-overlay d-flex flex-column justify-content-end bg-transparent">
                  <NavLink to="/pages/blog/list" className="stretched-link">
                    <div className="cta-3 mb-3 text-black w-100 w-sm-50">14 Facts About Sugar</div>
                    <div className="w-50 text-black d-none d-md-block">
                      <Clamp tag="div" clamp="3" className="sh-8">
                        Sesame snaps brownie gummi bears tootsie roll caramels dragée. Powder cake gummies jelly beans toffee carrot cake bonbon powder muffin.
                      </Clamp>
                    </div>
                  </NavLink>
                </div>
              </Card>
            </Col>
          </Glide.Item>
          <Glide.Item>
            <Col>
              <Card className="w-100 sh-25 hover-img-scale-up">
                <img src="/img/banner/cta-standard-1.webp" className="card-img h-100 scale" alt="card" />
                <div className="card-img-overlay d-flex flex-column justify-content-end bg-transparent">
                  <NavLink to="/pages/blog/list" className="stretched-link">
                    <div className="cta-3 mb-3 text-black w-100 w-sm-50">14 Facts About Sugar</div>
                    <div className="w-50 text-black d-none d-md-block">
                      <Clamp tag="div" clamp="3" className="sh-8">
                        Sesame snaps brownie gummi bears tootsie roll caramels dragée. Powder cake gummies jelly beans toffee carrot cake bonbon powder muffin.
                      </Clamp>
                    </div>
                  </NavLink>
                </div>
              </Card>
            </Col>
          </Glide.Item>
        </Glide>
      </Row>
    </div>
  );
};

export default BlogHome;
