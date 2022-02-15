import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { NavLink } from 'react-router-dom';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import ChartSmallDoughnutChart1 from 'views/components/ChartSmallDoughnutChart1';
import BlogGrid from 'views/components/BlogGrid';
import BlogHome from 'views/components/BlogHome';     
import BlogDetail from 'views/components/BlogDetail';
import CarouselFlow from 'views/components/CarouselFlow';
import CarouselSingle from 'views/components/CarouselSingle';
import { ThumbnailsIconContent } from 'views/components/ThumbnailsIconContent';
import { Helmet } from 'react-helmet';
import PlayerBasic from 'views/components/PlayerBasic';
import { news } from 'data/news';
import { blogs } from 'data/blogs';

const DashboardsDefault = () => {
  const title = 'Home';
  const description = 'Home';

  return (
    <>
    <HtmlHead title={title} description={description} />
    <Helmet>
        <link rel="canonical" href="/home">
        </link>
    </Helmet>

    <BlogDetail/>

    <Row>
      <h2 className="small-title">Extend Your Knowledge</h2>
      <Col md="4" className="mb-2">
        <Card className="sh-13">
          <Card.Body className="py-0 d-flex align-items-center">
            <ChartSmallDoughnutChart1 title='TOTAL STUDENTS PLACED' data='6000+' />
          </Card.Body>
        </Card>
      </Col>
      <Col md="4" className="mb-2">
        <Card className="sh-13">
          <Card.Body className="py-0 d-flex align-items-center">
            <ChartSmallDoughnutChart1 title='AVERAGE SALARY HIKE' data='53%' />
          </Card.Body>
        </Card>
      </Col>
      <Col md="4" className="mb-2">
        <Card className="sh-13">
          <Card.Body className="py-0 d-flex align-items-center">
            <ChartSmallDoughnutChart1 title='AVERAGE SALARY' data='10.7 LPA' />
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row className="mb-3">
      <Col md="4" className="mb-2">
        <Card className="sh-13">
          <Card.Body className="py-0 d-flex align-items-center">
            <ChartSmallDoughnutChart1 title='PLACEMENT %' data='96.8%' />
          </Card.Body>
        </Card>
      </Col>
      <Col md="4" className="mb-2">
        <Card className="sh-13">
          <Card.Body className="py-0 d-flex align-items-center">
            <ChartSmallDoughnutChart1 title='HIGHEST SALARY' data='76.8 LPA' />
          </Card.Body>
        </Card>
      </Col>
      <Col md="4" className="mb-2">
        <Card className="sh-13">
          <Card.Body className="py-0 d-flex align-items-center">
            <ChartSmallDoughnutChart1 title='NUMBER OF CLIENTS' data='160+' />
          </Card.Body>
        </Card>
      </Col>
    </Row>

    <h2 className="small-title">Our Programs</h2> 
    <BlogGrid/>

    <Row>
        <Col lg="4" className="mb-5">
          <h2 className="small-title">News</h2>
          <Card className="sh-40 h-lg-100-card">
            <Card.Body className="mb-n2 scroll-out h-100">
              <OverlayScrollbarsComponent options={{ scrollbars: { autoHide: 'leave' }, overflowBehavior: { x: 'hidden', y: 'scroll' } }} className="h-100">
                
                {news.map((i) => {
                  return (
                    <Row className="g-0 mb-2 pt-1">
                      <Col xs="auto">
                        <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                          <div className="sh-3">
                            <CsLineIcons icon={i.icon} className="text-secondary align-top" />
                          </div>
                        </div>
                      </Col>
                      <Col>
                        <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                          <div className="d-flex flex-column">
                            <div className="text-alternate mt-n1 lh-1-25">{i.text}</div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  );
                })}

              </OverlayScrollbarsComponent>
            </Card.Body>
          </Card>
        </Col>

        <Col lg="8" className="mb-5">
          <h2 className="small-title">Categories</h2>
          <Row className="g-2">
            <Col xs="6" xl="4" className="sh-19">
              <Card className="h-100 hover-scale-up" id="introThird">
                <Card.Body className="text-center">
                  <CsLineIcons icon="cupcake" className="text-primary" />
                  <p className="heading mt-3 text-body">1-1 Mentorship</p>
                  <div className="text-extra-small fw-medium text-muted">Experience the power of 1:1 mentorship from top working professionals in the field that will help you start or grow your data science career.</div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="6" xl="4" className="sh-19">
              <Card className="h-100 hover-scale-up">
                <Card.Body className="text-center">
                  <CsLineIcons icon="loaf" className="text-primary" />
                  <p className="heading mt-3 text-body">Assured Placement</p>
                  <div className="text-extra-small fw-medium text-muted">Our Data Science, AI, ML and Business Analytics Specialization provides you with 6x more than the competition in our online data science course and is 100% assured job placement.</div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="6" xl="4" className="sh-19">
              <Card className="h-100 hover-scale-up">
                <Card.Body className="text-center">
                  <CsLineIcons icon="radish" className="text-primary" />
                  <p className="heading mt-3 text-body">Flexible schedule</p>
                  <div className="text-extra-small fw-medium text-muted">Get your Excelsior certification while you work. You can get to classes whenever you like by taking our online & on-demand classes.</div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="6" xl="4" className="sh-19">
              <Card className="h-100 hover-scale-up">
                <Card.Body className="text-center">
                  <CsLineIcons icon="pear" className="text-primary" />
                  <p className="heading mt-3 text-body">24/7 Human support</p>
                  <div className="text-extra-small fw-medium text-muted">If you have questions while taking an online course, pg program, or if want to chat with a live human being to help you, then get in touch with us anytime, day or night.</div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="6" xl="4" className="sh-19">
              <Card className="h-100 hover-scale-up">
                <Card.Body className="text-center">
                  <CsLineIcons icon="loaf" className="text-primary" />
                  <p className="heading mt-3 text-body">Unlimited Real-live Projects</p>
                  <div className="text-extra-small fw-medium text-muted">Learn to create real world projects while completing this online course. Master data science, machine learning, and artificial intelligence to become a data scientist.</div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="6" xl="4" className="sh-19">
              <Card className="h-100 hover-scale-up">
                <Card.Body className="text-center">
                  <CsLineIcons icon="water" className="text-primary" />
                  <p className="heading mt-3 text-body">Weekly Guidance Sessions</p>
                  <div className="text-extra-small fw-medium text-muted">Receive weekly personalized guidance sessions with an industry data scientist to help you learn more about the data science and machine learning techniques used complex business problems.</div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
    </Row>

    <Row className="mb-5">
      <h2 className="small-title">Videos</h2>
      <PlayerBasic/>
    </Row>

    <Row>
      <h2 className="small-title">Testimonials</h2>
      <BlogHome/>
    </Row>

    <Row className="mb-5">
      <h2 className="small-title">Admission Procedure</h2>
      <CarouselSingle/>
    </Row>
    
    <Row>
      <h2 className="small-title">Our Partners</h2>
      <CarouselFlow/>
    </Row>

    <h2 className="small-title">Blogs</h2>
    <ThumbnailsIconContent type="/blogs/" items={ blogs } />

    </>
  );
};

export default DashboardsDefault;
