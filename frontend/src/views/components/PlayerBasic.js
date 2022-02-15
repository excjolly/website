import React from 'react';
import { Col } from 'react-bootstrap';
import Glide from 'components/carousel/Glide';


const PlayerBasic = () => {
  return (
    <Glide
      options={{
        perView: 4,
        peek: { before: 0, after: 15 },
        breakpoints: {
          400: {
            perView: 1
          }
        }
      }}>
      {[1, 2, 3, 4, 5, 6, 7].map((i) => (
        <Glide.Item key={`basic.${i}`} >
          <Col className="mb-3">
          <iframe className="rounded" src="https://www.youtube.com/embed/9Q_gq4Fmcbg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Col>
        </Glide.Item>
      ))}
    </Glide>
  );
};

export default React.memo(PlayerBasic);
