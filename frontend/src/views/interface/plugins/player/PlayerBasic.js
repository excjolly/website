import React from 'react';
import Plyr from 'plyr-react';
import { Card, Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import Glide from 'components/carousel/Glide';

const PlayerBasic = () => {
  const videoSrc = {
    type: 'video',
    sources: [{ src: '-oBH9Lku2NY', provider: 'youtube' }],
    poster: '/img/product/large/product-4.webp',
  };

  // return <Plyr source={videoSrc} options={{}} />;
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
          <Col className="mb-5">
            <Plyr source={videoSrc} options={{}} />
            {/* <iframe src="https://www.youtube.com/embed/" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
          </Col>
        </Glide.Item>
      ))}
    </Glide>
  );
};

export default React.memo(PlayerBasic);
