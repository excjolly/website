import React from 'react';
import { Button, Card, Col, Row, Accordion, useAccordionButton, Form } from 'react-bootstrap';
import Plyr from 'plyr-react';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import { Helmet } from 'react-helmet';
import Glide from 'components/carousel/Glide';
import Pricing from 'views/pages/miscellaneous/Pricing';
import BlogHome from 'views/pages/blog/BlogHome';     
import Clamp from 'components/clamp';
import { NavLink } from 'react-router-dom';
import ListBasicItems from 'views/blocks/list/ListBasicItems';

const PurePlyr = React.memo(() => {
  const videoSrc = {
    type: 'video',
    sources: [{ src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' }],
    poster: '/img/product/large/product-2.webp',
  };

  return <Plyr source={videoSrc} options={{}} />;
});

function CustomAccordionToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () => {});
  return (
    <Card.Body className="py-4" onClick={decoratedOnClick} role="button">
      <Button variant="link" className="list-item-heading p-0">
        {children}
      </Button>
    </Card.Body>
  );
}

const CoursesDetail = () => {
  const title = 'Bread Making Techniques';
  const description = 'Elearning Portal Course Detail Page';

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
            <h1 className="mb-0 pb-0 display-4">{title}</h1>
          </Col>
          {/* Title End */}
        </Row>
      </div>
      {/* Title and Top Buttons End */}

      <Row className="g-5">
        <Col xxl="8" className="mb-0">
          {/* Preview Start */}
          <h2 className="small-title">Preview</h2>
          <Card className="mb-5">
              <PurePlyr />
          </Card>
          {/* Preview End */}
          
          <h2 className="small-title">Program Overview</h2>
          <Row xxl="2">
            <Col>
              <Card className="mb-5">
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
              <Card className="mb-5">
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
              <Card className="mb-5">
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
              <Card className="mb-5">
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
          <h2 className="small-title">Download Brochure</h2>
          <Card className="mb-5">
            <Card.Body>
              <div className="cta-3">Need more details?</div>
              <div className="mb-3 cta-3 text-primary">Read the docs!</div>
              <div className="text-muted mb-4">Cheesecake chocolate carrot cake pie lollipop lemon toffee lollipop. Oat cake pie cake cotton.</div>
              <Button variant="outline-primary" className="btn-icon btn-icon-start sw-15 stretched-link">
                <CsLineIcons icon="file-text" /> <span>Docs</span>
              </Button>
            </Card.Body>
          </Card>

          <h2 className="small-title">Download Brochure</h2>
          <Card className="mb-5">
            <Card.Body>
              <div className="cta-3">Need more details?</div>
              <div className="mb-3 cta-3 text-primary">Read the docs!</div>
              <div className="text-muted mb-4">Cheesecake chocolate carrot cake pie lollipop lemon toffee lollipop. Oat cake pie cake cotton.</div>
              <Button variant="outline-primary" className="btn-icon btn-icon-start sw-15 stretched-link">
                <CsLineIcons icon="file-text" /> <span>Docs</span>
              </Button>
            </Card.Body>
          </Card>
          {/* Tags End */}
        </Col>
      </Row>

      <h2 className='small-title'> List </h2>
      <Row className='mb-5' xxl="2">
        <ListBasicItems/>
        <ListBasicItems/>
      </Row>

      <Row>
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
                        <Button variant="link" className="p-0 pt-1 heading text-start">
                          Powder Sesame Snaps Cupcake
                        </Button>
                        {/* <div className="text-muted mt-1">
                          Jujubes tootsie roll liquorice cake jelly beans pudding gummi bears chocolate cake donut. Jelly-o sugar plum fruitcake bonbon bear claw cake
                          cookie chocolate bar. Tiramisu soufflé apple pie.
                        </div> */}
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
                        {/* <div className="text-muted mt-1">
                          Jelly-o wafer sesame snaps candy canes. Danish dragée toffee bonbon. Jelly-o marshmallow cake oat cake caramels jujubes.
                        </div> */}
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
                        {/* <div className="text-muted mt-1">
                          Jelly-o wafer sesame snaps candy canes. Danish dragée toffee bonbon. Jelly-o marshmallow cake oat cake caramels jujubes.
                        </div> */}
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
                        {/* <div className="text-muted mt-1">
                          Jelly-o wafer sesame snaps candy canes. Danish dragée toffee bonbon. Jelly-o marshmallow cake oat cake caramels jujubes.
                        </div> */}
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
                        {/* <div className="text-muted mt-1">
                          Cake fruitcake oat cake. Muffin jelly bonbon croissant. Bonbon topping donut marshmallow carrot cake muffin.
                        </div> */}
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
        <h2 className='small-title'></h2>
        <Card>
          <Card.Body>
            <h2 className="small-title">Enquiry Form</h2>
            <Form.Control type="name" className="mb-2" placeholder="Name" />
            <Form.Control type="email" className="mb-2" placeholder="E-mail" />
            <Form.Control type="phone" className="mb-2" placeholder="Phone" />
            <Form.Control
              as="select"
              className="mb-4"
            >
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="black">Black</option>
              <option value="orange">Orange</option>
            </Form.Control>
            <Button variant="primary" className="btn-icon btn-icon-start">
              <CsLineIcons icon="chevron-right" /> <span>Submit</span>
            </Button>
          </Card.Body>
        </Card>
      </Col>

      </Row>

      <h2 className="small-title">Curriculum</h2>
      <Row className="mb-5">
        <Accordion className="mb-n2" defaultActiveKey="1">
            <Card className="d-flex mb-2 flex-grow-1">
              <CustomAccordionToggle eventKey="1">Cupcake Lollipop Biscuit</CustomAccordionToggle>
            </Card>
            <Card className="d-flex mb-2 flex-grow-1">
              <CustomAccordionToggle eventKey="2">Roll Marshmallow</CustomAccordionToggle>
            </Card>
            <Card className="d-flex mb-2 flex-grow-1">
              <CustomAccordionToggle eventKey="3">Pudding Soufflé Macaroon Carrot Cake</CustomAccordionToggle>
            </Card>
            <Card className="d-flex mb-2 flex-grow-1">
              <CustomAccordionToggle eventKey="4">Sesame Snaps Cheesecake Muffin</CustomAccordionToggle>
            </Card>
            <Card className="d-flex mb-2 flex-grow-1">
              <CustomAccordionToggle eventKey="5">Candy Cupcake Ice Cream Gummies Dessert Muffin</CustomAccordionToggle>
            </Card>
            <Card className="d-flex mb-2 flex-grow-1">
              <CustomAccordionToggle eventKey="6">Powder Halvah Dessert Ice Cream</CustomAccordionToggle>
            </Card>
          </Accordion>
      </Row>

      <h2 className="small-title">Mentors</h2>
      <Row xxl="4">
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
                <Button size='xl'>About</Button>
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
                <Button size='xl'>About</Button>
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
                <Button size='xl'>About</Button>
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
                <Button size='xl'>About</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h2 className='small-title'>Mentor Videos</h2>
      <Row className='mb-5'>
        <Col>
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
                    alt="card image"
                  />
                </div>
              </Col>
            </Glide.Item>
          ))}
        </Glide>
      </Row>

      <h2 className="small-title">Sample Projects</h2>
      <Row className="mb-5 row-cols-1 row-cols-md-4 g-1">
        <Col>
          <Card className="hover-scale-up h-100">
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
        <Card className="hover-scale-up h-100">
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
          <Card className="hover-scale-up h-100">
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
          <Card className="hover-scale-up h-100">
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

      <Row>
        <h2 className="small-title">Testimonials</h2>
        <BlogHome/>
      </Row>

      <Pricing/>
    </>
  );
};

export default CoursesDetail;