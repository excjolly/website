import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Glide from 'components/carousel/Glide';

const CarouselSingle = () => {
  return (
    <Glide
      options={{
        gap: 0,
        perView: 1,
      }}
    >
        <Glide.Item key='1'>
          <Card className="mb-3" style = {{ height : "9rem"}}>
            <p className="small-title ps-card pt-3">Explore</p>
            <p className="heading mb-0 ps-card pt-3">Work directly with a data scientist mentor and a career counselor to find the right path.</p>
          </Card>
        </Glide.Item>

        <Glide.Item key='2'>
          <Card className="mb-3" style = {{ height : "9rem"}}>
            <p className="small-title ps-card pt-3">Enrol</p>
            <p className="heading mb-0 ps-card pt-3">Enrol now to start your Data Science journey with the best online data science course, and take the first step towards a successful career. It's the number one skill companies need.</p>
          </Card>
        </Glide.Item>

        <Glide.Item key='3'>
          <Card className="mb-3" style = {{ height : "9rem"}}>
            <p className="small-title ps-card pt-3">Enhance</p>
            <p className="heading mb-0 ps-card pt-3">Learning advanced skills in Data Science, Machine Learning and Artificial Intelligence can make you 1000x more value and a more competitive candidate for more opportunities. Learn from scratch in 1 to 1 mentor sessions and do unlimited live projects to practice and enhance your profile.</p>
          </Card>
        </Glide.Item>

        <Glide.Item key='4'>
          <Card className="mbrt-3" style = {{ height : "9rem"}}>
            <p className="small-title ps-card pt-3">Excel</p>
            <p className="heading mb-0 ps-card pt-3">Now, it’s time to stand out in front of the best companies across different domains!  Get placed in your dream job by learning how to perform great in interviews</p>
          </Card>
        </Glide.Item>

    </Glide>
  );
};

export default CarouselSingle;
