import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
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
            breakpoints: {
              1000: { perView: 1 },
              1600: { perView: 3 },
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
                <Card style = {{ height : "29rem"}}>
                  <Card.Body>
                    <div className="d-flex align-items-center flex-column mb-4">
                      <div className="d-flex align-items-center flex-column">
                        <div className="sw-13 position-relative mb-3">
                          <img src="/img/profile/profile-1.webp" className="img-fluid rounded-xl" alt="thumb" />
                        </div>
                        <Clamp tag="div" clamp="1" className="h5 mb-0">{t.name}</Clamp>
                        <div className="text-muted mb-0">{t.role}</div>
                        <Button href={t.link} className="mb-0 pt-0" variant="link" target="_blank">LinkedIn Profile</Button>
                          <Clamp tag="div" clamp="100" className="">
                          "{t.text}"  
                          </Clamp>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Glide.Item>
             ); 
           })} 

        </Glide>
      </Row>
    </div>
  );
};

export default BlogHome;
