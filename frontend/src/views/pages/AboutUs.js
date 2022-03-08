import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import HtmlHead from 'components/html-head/HtmlHead';
import { Helmet } from 'react-helmet';
import ContextMenuBasic from 'views/components/ContextMenuBasic';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import ChartDoughnut from 'views/components/ChartDoughnut';

const AboutUs = () => {
  const title = 'About Us';
  const description = 'About Us';

  return (
    <>
      <HtmlHead title={title} description={description} />
      <Helmet>
        <link rel="canonical" href="/about_us">
        </link>
      </Helmet>
      {/* Title Start */}
      <div className="page-title-container">
        <h1 className="mb-0 pb-0 display-4">{title}</h1>
      </div>
      {/* Title End */}

      <img alt="detail" src='/img/product/large/banner.jpeg' className="responsive border-0 rounded mb-5 w-100 sh-50" />
      <Card body className="mb-5">
        <h2 className="small-title">About Excelsior</h2>
        <p className="mb-0">Is acquiring a new skill sufficient? Is it possible to start a new career in a different field? Will employers hire you once you complete a certification course? Excelsior was founded in 2017 by three co-founders from IIT Kharagpur and IIT Delhi, who saw a need in the field of skill acquisition and decided to fill it. Excelsior is more than simply an Ed-tech platform; it's a one-stop solution for career guidance, learning, and placement to help students reach their goals.</p>
        <p className="mb-0">To develop high-quality online learning experiences that enhance learner success, we use the newest technology, best teaching techniques, and collaborations with exceptional industry leaders.</p>
        <p className="mb-0">We're the industry's premier source of software-technology training, with live lectures given by industry leaders and subject matter experts.</p> 
        <p className="mb-0">Our intensive programs combine a modern curriculum with hands-on experience using cutting-edge technology.</p>
      </Card>
      <Row xxl="3" xs="1">
        <Col className="mb-5">
          <h2 className="small-title">Our Values</h2>
            <div>
              <Card className="mb-2 cursor-default">
                <Row className="sh-9 p-card pt-0 pb-0 g-0">
                  <Col xs="2" className="d-flex align-items-center justify-content-center">
                    <div className="pe-card">
                      <CsLineIcons icon="check-square" width="20" height="20" className="cs-icon icon text-primary" />
                    </div>
                  </Col>
                  <Col xs="10" className="d-flex flex-column justify-content-center">
                    <p className="heading mb-0">Efficiency</p>
                    <p className="text-small text-muted mb-0">There can be growth only where there is efficiency</p>
                  </Col>
                </Row>
              </Card>
            </div>

            <div>
              <Card className="mb-2 cursor-default">
                <Row className="sh-9 p-card pt-0 pb-0 g-0">
                  <Col xs="2" className="d-flex align-items-center justify-content-center">
                    <div className="pe-card">
                      <CsLineIcons icon="check-square" width="20" height="20" className="cs-icon icon text-primary" />
                    </div>
                  </Col>
                  <Col xs="10" className="d-flex flex-column justify-content-center">
                    <p className="heading mb-0">Committment</p>
                    <p className="text-small text-muted mb-0">When you do something with a lot of commitment, the input reflects in the output</p>
                  </Col>
                </Row>
              </Card>
            </div>

            <div>
              <Card className="mb-2 cursor-default">
                <Row className="sh-9 p-card pt-0 pb-0 g-0">
                  <Col xs="2" className="d-flex align-items-center justify-content-center">
                    <div className="pe-card">
                      <CsLineIcons icon="check-square" width="20" height="20" className="cs-icon icon text-primary" />
                    </div>
                  </Col>
                  <Col xs="10" className="d-flex flex-column justify-content-center">
                    <p className="heading mb-0">Reliability</p>
                    <p className="text-small text-muted mb-0">Reliability is the pre-condition to trust</p>
                  </Col>
                </Row>
              </Card>
            </div>
        </Col>


        <Col className="mb-5">
          <h2 className="small-title">Our Mission</h2>
          <Card style = {{ height : "14.5rem"}}>
            <Card.Body>
              <div>
                <p>Excelsior aspires to fulfill its purpose of re-inventing the student learning experience by elevating mentoring, learning, and placement to new heights.</p>
                <p>Excelsior is a once-in-a-lifetime learning opportunity! We want to transform how students and working professionals think about their future.</p>
              </div>
            </Card.Body>
          </Card>
        </Col>


        <Col className="mb-5">
          <h2 className="small-title">Our Vision</h2>
         <Card style = {{ height : "14.5rem"}}>
            <Card.Body>
              <div>
                <p>We have a problem. And Excelsior is working on a solution. We have the problem of rising tuition and diminishing returns for students who are placed in the wrong classes or receive weak guidance. We seek to solve this problem by offering a dynamic learning experience that guides students through the most efficient paths for knowledge acquisition and development of skills and passions to achieve long term success.</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h2 className="small-title">Timeline</h2>
      <Row className="mb-5">
      <Col>
        <Card>
        <Card.Body>
          <Row className="g-0">
            <Col xs="auto" className="sw-5 d-flex flex-column justify-content-center align-items-center position-relative">
              <div className="w-100 d-flex h-0" />
              <div className="sw-5 sh-5 rounded-xl d-flex flex-shrink-0 justify-content-center align-items-center">
                <div className="bg-gradient-light sw-5 sh-5 rounded-xl">
                  <div className="text-white d-flex justify-content-center align-items-center h-100">
                    <CsLineIcons icon="cupcake" />
                  </div>
                </div>
              </div>
              <div className="w-100 d-flex h-100 justify-content-center position-relative">
                <div className="line-w-1 bg-separator h-100 position-absolute" />
              </div>
            </Col>
            <Col className="mb-4 ps-4">
              <div className="h-100">
                <div className="d-flex flex-column justify-content-start">
                  <div className="d-flex flex-column">
                    <Button variant="link" className="p-0 pt-1 heading text-start">
                    Beginning
                    </Button>
                    <div className="text-alternate">2017</div>
                    <div className="text-muted mt-1">
                      In 2017, Excelsior set out to create the first 3-Dimensional learning experience for students.
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="g-0">
            <Col xs="auto" className="sw-5 d-flex flex-column justify-content-center align-items-center position-relative">
              <div className="w-100 d-flex h-0" />
              <div className="sw-5 sh-5 rounded-xl d-flex flex-shrink-0 justify-content-center align-items-center">
                <div className="bg-gradient-light sw-5 sh-5 rounded-xl">
                  <div className="text-white d-flex justify-content-center align-items-center h-100">
                    <CsLineIcons icon="pepper" />
                  </div>
                </div>
              </div>
              <div className="w-100 d-flex h-100 justify-content-center position-relative">
                <div className="line-w-1 bg-separator h-100 position-absolute" />
              </div>
            </Col>
            <Col className="mb-4 ps-4">
              <div className="h-100">
                <div className="d-flex flex-column justify-content-start">
                  <div className="d-flex flex-column">
                    <Button variant="link" className="p-0 pt-1 heading text-start">
                    First Milestone 
                    </Button>
                    <div className="text-alternate">2019</div>
                    <div className="text-muted mt-1">
                    We have reached a significant juncture with our mission to help students find meaningful employment.  We are thrilled to have assisted over 1,000 students in launching their careers in the 18 months since we opened our doors in 2017, and we will continue to work tirelessly until all our students are employed after successful completion of the course.
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="g-0">
            <Col xs="auto" className="sw-5 d-flex flex-column justify-content-center align-items-center position-relative">
              <div className="w-100 d-flex h-0" />
              <div className="sw-5 sh-5 rounded-xl d-flex flex-shrink-0 justify-content-center align-items-center">
                <div className="bg-gradient-light sw-5 sh-5 rounded-xl">
                  <div className="text-white d-flex justify-content-center align-items-center h-100">
                    <CsLineIcons icon="pepper" />
                  </div>
                </div>
              </div>
              <div className="w-100 d-flex h-100 justify-content-center position-relative">
                <div className="line-w-1 bg-separator h-100 position-absolute" />
              </div>
            </Col>
            <Col className="mb-4 ps-4">
              <div className="h-100">
                <div className="d-flex flex-column justify-content-start">
                  <div className="d-flex flex-column">
                    <Button variant="link" className="p-0 pt-1 heading text-start">
                    We expanded
                    </Button>
                    <div className="text-alternate">2019</div>
                    <div className="text-muted mt-1">
                    Well, it started with just a dialog like, "We have the best talents at our disposal. Why don’t we build our own IT product?" Some googling here, some phone calls there and over 100 cups of coffee later an idea struck, and that was the start of one the most innovative product in the ed-tech space. Excelsior is proud to announce Edu-Verse. Stay tuned for more updates  
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="g-0">
            <Col xs="auto" className="sw-5 d-flex flex-column justify-content-center align-items-center position-relative">
              <div className="w-100 d-flex h-0" />
              <div className="sw-5 sh-5 rounded-xl d-flex flex-shrink-0 justify-content-center align-items-center">
                <div className="bg-gradient-light sw-5 sh-5 rounded-xl">
                  <div className="text-white d-flex justify-content-center align-items-center h-100">
                    <CsLineIcons icon="pepper" />
                  </div>
                </div>
              </div>
              <div className="w-100 d-flex h-100 justify-content-center position-relative">
                <div className="line-w-1 bg-separator h-100 position-absolute" />
              </div>
            </Col>
            <Col className="mb-4 ps-4">
              <div className="h-100">
                <div className="d-flex flex-column justify-content-start">
                  <div className="d-flex flex-column">
                    <Button variant="link" className="p-0 pt-1 heading text-start">
                      Jujubes Wafer Topping Biscuit
                    </Button>
                    <div className="text-alternate">25.11.2020</div>
                    <div className="text-muted mt-1">
                      Jelly-o wafer sesame snaps candy canes. Danish dragée toffee bonbon. Jelly-o marshmallow cake oat cake caramels jujubes.
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="g-0">
            <Col xs="auto" className="sw-5 d-flex flex-column justify-content-center align-items-center position-relative">
              <div className="w-100 d-flex h-0" />
              <div className="sw-5 sh-5 rounded-xl d-flex flex-shrink-0 justify-content-center align-items-center">
                <div className="bg-gradient-light sw-5 sh-5 rounded-xl">
                  <div className="text-white d-flex justify-content-center align-items-center h-100">
                    <CsLineIcons icon="loaf" />
                  </div>
                </div>
              </div>
              <div className="w-100 d-flex h-100 justify-content-center position-relative" />
            </Col>
            <Col className="ps-4">
              <div className="h-100">
                <div className="d-flex flex-column justify-content-start">
                  <div className="d-flex flex-column">
                    <Button variant="link" className="p-0 pt-1 heading text-start">
                      Jelly Beans Lemon Danish
                    </Button>
                    <div className="text-alternate">29.11.2020</div>
                    <div className="text-muted mt-1">
                      Cake fruitcake oat cake. Muffin jelly bonbon croissant. Bonbon topping donut marshmallow carrot cake muffin.
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      </Col>
      </Row>

      <h2 className="small-title">Chart</h2>
      <Row xxl="2" className="mb-3">            
        <Col xs="12" xl="6">
          <section className="scroll-section" id="doughnutChart">
            <Card body className="mb-2">
              <div className="sh-35">
                <ChartDoughnut />
              </div>
            </Card>
          </section>
        </Col>            
        <Col xs="12" xl="6">
          <section className="scroll-section" id="doughnutChart">
            <Card body className="mb-2">
              <div className="sh-35">
                <ChartDoughnut />
              </div>
            </Card>
          </section>
        </Col>
      </Row>

      <h2 className="small-title">Our Team</h2>
      <Row className="row-cols-1 row-cols-md-2 row-cols-xxl-3 g-3 mb-5">
        <Col>
          <Card>
            <Card.Body>
              <Row className="g-0 sh-6">
                <Col xs="auto">
                  <img src="/img/profile/profile-1.webp" className="card-img rounded-xl sh-6 sw-6" alt="thumb" />
                </Col>
                <Col>
                  <div className="d-flex flex-row ps-4 h-100 align-items-center justify-content-between">
                    <div className="d-flex flex-column">
                      <div>Blaine Cottrell</div>
                      <div className="text-small text-muted">Project Manager</div>
                    </div>
                    <div className="d-flex">
                      <Button variant="outline-primary" size="sm" className="ms-1">
                        Follow
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Row className="g-0 sh-6">
                <Col xs="auto">
                  <img src="/img/profile/profile-2.webp" className="card-img rounded-xl sh-6 sw-6" alt="thumb" />
                </Col>
                <Col>
                  <div className="d-flex flex-row ps-4 h-100 align-items-center justify-content-between">
                    <div className="d-flex flex-column">
                      <div>Cherish Kerr</div>
                      <div className="text-small text-muted">Development Lead</div>
                    </div>
                    <div className="d-flex">
                      <Button variant="outline-primary" size="sm" className="ms-1">
                        Follow
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Row className="g-0 sh-6">
                <Col xs="auto">
                  <img src="/img/profile/profile-3.webp" className="card-img rounded-xl sh-6 sw-6" alt="thumb" />
                </Col>
                <Col>
                  <div className="d-flex flex-row ps-4 h-100 align-items-center justify-content-between">
                    <div className="d-flex flex-column">
                      <div>Kirby Peters</div>
                      <div className="text-small text-muted">Accounting</div>
                    </div>
                    <div className="d-flex">
                      <Button variant="outline-primary" size="sm" className="ms-1">
                        Follow
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Row className="g-0 sh-6">
                <Col xs="auto">
                  <img src="/img/profile/profile-4.webp" className="card-img rounded-xl sh-6 sw-6" alt="thumb" />
                </Col>
                <Col>
                  <div className="d-flex flex-row ps-4 h-100 align-items-center justify-content-between">
                    <div className="d-flex flex-column">
                      <div>Olli Hawkins</div>
                      <div className="text-small text-muted">Client Relations Lead</div>
                    </div>
                    <div className="d-flex">
                      <Button variant="outline-primary" size="sm" className="ms-1">
                        Follow
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Row className="g-0 sh-6">
                <Col xs="auto">
                  <img src="/img/profile/profile-5.webp" className="card-img rounded-xl sh-6 sw-6" alt="thumb" />
                </Col>
                <Col>
                  <div className="d-flex flex-row ps-4 h-100 align-items-center justify-content-between">
                    <div className="d-flex flex-column">
                      <div>Luna Wigglebutt</div>
                      <div className="text-small text-muted">Customer Engagement</div>
                    </div>
                    <div className="d-flex">
                      <Button variant="outline-primary" size="sm" className="ms-1">
                        Follow
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Row className="g-0 sh-6">
                <Col xs="auto">
                  <img src="/img/profile/profile-6.webp" className="card-img rounded-xl sh-6 sw-6" alt="thumb" />
                </Col>
                <Col>
                  <div className="d-flex flex-row ps-4 h-100 align-items-center justify-content-between">
                    <div className="d-flex flex-column">
                      <div>Kerr Jackson</div>
                      <div className="text-small text-muted">Frontend Developer</div>
                    </div>
                    <div className="d-flex">
                      <Button variant="outline-primary" size="sm" className="ms-1">
                        Follow
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Row className="g-0 sh-6">
                <Col xs="auto">
                  <img src="/img/profile/profile-7.webp" className="card-img rounded-xl sh-6 sw-6" alt="thumb" />
                </Col>
                <Col>
                  <div className="d-flex flex-row ps-4 h-100 align-items-center justify-content-between">
                    <div className="d-flex flex-column">
                      <div>Kathryn Mengel</div>
                      <div className="text-small text-muted">Team Leader</div>
                    </div>
                    <div className="d-flex">
                      <Button variant="outline-primary" size="sm" className="ms-1">
                        Follow
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Row className="g-0 sh-6">
                <Col xs="auto">
                  <img src="/img/profile/profile-8.webp" className="card-img rounded-xl sh-6 sw-6" alt="thumb" />
                </Col>
                <Col>
                  <div className="d-flex flex-row ps-4 h-100 align-items-center justify-content-between">
                    <div className="d-flex flex-column">
                      <div>Joisse Kaycee</div>
                      <div className="text-small text-muted">Copywriter</div>
                    </div>
                    <div className="d-flex">
                      <Button variant="outline-primary" size="sm" className="ms-1">
                        Follow
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Row className="g-0 sh-6">
                <Col xs="auto">
                  <img src="/img/profile/profile-9.webp" className="card-img rounded-xl sh-6 sw-6" alt="thumb" />
                </Col>
                <Col>
                  <div className="d-flex flex-row ps-4 h-100 align-items-center justify-content-between">
                    <div className="d-flex flex-column">
                      <div>Zayn Hartley</div>
                      <div className="text-small text-muted">Visual Effect Designer</div>
                    </div>
                    <div className="d-flex">
                      <Button variant="outline-primary" size="sm" className="ms-1">
                        Follow
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h2 className="small-title">Our Achievements</h2>
      <Row xs="1" xxl="4">
        <Col className="mb-2">
          <Card className="h-100">
            <Card.Body>
              <div className="text-center">
                <img src="/img/illustration/icon-launch.webp" className="theme-filter" alt="launch" />
              </div>
              <div>Since 2017, we have successfully placed 98.3% of all applicants in their dream jobs</div>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mb-2">
          <Card className="h-100">
            <Card.Body>
              <div className="text-center">
                <img src="/img/illustration/icon-performance.webp" className="theme-filter" alt="performance" />
              </div>
              <div>Our Hiring partners are rapidly increasing with over 160+ brands</div>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mb-2">
          <Card className="h-100">
            <Card.Body>
              <div className="text-center">
                <img src="/img/illustration/icon-configure.webp" className="theme-filter" alt="configure" />
              </div>
              <div>Over 6,000+ students have uccessfully transformed their career with us</div>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mb-2">
          <Card className="h-100">
            <Card.Body>
              <div className="text-center">
                <img src="/img/illustration/icon-analytics.webp" className="theme-filter" alt="analytics" />
              </div>
              <div>Excelsior Family is now bigger than ever and we have more than 100 employees</div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default AboutUs;