import React, {useState} from 'react';
import { Row, Col, Card, Modal, Button } from 'react-bootstrap';
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
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);
  const [modal5, setModal5] = useState(false);
  const [modal6, setModal6] = useState(false);

  return (
    <>
    <HtmlHead title={title} description={description} />
    <Helmet>
        <link rel="canonical" href="/home">
        </link>
    </Helmet>

    <BlogDetail/>

    <Row>
      <h2 className="small-title">Excelsior by Number</h2>
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
          <h2 className="small-title">Why choose us?</h2>
          <Row className="g-2">
            <Col xs="6" xl="4" className="sh-19">
              <Card className="h-100 hover-scale-up cursor-pointer" id="introThird">
                <Card.Body className="text-center" onClick={() => setModal1(true)}>
                  <CsLineIcons icon="sort" className="text-primary" size="30" />
                  <p className="heading mt-3 text-body">One to One Mentorship</p>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="6" xl="4" className="sh-19">
              <Card className="h-100 hover-scale-up cursor-pointer" id="introThird">
                <Card.Body className="text-center" onClick={() => setModal2(true)}>
                  <CsLineIcons icon="dollar" className="text-primary" size="30" />
                  <p className="heading mt-3 text-body">Assured Placement</p>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="6" xl="4" className="sh-19">
              <Card className="h-100 hover-scale-up cursor-pointer" id="introThird">
                <Card.Body className="text-center" onClick={() => setModal3(true)}>
                  <CsLineIcons icon="calendar" className="text-primary" size="30" />
                  <p className="heading mt-3 text-body">Flexible schedule</p>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="6" xl="4" className="sh-19">
              <Card className="h-100 hover-scale-up cursor-pointer" id="introThird">
                <Card.Body className="text-center" onClick={() => setModal4(true)}>
                  <CsLineIcons icon="support" className="text-primary" size="30" />
                  <p className="heading mt-3 text-body">24/7 Human support</p>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="6" xl="4" className="sh-19">
              <Card className="h-100 hover-scale-up cursor-pointer" id="introThird">
                <Card.Body className="text-center" onClick={() => setModal5(true)}>
                  <CsLineIcons icon="board-2" className="text-primary" size="30" />
                  <p className="heading mt-3 text-body">Unlimited Real-live Projects</p>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="6" xl="4" className="sh-19">
              <Card className="h-100 hover-scale-up cursor-pointer" id="introThird">
                <Card.Body className="text-center" onClick={() => setModal6(true)}>
                  <CsLineIcons icon="online-class" className="text-primary" size="30" />
                  <p className="heading mt-3 text-body">Weekly Guidance Sessions</p>
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

    <h2 className="small-title">Admission Procedure</h2>
    <Row xs="1" xxl="4" className="mb-5">
      <Col className="mb-2">
        <Card className="h-100">
          <Card.Body>
            <div className="text-center">
              <img src="/img/illustration/icon-launch.webp" className="theme-filter" alt="launch" />
              <div className="d-flex flex-column sh-5">
                <h2 to="/support/knowledge-base" className="heading stretched-link">
                  Explore
                </h2>
              </div>
            </div>
            <div className="text-muted">Work directly with a data scientist mentor and a career counselor to find the right path.</div>
          </Card.Body>
        </Card>
      </Col>
      <Col className="mb-2">
        <Card className="h-100">
          <Card.Body>
            <div className="text-center">
              <img src="/img/illustration/icon-performance.webp" className="theme-filter" alt="performance" />
              <div className="d-flex flex-column sh-5">
                <h2 to="/support/knowledge-base" className="heading stretched-link">
                  Enrol
                </h2>
              </div>
            </div>
            <div className="text-muted">Enrol now to start your Data Science journey with the best online data science course, and take the first step towards a successful career. It's the number one skill companies need.</div>
          </Card.Body>
        </Card>
      </Col>
      <Col className="mb-2">
        <Card className="h-100">
          <Card.Body>
            <div className="text-center">
              <img src="/img/illustration/icon-configure.webp" className="theme-filter" alt="configure" />
              <div className="d-flex flex-column sh-5">
                <h2 to="/support/knowledge-base" className="heading stretched-link">
                  Enhance
                </h2>
              </div>
            </div>
            <div className="text-muted">Learning advanced skills in Data Science, Machine Learning and Artificial Intelligence can make you 1000x more value and a more competitive candidate for more opportunities. Learn from scratch in 1 to 1 mentor sessions and do unlimited live projects to practice and enhance your profile.</div>
          </Card.Body>
        </Card>
      </Col>
      <Col className="mb-2">
        <Card className="h-100">
          <Card.Body>
            <div className="text-center">
              <img src="/img/illustration/icon-analytics.webp" className="theme-filter" alt="analytics" />
              <div className="d-flex flex-column sh-5">
                <h2 to="/support/knowledge-base" className="heading stretched-link">
                  Excel
                </h2>
              </div>
            </div>
            <div className="text-muted">Now, it’s time to stand out in front of the best companies across different domains!  Get placed in your dream job by learning how to perform great in interviews</div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    
    <Row>
      <h2 className="small-title">Our Partners</h2>
      <CarouselFlow/>
    </Row>

    <h2 className="small-title">Blogs</h2>
    <ThumbnailsIconContent type="/blogs/" items={ blogs } />

    <Modal show={modal1} onHide={() => setModal1(false)}>
      <Modal.Header closeButton>
        <Modal.Title>One to One Mentorship</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <div className="d-flex flex-column mb-n4 text-start align-items-start w-100">
        <p>
Experience the power of 1:1 mentorship from top working professionals in the field that will help you start or grow your data science career.
        </p>
        </div>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setModal1(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>

    <Modal show={modal2} onHide={() => setModal2(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Assured Placement</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <div className="d-flex flex-column mb-n4 text-start align-items-start w-100">
        <p>
Our Data Science, AI, ML and Business Analytics Specialization provides you with 6x more than the competition in our online data science course and is 100% assured job placement.        </p>
        </div>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setModal2(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>

    <Modal show={modal3} onHide={() => setModal3(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Flexible schedule</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <div className="d-flex flex-column mb-n4 text-start align-items-start w-100">
        <p>
Get your Excelsior certification while you work. You can get to classes whenever you like by taking our online & on-demand classes.        </p>
        </div>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setModal3(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>

    <Modal show={modal4} onHide={() => setModal4(false)}>
      <Modal.Header closeButton>
        <Modal.Title>24/7 Human support</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <div className="d-flex flex-column mb-n4 text-start align-items-start w-100">
        <p>
If you have questions while taking an online course, pg program, or if want to chat with a live human being to help you, then get in touch with us anytime, day or night.        </p>
        </div>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setModal4(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>

    <Modal show={modal5} onHide={() => setModal5(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Unlimited Real-live Projects</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <div className="d-flex flex-column mb-n4 text-start align-items-start w-100">
        <p>
Learn to create real world projects while completing this online course. Master data science, machine learning, and artificial intelligence to become a data scientist.        </p>
        </div>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setModal5(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>

    <Modal show={modal6} onHide={() => setModal6(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Weekly Guidance Sessions</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <div className="d-flex flex-column mb-n4 text-start align-items-start w-100">
        <p>
Receive weekly personalized guidance sessions with an industry data scientist to help you learn more about the data science and machine learning techniques used complex business problems.        
        </p>
        </div>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setModal6(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>

    </>
  );
};

export default DashboardsDefault;
