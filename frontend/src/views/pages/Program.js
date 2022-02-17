import React, {useState} from 'react';
import { Button, Card, Col, Row, Accordion, Modal } from 'react-bootstrap';
import Plyr from 'plyr-react';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import { Helmet } from 'react-helmet';
import Glide from 'components/carousel/Glide';
import Pricing from 'views/components/Pricing';
import BlogHome from 'views/components/BlogHome';     
import Clamp from 'components/clamp';
import { NavLink } from 'react-router-dom';
import ListBasicItems from 'views/components/ListBasicItems';
import PlayerBasic from 'views/components/PlayerBasic';
import { ThumbnailsIconContent } from 'views/components/ThumbnailsIconContent';
import { CtaTextAndButtonsSecond } from 'views/components/CtaTextAndButtons';
import LayoutsBasic from 'views/components/LayoutsBasic';
import { faqs } from 'data/faq';
import { blogs } from 'data/blogs';
import { programs } from 'data/programs';

const PurePlyr = React.memo(() => {
  const videoSrc = {
    type: 'video',
    sources: [{ src: 'GXIa56Gh7Og', provider: 'youtube' }],
    poster: '/img/banner/Ai-02.png',
  };

  return <Plyr source={videoSrc} options={{}} />;
});


const CoursesDetail = () => {
  const title = 'Bread Making Techniques';
  const description = 'Elearning Portal Course Detail Page';
  const [verticallyCenteredScrollable, setVerticallyCenteredScrollable] = useState(false);
  const [currModal, setCurrModal] = useState(false);
  const [exampleModal, setExampleModal] = useState(false);
  const slug = window.location.pathname;
  const program = programs.find(p => {
    return '/programs/' + p.slug === slug;
  });

  return (
    <>
      <HtmlHead title={title} description={description} />
      <Helmet>
        <link rel="canonical" href="/programs/program_name">
        </link>
      </Helmet>
      {/* Title and Top Buttons Start */}
      <div className="page-title-container">
        <Row className="g-0">
          {/* Title Start */}
          <Col className="col-auto mb-sm-0 me-auto">
            <h1 className="mb-0 pb-0 display-4">{program.title}</h1>
          </Col>
          {/* Title End */}
        </Row>
      </div>
      {/* Title and Top Buttons End */}

      <Row className="g-5 mb-3">
        <Col xxl="8" className="mb-0">
          {/* Preview Start */}
          <h2 className="small-title">Preview</h2>
          <Card className="mb-5">
          <img src="/img/banner/Ai-02.png" className="rounded"></img>
          </Card>
          {/* Preview End */}
          
          <h2 className="small-title">Program Overview</h2>
          <Row xxl="2" xs="1">
            <Col>
              <Card className="mb-2">
                <Card.Body>
                  <div className="mb-2">
                    <NavLink to="#" className="heading">
                      How the Paths are Created
                    </NavLink>
                  </div>
                  <Clamp tag="span" clamp="2" className="text-alternate mb-0 sh-5">
                    Jujubes brownie marshmallow apple pie donut ice cream jelly-o jelly-o gummi bears. Tootsie roll chocolate bar dragée bonbon cheesecake icing.
                    Danish wafer donut cookie caramels gummies topping.
                  </Clamp>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="mb-2">
                <Card.Body>
                  <div className="mb-2">
                    <NavLink to="#" className="heading">
                      Why Should You Take a Path
                    </NavLink>
                  </div>
                  <Clamp tag="span" clamp="2" className="text-alternate mb-0 sh-5">
                    Jujubes brownie marshmallow apple pie donut ice cream jelly-o jelly-o gummi bears. Tootsie roll chocolate bar dragée bonbon cheesecake icing.
                    Danish wafer donut cookie caramels gummies topping.
                  </Clamp>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="mb-2">
                <Card.Body>
                  <div className="mb-2">
                    <NavLink to="#" className="heading">
                      Benefits of Learning with a Path
                    </NavLink>
                  </div>
                  <Clamp tag="span" clamp="2" className="text-alternate mb-0 sh-5">
                    Jujubes brownie marshmallow apple pie donut ice cream jelly-o jelly-o gummi bears. Tootsie roll chocolate bar dragée bonbon cheesecake icing.
                    Danish wafer donut cookie caramels gummies topping.
                  </Clamp>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="mb-2">
                <Card.Body>
                  <div className="mb-2">
                    <NavLink to="#" className="heading">
                      Path Courses and Quizes
                    </NavLink>
                  </div>
                  <Clamp tag="span" clamp="2" className="text-alternate mb-0 sh-5">
                    Jujubes brownie marshmallow apple pie donut ice cream jelly-o jelly-o gummi bears. Tootsie roll chocolate bar dragée bonbon cheesecake icing.
                    Danish wafer donut cookie caramels gummies topping.
                  </Clamp>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xxl="4">
          {/* At a Glance Start  */}
          <h2 className="small-title">At a Glance</h2>
          <Card className="mb-5">
            <Card.Body>
              <Row className="g-0 align-items-center mb-3">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="clock" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="sh-4 d-flex align-items-center lh-1-25">Duration</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">14 Hours</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-3">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="presentation" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="sh-4 d-flex align-items-center lh-1-25">Content</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">8 Chapters</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-3">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="diploma" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="sh-4 d-flex align-items-center lh-1-25">Level</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">Beginner</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-3">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="calendar" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="sh-4 d-flex align-items-center lh-1-25">Release</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">05.11.2021</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-3">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="star" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="sh-4 d-flex align-items-center lh-1-25">Rating</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">4.8 (843)</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="graduation" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="sh-4 d-flex align-items-center lh-1-25">Completed By</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">1.522</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          {/* At a Glance End  */}

          {/* Tags Start */}          
          <h2 className="small-title">Curriculum</h2>
          <Card className="mb-5">
            <Card.Body>
              <div className="cta-3">Need more details?</div>
              <div className="text-muted mb-4">Cheesecake chocolate carrot cake pie lollipop lemon toffee lollipop. Oat cake pie cake cotton.</div>
              <Button variant="outline-primary" className="btn-icon btn-icon-start me-2" onClick={() => setCurrModal(true)}>
                <CsLineIcons icon="book-open" /> <span>View</span>
              </Button>
              <Button variant="outline-primary" className="btn-icon btn-icon-start">
                <CsLineIcons icon="file-text" /> <span>Download</span>
              </Button>
            </Card.Body>
          </Card>

          <h2 className="small-title">Download Brochure</h2>
          <Card className="mb-5">
            <Card.Body>
              <div className="cta-3">Need more details?</div>
              <div className="text-muted mb-4">Cheesecake chocolate carrot cake pie lollipop lemon toffee lollipop. Oat cake pie cake cotton.</div>
              <Button variant="outline-primary" className="btn-icon btn-icon-start">
                <CsLineIcons icon="file-text" /> <span>Docs</span>
              </Button>
            </Card.Body>
          </Card>
          {/* Tags End */}
        </Col>
      </Row>

      <Row className='mb-3' xxl="3" xs="1">
        <Col className="mb-0">
          <h2 className='small-title'> List </h2>
          <ListBasicItems/>
        </Col>

        <Col className="mb-3">
          <h2 className='small-title'> List </h2>
          <ListBasicItems/>
        </Col>

        <Col lg="8" className="mb-3">
          <h2 className="small-title">Industry Stats</h2>
          <Row xxl="2" xs="1">
            <Col xs="6" xl="4" className="sh-19">
              <Card className="h-100 hover-scale-up mb-2 cursor-pointer" id="introThird">
                <Card.Body className="text-center">
                  <h2 className="nav-link" onClick={() => setVerticallyCenteredScrollable(true)}>
                    <CsLineIcons icon="cupcake" className="text-primary" />
                    <p className="heading mt-3 text-body">Cupcakes</p>
                    <div className="text-extra-small fw-medium text-muted">14 PRODUCTS</div>
                  </h2>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="6" xl="4" className="sh-19 mb-2">
              <Card className="h-100 hover-scale-up cursor-pointer">
                <Card.Body className="text-center">
                  <h2 className="nav-link" onClick={() => setVerticallyCenteredScrollable(true)}>
                    <CsLineIcons icon="cupcake" className="text-primary" />
                    <p className="heading mt-3 text-body">Cupcakes</p>
                    <div className="text-extra-small fw-medium text-muted">14 PRODUCTS</div>
                  </h2>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="6" xl="4" className="sh-19 mb-2">
              <Card className="h-100 hover-scale-up cursor-pointer">
                <Card.Body className="text-center">
                  <h2 className="nav-link" onClick={() => setVerticallyCenteredScrollable(true)}>
                    <CsLineIcons icon="cupcake" className="text-primary" />
                    <p className="heading mt-3 text-body">Cupcakes</p>
                    <div className="text-extra-small fw-medium text-muted">14 PRODUCTS</div>
                  </h2>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="6" xl="4" className="sh-19 mb-2">
              <Card className="h-100 hover-scale-up cursor-pointer">
                <Card.Body className="text-center">
                  <h2 className="nav-link" onClick={() => setVerticallyCenteredScrollable(true)}>
                    <CsLineIcons icon="cupcake" className="text-primary" />
                    <p className="heading mt-3 text-body">Cupcakes</p>
                    <div className="text-extra-small fw-medium text-muted">14 PRODUCTS</div>
                  </h2>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row xs="1" xxl="2">
        <Col>
          <h2 className="small-title">Student Journey</h2>
          <Row className="mb-5">
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
                        <Button variant="link" className="p-0 pt-0 heading text-start" onClick={() => setExampleModal(true)}>
                          Powder Sesame Snaps Cupcake
                        </Button>
                         <div className="text-muted mt-0">
                         Click to see more
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
                        <Button variant="link" className="p-0 pt-0 heading text-start" onClick={() => setExampleModal(true)}>
                          Jujubes Wafer Topping Biscuit
                        </Button>
                         <div className="text-muted mt-0">
                         Click to see more
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
                        <Button variant="link" className="p-0 pt-0 heading text-start" onClick={() => setExampleModal(true)}>
                          Jujubes Wafer Topping Biscuit
                        </Button>
                          <div className="text-muted mt-0">
                         Click to see more
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
                        <Button variant="link" className="p-0 pt-0 heading text-start" onClick={() => setExampleModal(true)}>
                          Jujubes Wafer Topping Biscuit
                        </Button>
                         <div className="text-muted mt-0">
                         Click to see more
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
                        <Button variant="link" className="p-0 pt-0 heading text-start" onClick={() => setExampleModal(true)}>
                          Jelly Beans Lemon Danish
                        </Button>
                         <div className="text-muted mt-0">
                         Click to see more
                        </div> 
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Row>
      </Col>

      <Col>
        <h2 className='small-title'>Start your journey now</h2>
        <Card body className="mb-5">
          <LayoutsBasic />
        </Card>
      </Col>

      </Row>

      <h2 className="small-title">Sample Projects</h2>
      <Row className="mb-5 row-cols-1 row-cols-md-4 g-1">
        <Col>
          <Card className="hover-scale-up h-100 cursor-pointer" onClick={() => setVerticallyCenteredScrollable(true)}>
            <Card.Body>
              <Row className="g-0">
                <Col xs="auto">
                  <div className="sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center border border-primary mb-4">
                    <CsLineIcons icon="laptop" className="text-primary" />
                  </div>
                </Col>
                <Col>
                  <div className="d-flex flex-column ps-card justify-content-start">
                    <div className="d-flex flex-column justify-content-center mb-2">
                      <h2 className='text-primary heading'>Project</h2>
                    </div>
                    <div className="text-alternate">
                      Lollipop apple pie lollipop toffee croissant. Sugar plum fruitcake cotton candy lemon drops. Carrot cake fruitcake dragée pie cotton candy
                      sesame snaps lollipop croissant.
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="hover-scale-up h-100 cursor-pointer" onClick={() => setVerticallyCenteredScrollable(true)}>
            <Card.Body>
              <Row className="g-0">
                <Col xs="auto">
                  <div className="sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center border border-primary mb-4">
                    <CsLineIcons icon="laptop" className="text-primary" />
                  </div>
                </Col>
                <Col>
                  <div className="d-flex flex-column ps-card justify-content-start">
                    <div className="d-flex flex-column justify-content-center mb-2">
                      <h2 className='text-primary heading'>Project</h2>
                    </div>
                    <div className="text-alternate">
                      Lollipop apple pie lollipop toffee croissant. Sugar plum fruitcake cotton candy lemon drops. Carrot cake fruitcake dragée pie cotton candy
                      sesame snaps lollipop croissant.
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="hover-scale-up h-100 cursor-pointer" onClick={() => setVerticallyCenteredScrollable(true)}>
            <Card.Body>
              <Row className="g-0">
                <Col xs="auto">
                  <div className="sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center border border-primary mb-4">
                    <CsLineIcons icon="laptop" className="text-primary" />
                  </div>
                </Col>
                <Col>
                  <div className="d-flex flex-column ps-card justify-content-start">
                    <div className="d-flex flex-column justify-content-center mb-2">
                      <h2 className='text-primary heading'>Project</h2>
                    </div>
                    <div className="text-alternate">
                      Lollipop apple pie lollipop toffee croissant. Sugar plum fruitcake cotton candy lemon drops. Carrot cake fruitcake dragée pie cotton candy
                      sesame snaps lollipop croissant.
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="hover-scale-up h-100 cursor-pointer" onClick={() => setVerticallyCenteredScrollable(true)}>
            <Card.Body>
              <Row className="g-0">
                <Col xs="auto">
                  <div className="sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center border border-primary mb-4">
                    <CsLineIcons icon="laptop" className="text-primary" />
                  </div>
                </Col>
                <Col>
                  <div className="d-flex flex-column ps-card justify-content-start">
                    <div className="d-flex flex-column justify-content-center mb-2">
                      <h2 className='text-primary heading'>Project</h2>
                    </div>
                    <div className="text-alternate">
                      Lollipop apple pie lollipop toffee croissant. Sugar plum fruitcake cotton candy lemon drops. Carrot cake fruitcake dragée pie cotton candy
                      sesame snaps lollipop croissant.
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h2 className="small-title">Mentors</h2>
      <Row xxl="4" xs="1">
        <Col>
          <Card className="mb-5">
            <Card.Body>
              <div className="d-flex align-items-center flex-column mb-4">
                <div className="d-flex align-items-center flex-column">
                  <div className="sw-13 position-relative mb-3">
                    <img src="/img/profile/profile-1.webp" className="img-fluid rounded-xl" alt="thumb" />
                  </div>
                  <div className="h5 mb-0">Blaine Cottrell</div>
                  <div className="text-muted">Executive UI/UX Designer</div>
                  <div className="text-muted mb-3">
                    <CsLineIcons icon="pin" className="me-1" />
                    <span className="align-middle">Montreal, Canada</span>
                  </div>
                </div>
                <Button size='xl' onClick={() => setVerticallyCenteredScrollable(true)}>About</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mb-5">
            <Card.Body>
              <div className="d-flex align-items-center flex-column mb-4">
                <div className="d-flex align-items-center flex-column">
                  <div className="sw-13 position-relative mb-3">
                    <img src="/img/profile/profile-1.webp" className="img-fluid rounded-xl" alt="thumb" />
                  </div>
                  <div className="h5 mb-0">Blaine Cottrell</div>
                  <div className="text-muted">Executive UI/UX Designer</div>
                  <div className="text-muted mb-3">
                    <CsLineIcons icon="pin" className="me-1" />
                    <span className="align-middle">Montreal, Canada</span>
                  </div>
                </div>
                <Button size='xl' onClick={() => setVerticallyCenteredScrollable(true)}>About</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mb-5">
            <Card.Body>
              <div className="d-flex align-items-center flex-column mb-4">
                <div className="d-flex align-items-center flex-column">
                  <div className="sw-13 position-relative mb-3">
                    <img src="/img/profile/profile-1.webp" className="img-fluid rounded-xl" alt="thumb" />
                  </div>
                  <div className="h5 mb-0">Blaine Cottrell</div>
                  <div className="text-muted">Executive UI/UX Designer</div>
                  <div className="text-muted mb-3">
                    <CsLineIcons icon="pin" className="me-1" />
                    <span className="align-middle">Montreal, Canada</span>
                  </div>
                </div>
                <Button size='xl' onClick={() => setVerticallyCenteredScrollable(true)}>About</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mb-5">
            <Card.Body>
              <div className="d-flex align-items-center flex-column mb-4">
                <div className="d-flex align-items-center flex-column">
                  <div className="sw-13 position-relative mb-3">
                    <img src="/img/profile/profile-1.webp" className="img-fluid rounded-xl" alt="thumb" />
                  </div>
                  <div className="h5 mb-0">Blaine Cottrell</div>
                  <div className="text-muted">Executive UI/UX Designer</div>
                  <div className="text-muted mb-3">
                    <CsLineIcons icon="pin" className="me-1" />
                    <span className="align-middle">Montreal, Canada</span>
                  </div>
                </div>
                <Button size='xl' onClick={() => setVerticallyCenteredScrollable(true)}>About</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h2 className='small-title'>Mentor Videos</h2>
      <Row className='mb-5' xs="1" xxl="2">
        <Col className="mb-2">
          <PurePlyr />
        </Col>
        <Col>
          <PurePlyr />
        </Col>
      </Row>

      <Row className="mb-5">
        <h2 className="small-title">Tools Covered</h2>
        <Glide
          noControls
          options={{
            gap: 0,
            rewind: false,
            type: 'carousel',
            autoplay: 3000,
            hoverpause: false,
            animationDuration: 3000,
            animationTimingFunc: 'linear',
            perView: 6,
            breakpoints: {
              400: { perView: 1 },
              600: { perView: 3 },
              1400: { perView: 4 },
              1600: { perView: 6 },
              1900: { perView: 6 },
              3840: { perView: 8 },
            },
        }}>
          {['codecanyon', 'graphicriver', 'photodune', 'themeforest', 'codecanyon', 'graphicriver'].map((brand, i) => (
            <Glide.Item key={`flow.${i}`} style = {{ margin : "auto 0px", padding : "0px 0px 0px 0px"}}>
              <Col>
                <div className="card hover-img-scale-up">
                  <img
                    className="card-img sh-15 sh-sm-25 scale cursor-pointer"
                    src="/img/product/small/product-3.webp"
                    alt="card"
                  />
                </div>
              </Col>
            </Glide.Item>
          ))}
        </Glide>
      </Row>

      <h2 className="small-title">Career Guidance</h2>
      <Row xxl="2" xs="1" className="mb-5">
      <Col className="mb-2">
        <Card className="mb-2 h-100">
          <Card.Body>
            <Row className="row g-0">
              <Col xs="auto">
                <div className="d-inline-block d-flex">
                  <div className="bg-gradient-light sw-6 sh-6 rounded-xl">
                    <div className="text-white d-flex justify-content-center align-items-center h-100">
                      <CsLineIcons icon="radish" />
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="d-flex flex-column ps-5 h-100 justify-content-start">
                  <div className="d-flex flex-column">
                    <div className="d-flex flex-column justify-content-center sh-6">
                      <NavLink to="#" className="heading">
                        Chupa Chups Bonbon
                      </NavLink>
                    </div>
                  </div>
                  <div className="mb-n2">
                    <Row className="g-0 mb-2">
                      <Col xs="auto">
                        <div className="sw-3 me-1">
                          <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                        </div>
                      </Col>
                      <Col className="lh-1-25">
                        <NavLink to="#" className="alternate-link align-top">
                          Chocolate cake marshmallow muffin
                        </NavLink>
                      </Col>
                    </Row>
                    <Row className="g-0 mb-2">
                      <Col xs="auto">
                        <div className="sw-3 me-1">
                          <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                        </div>
                      </Col>
                      <Col className="lh-1-25">
                        <NavLink to="#" className="alternate-link align-top">
                          Bear claw marzipan tiramisu topping
                        </NavLink>
                      </Col>
                    </Row>
                    <Row className="g-0 mb-2">
                      <Col xs="auto">
                        <div className="sw-3 me-1">
                          <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                        </div>
                      </Col>
                      <Col className="lh-1-25">
                        <NavLink to="#" className="alternate-link align-top">
                          Gingerbread biscuit bear claw marzipan tiramisu topping
                        </NavLink>
                      </Col>
                    </Row>
                    <Row className="g-0 mb-2">
                      <Col xs="auto">
                        <div className="sw-3 me-1">
                          <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                        </div>
                      </Col>
                      <Col className="lh-1-25">
                        <NavLink to="#" className="alternate-link align-top">
                          Sweet roll apple pie tiramisu bonbon sugar plum muffin sesame snaps chocolate
                        </NavLink>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        </Col>
        <Col className="mb-2">
        <Card className="mb-2 h-100">
          <Card.Body>
            <Row className="row g-0">
              <Col xs="auto">
                <div className="d-inline-block d-flex">
                  <div className="bg-gradient-light sw-6 sh-6 rounded-xl">
                    <div className="text-white d-flex justify-content-center align-items-center h-100">
                      <CsLineIcons icon="radish" />
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="d-flex flex-column ps-5 h-100 justify-content-start">
                  <div className="d-flex flex-column">
                    <div className="d-flex flex-column justify-content-center sh-6">
                      <NavLink to="#" className="heading">
                        Chupa Chups Bonbon
                      </NavLink>
                    </div>
                  </div>
                  <div className="mb-n2">
                    <Row className="g-0 mb-2">
                      <Col xs="auto">
                        <div className="sw-3 me-1">
                          <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                        </div>
                      </Col>
                      <Col className="lh-1-25">
                        <NavLink to="#" className="alternate-link align-top">
                          Chocolate cake marshmallow muffin
                        </NavLink>
                      </Col>
                    </Row>
                    <Row className="g-0 mb-2">
                      <Col xs="auto">
                        <div className="sw-3 me-1">
                          <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                        </div>
                      </Col>
                      <Col className="lh-1-25">
                        <NavLink to="#" className="alternate-link align-top">
                          Bear claw marzipan tiramisu topping
                        </NavLink>
                      </Col>
                    </Row>
                    <Row className="g-0 mb-2">
                      <Col xs="auto">
                        <div className="sw-3 me-1">
                          <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                        </div>
                      </Col>
                      <Col className="lh-1-25">
                        <NavLink to="#" className="alternate-link align-top">
                          Gingerbread biscuit bear claw marzipan tiramisu topping
                        </NavLink>
                      </Col>
                    </Row>
                    <Row className="g-0 mb-2">
                      <Col xs="auto">
                        <div className="sw-3 me-1">
                          <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                        </div>
                      </Col>
                      <Col className="lh-1-25">
                        <NavLink to="#" className="alternate-link align-top">
                          Sweet roll apple pie tiramisu bonbon sugar plum muffin sesame snaps chocolate
                        </NavLink>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        </Col>
        <Col className="mb-2">
        <Card className="mb-2 h-100">
          <Card.Body>
            <Row className="row g-0">
              <Col xs="auto">
                <div className="d-inline-block d-flex">
                  <div className="bg-gradient-light sw-6 sh-6 rounded-xl">
                    <div className="text-white d-flex justify-content-center align-items-center h-100">
                      <CsLineIcons icon="radish" />
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="d-flex flex-column ps-5 h-100 justify-content-start">
                  <div className="d-flex flex-column">
                    <div className="d-flex flex-column justify-content-center sh-6">
                      <NavLink to="#" className="heading">
                        Chupa Chups Bonbon
                      </NavLink>
                    </div>
                  </div>
                  <div className="mb-n2">
                    <Row className="g-0 mb-2">
                      <Col xs="auto">
                        <div className="sw-3 me-1">
                          <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                        </div>
                      </Col>
                      <Col className="lh-1-25">
                        <NavLink to="#" className="alternate-link align-top">
                          Chocolate cake marshmallow muffin
                        </NavLink>
                      </Col>
                    </Row>
                    <Row className="g-0 mb-2">
                      <Col xs="auto">
                        <div className="sw-3 me-1">
                          <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                        </div>
                      </Col>
                      <Col className="lh-1-25">
                        <NavLink to="#" className="alternate-link align-top">
                          Bear claw marzipan tiramisu topping
                        </NavLink>
                      </Col>
                    </Row>
                    <Row className="g-0 mb-2">
                      <Col xs="auto">
                        <div className="sw-3 me-1">
                          <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                        </div>
                      </Col>
                      <Col className="lh-1-25">
                        <NavLink to="#" className="alternate-link align-top">
                          Gingerbread biscuit bear claw marzipan tiramisu topping
                        </NavLink>
                      </Col>
                    </Row>
                    <Row className="g-0 mb-2">
                      <Col xs="auto">
                        <div className="sw-3 me-1">
                          <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                        </div>
                      </Col>
                      <Col className="lh-1-25">
                        <NavLink to="#" className="alternate-link align-top">
                          Sweet roll apple pie tiramisu bonbon sugar plum muffin sesame snaps chocolate
                        </NavLink>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        </Col>
        <Col className="mb-2">
        <Card className="mb-2 h-100">
          <Card.Body>
            <Row className="row g-0">
              <Col xs="auto">
                <div className="d-inline-block d-flex">
                  <div className="bg-gradient-light sw-6 sh-6 rounded-xl">
                    <div className="text-white d-flex justify-content-center align-items-center h-100">
                      <CsLineIcons icon="radish" />
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="d-flex flex-column ps-5 h-100 justify-content-start">
                  <div className="d-flex flex-column">
                    <div className="d-flex flex-column justify-content-center sh-6">
                      <NavLink to="#" className="heading">
                        Chupa Chups Bonbon
                      </NavLink>
                    </div>
                  </div>
                  <div className="mb-n2">
                    <Row className="g-0 mb-2">
                      <Col xs="auto">
                        <div className="sw-3 me-1">
                          <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                        </div>
                      </Col>
                      <Col className="lh-1-25">
                        <NavLink to="#" className="alternate-link align-top">
                          Chocolate cake marshmallow muffin
                        </NavLink>
                      </Col>
                    </Row>
                    <Row className="g-0 mb-2">
                      <Col xs="auto">
                        <div className="sw-3 me-1">
                          <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                        </div>
                      </Col>
                      <Col className="lh-1-25">
                        <NavLink to="#" className="alternate-link align-top">
                          Bear claw marzipan tiramisu topping
                        </NavLink>
                      </Col>
                    </Row>
                    <Row className="g-0 mb-2">
                      <Col xs="auto">
                        <div className="sw-3 me-1">
                          <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                        </div>
                      </Col>
                      <Col className="lh-1-25">
                        <NavLink to="#" className="alternate-link align-top">
                          Gingerbread biscuit bear claw marzipan tiramisu topping
                        </NavLink>
                      </Col>
                    </Row>
                    <Row className="g-0 mb-2">
                      <Col xs="auto">
                        <div className="sw-3 me-1">
                          <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                        </div>
                      </Col>
                      <Col className="lh-1-25">
                        <NavLink to="#" className="alternate-link align-top">
                          Sweet roll apple pie tiramisu bonbon sugar plum muffin sesame snaps chocolate
                        </NavLink>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        </Col>
        <Col className="mb-2">
        <Card className="mb-2 h-100">
          <Card.Body>
            <Row className="row g-0">
              <Col xs="auto">
                <div className="d-inline-block d-flex">
                  <div className="bg-gradient-light sw-6 sh-6 rounded-xl">
                    <div className="text-white d-flex justify-content-center align-items-center h-100">
                      <CsLineIcons icon="radish" />
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="d-flex flex-column ps-5 h-100 justify-content-start">
                  <div className="d-flex flex-column">
                    <div className="d-flex flex-column justify-content-center sh-6">
                      <NavLink to="#" className="heading">
                        Chupa Chups Bonbon
                      </NavLink>
                    </div>
                  </div>
                  <div className="mb-n2">
                    <Row className="g-0 mb-2">
                      <Col xs="auto">
                        <div className="sw-3 me-1">
                          <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                        </div>
                      </Col>
                      <Col className="lh-1-25">
                        <NavLink to="#" className="alternate-link align-top">
                          Chocolate cake marshmallow muffin
                        </NavLink>
                      </Col>
                    </Row>
                    <Row className="g-0 mb-2">
                      <Col xs="auto">
                        <div className="sw-3 me-1">
                          <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                        </div>
                      </Col>
                      <Col className="lh-1-25">
                        <NavLink to="#" className="alternate-link align-top">
                          Bear claw marzipan tiramisu topping
                        </NavLink>
                      </Col>
                    </Row>
                    <Row className="g-0 mb-2">
                      <Col xs="auto">
                        <div className="sw-3 me-1">
                          <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                        </div>
                      </Col>
                      <Col className="lh-1-25">
                        <NavLink to="#" className="alternate-link align-top">
                          Gingerbread biscuit bear claw marzipan tiramisu topping
                        </NavLink>
                      </Col>
                    </Row>
                    <Row className="g-0 mb-2">
                      <Col xs="auto">
                        <div className="sw-3 me-1">
                          <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                        </div>
                      </Col>
                      <Col className="lh-1-25">
                        <NavLink to="#" className="alternate-link align-top">
                          Sweet roll apple pie tiramisu bonbon sugar plum muffin sesame snaps chocolate
                        </NavLink>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        </Col>
        <Col className="mb-2">
        <Card className="mb-2 h-100">
          <Card.Body>
            <Row className="row g-0">
              <Col xs="auto">
                <div className="d-inline-block d-flex">
                  <div className="bg-gradient-light sw-6 sh-6 rounded-xl">
                    <div className="text-white d-flex justify-content-center align-items-center h-100">
                      <CsLineIcons icon="radish" />
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="d-flex flex-column ps-5 h-100 justify-content-start">
                  <div className="d-flex flex-column">
                    <div className="d-flex flex-column justify-content-center sh-6">
                      <NavLink to="#" className="heading">
                        Chupa Chups Bonbon
                      </NavLink>
                    </div>
                  </div>
                  <div className="mb-n2">
                    <Row className="g-0 mb-2">
                      <Col xs="auto">
                        <div className="sw-3 me-1">
                          <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                        </div>
                      </Col>
                      <Col className="lh-1-25">
                        <NavLink to="#" className="alternate-link align-top">
                          Chocolate cake marshmallow muffin
                        </NavLink>
                      </Col>
                    </Row>
                    <Row className="g-0 mb-2">
                      <Col xs="auto">
                        <div className="sw-3 me-1">
                          <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                        </div>
                      </Col>
                      <Col className="lh-1-25">
                        <NavLink to="#" className="alternate-link align-top">
                          Bear claw marzipan tiramisu topping
                        </NavLink>
                      </Col>
                    </Row>
                    <Row className="g-0 mb-2">
                      <Col xs="auto">
                        <div className="sw-3 me-1">
                          <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                        </div>
                      </Col>
                      <Col className="lh-1-25">
                        <NavLink to="#" className="alternate-link align-top">
                          Gingerbread biscuit bear claw marzipan tiramisu topping
                        </NavLink>
                      </Col>
                    </Row>
                    <Row className="g-0 mb-2">
                      <Col xs="auto">
                        <div className="sw-3 me-1">
                          <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                        </div>
                      </Col>
                      <Col className="lh-1-25">
                        <NavLink to="#" className="alternate-link align-top">
                          Sweet roll apple pie tiramisu bonbon sugar plum muffin sesame snaps chocolate
                        </NavLink>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        </Col>
      </Row>

      <Pricing/>

      <Row className="mb-5">
        <h2 className="small-title">Videos</h2>
        <PlayerBasic/>
      </Row>

      <Row>
        <h2 className="small-title">Testimonials</h2>
        <BlogHome/>
      </Row>

    
      <h2 className="small-title">Blogs</h2> 
      <ThumbnailsIconContent type="/blogs/" items={ blogs } />

      <h2 className="small-title">Other Programs</h2>
      <ThumbnailsIconContent type="/programs/" items={ programs } />

      <h2 className="small-title">Cta</h2>    
      <Row className="mb-5" xs="1" xxl="2">
        <Col className="mb-2"> <CtaTextAndButtonsSecond/> </Col>
        <Col> <CtaTextAndButtonsSecond/> </Col>
      </Row>


      <h2 className="small-title">Frequently Asked Questions</h2>
      <section className="scroll-section">
      {faqs.map((faq, i) => {
        return (
          <Card className="mb-2 p-2">
            <Accordion flush>
              <Accordion.Header as="div">{faq.title}</Accordion.Header> 
              <Accordion.Body>
                <Accordion flush>
                {faq.subFaqs.map((subFaq,j) => {
                  return (
                    <Accordion.Item eventKey={j}>
                      <Accordion.Header as="div">{subFaq.ques}</Accordion.Header>
                      <Accordion.Body>{subFaq.ans}</Accordion.Body>
                    </Accordion.Item>
                );})}
                </Accordion>
              </Accordion.Body>
            </Accordion>
          </Card>
        );
    })}
      
      </section>

      <Modal show={verticallyCenteredScrollable} onHide={() => setVerticallyCenteredScrollable(false)} scrollable centered size="xl">
        <Modal.Header closeButton>
          <Modal.Title id="verticallyCenteredScrollableLabel">Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Liquorice caramels apple pie chupa chups bonbon. Jelly-o candy apple pie sugar plum icing chocolate cake lollipop jujubes bear claw. Pastry
            sweet roll carrot cake cake macaroon gingerbread cookie. Lemon drops brownie candy cookie candy pie sweet roll biscuit marzipan. Chocolate
            bar candy canes macaroon liquorice danish biscuit biscuit. Tiramisu toffee brownie sweet roll sesame snaps halvah. Icing carrot cake cupcake
            gummi bears danish. Sesame snaps muffin macaroon tiramisu ice cream jelly-o pudding marzipan tootsie roll. Muffin candy icing tootsie roll
            wafer powder danish cheesecake macaroon. Sweet marshmallow oat cake marshmallow ice cream carrot cake. Bonbon powder carrot cake marzipan
            jelly beans pie cotton candy cotton candy. Gummies donut caramels chocolate bar. Powder soufflé brownie jelly beans gingerbread candy.
          </p>
          <p>
            Apple pie gummies marshmallow wafer. Cookie macaroon croissant tart topping jelly pie sesame snaps jelly. Chocolate tootsie roll marshmallow
            tootsie roll gummi bears jelly beans lollipop macaroon gummi bears. Ice cream gingerbread tart cheesecake. Brownie jelly beans cookie
            liquorice candy bear claw powder muffin sweet roll. Carrot cake gingerbread pudding chocolate cake cake chocolate bar sesame snaps wafer.
            Pie jelly beans tart donut chupa chups caramels sesame snaps wafer gummies. Cake marshmallow cupcake donut. Marshmallow cookie gummies
            chocolate cake dragée topping cheesecake halvah carrot cake. Cupcake bear claw carrot cake candy canes bonbon croissant biscuit liquorice
            fruitcake. Jelly liquorice gummies. Biscuit croissant croissant liquorice. Gummi bears pie powder fruitcake caramels brownie danish pastry
            pudding. Caramels sugar plum cookie cotton candy tootsie roll jelly pudding.
          </p>
          <p>
            Tiramisu brownie tart chupa chups icing chupa chups. Gummi bears fruitcake carrot cake chocolate bonbon. Sesame snaps brownie gummi bears
            tootsie roll caramels dragée. Powder cake gummies jelly beans toffee carrot cake bonbon powder muffin. Marshmallow jelly beans cake donut
            cotton candy chocolate bar biscuit macaroon marzipan. Cake cupcake gummies. Gingerbread bonbon wafer. Pastry sweet cookie danish lollipop
            sweet toffee topping bear claw. Apple pie dessert cake dessert. Tiramisu pie sugar plum gingerbread cupcake brownie candy canes gummies
            jelly. Bonbon chocolate cake lollipop lollipop jelly beans apple pie halvah sweet roll. Macaroon jujubes powder cheesecake sesame snaps
            fruitcake marzipan muffin.
          </p>
          <p>
            Powder icing cotton candy gingerbread cake chocolate bar muffin. Fruitcake bear claw cake chupa chups. Gingerbread dessert chocolate cake
            tiramisu macaroon. Gingerbread sweet roll sesame snaps donut danish carrot cake. Muffin chocolate bar jujubes ice cream jujubes. Dessert
            tiramisu chocolate bar biscuit. Brownie ice cream marshmallow topping. Icing liquorice oat cake caramels. Sugar plum gummi bears jujubes
            cookie jelly-o tootsie roll chocolate bar. Jujubes candy jelly-o topping lemon drops. Cupcake gingerbread cookie cookie lemon drops tootsie
            roll lollipop. Carrot cake oat cake jelly-o gummies oat cake cake biscuit carrot cake tart.
          </p>
          <p>
            Donut chupa chups cake. Chupa chups cake cheesecake dragée fruitcake. Fruitcake tart donut biscuit. Soufflé brownie carrot cake pastry
            powder. Powder donut dragée toffee. Chocolate cake chocolate soufflé gummi bears jelly beans ice cream pastry. Fruitcake brownie cupcake oat
            cake danish wafer candy cake. Fruitcake chocolate chocolate cake. Marzipan wafer macaroon cookie candy canes fruitcake. Lemon drops sesame
            snaps cotton candy marshmallow lemon drops fruitcake dragée brownie. Jelly beans gingerbread sweet roll bonbon. Fruitcake tira
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setVerticallyCenteredScrollable(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>




      <Modal show={exampleModal} onHide={() => setExampleModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Week 1</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div className="d-flex flex-column mb-n4 text-start align-items-start w-100">
            <div className="mb-4">
              <p className="text-small text-muted mb-2">OBJECTIVES</p>
              <ol className="ps-3 mb-0">
                <li className="mb-1">Sugar plum gummi bears jujubes.</li>
                <li className="mb-1">Liquorice caramels apple pie chupa chups bonbon.</li>
                <li className="mb-1">Muffin sweet tootsie roll tart.</li>
                <li className="mb-1">Gingerbread pudding chocolate.</li>
              </ol>
            </div>
            <div className="mb-4">
              <p className="text-small text-muted mb-2">ACTIVITIES</p>
              <p className="mb-0">
                Gummies sugar plum cake pie muffin danish bear claw bear claw jelly-o. Chocolate icing biscuit. Lollipop chocolate cake jujubes pastry
                ice cream pie cotton candy cotton candy toffee. Liquorice croissant cupcake macaroon liquorice.
              </p>
            </div>
            <div className="mb-4">
              <p className="text-small text-muted mb-2">ASSIGNMENTS</p>
              <p className="mb-0">
                Pudding marshmallow chocolate gingerbread carrot cake apple pie jelly marzipan macaroon. Tart gummies topping biscuit.
              </p>
            </div>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setExampleModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>



      <Modal show={currModal} onHide={() => setCurrModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Curriculum</Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <Accordion defaultActiveKey="1" flush>
              <Accordion.Item eventKey="1">
                <Accordion.Header as="div">Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                  Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's
                  accordion body.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header as="div">Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                  Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's
                  accordion body. Let's imagine this being filled with some actual content.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header as="div">Accordion Item #3</Accordion.Header>
                <Accordion.Body>
                  Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's
                  accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first
                  glance, a bit more representative of how this would look in a real-world application.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setCurrModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CoursesDetail;