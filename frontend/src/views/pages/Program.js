import React from 'react';
import { Button, Card, Col, Row, Accordion, useAccordionButton } from 'react-bootstrap';
import Plyr from 'plyr-react';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import { Helmet } from 'react-helmet';
import Glide from 'components/carousel/Glide';
import Pricing from 'views/pages/miscellaneous/Pricing';
import BlogHome from 'views/pages/blog/BlogHome';     

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
            <div className="card-img-top sh-50 cover">
              <PurePlyr />
            </div>
            <Card.Body>
              <h4 className="mb-3">Carrot Cake Gingerbread</h4>
              <div>
                <p>
                  Toffee croissant icing toffee. Sweet roll chupa chups marshmallow muffin liquorice chupa chups soufflé bonbon. Liquorice gummi bears cake
                  donut chocolate lollipop gummi bears. Cotton candy cupcake ice cream gummies dessert muffin chocolate jelly. Danish brownie chocolate bar
                  lollipop cookie tootsie roll candy canes. Jujubes lollipop cheesecake gummi bears cheesecake. Cake jujubes soufflé.
                </p>
                <p>
                  Cake chocolate bar biscuit sweet roll liquorice jelly jujubes. Gingerbread icing macaroon bear claw jelly toffee. Chocolate cake marshmallow
                  muffin wafer. Pastry cake tart apple pie bear claw sweet. Apple pie macaroon sesame snaps cotton candy jelly
                  <u>pudding lollipop caramels</u>
                  marshmallow. Powder halvah dessert ice cream. Carrot cake gingerbread chocolate cake tootsie roll. Oat cake jujubes jelly-o jelly chupa chups
                  lollipop jelly wafer soufflé.
                </p>
                <h6 className="mb-3 mt-5 text-alternate">Sesame Snaps Lollipop Macaroon</h6>
                <p>
                  Jelly-o jelly oat cake cheesecake halvah. Cupcake sweet roll donut. Sesame snaps lollipop macaroon. Oat cake chocolate cake marzipan pudding
                  danish gummies. Dragée liquorice jelly beans jelly jelly sesame snaps brownie. Cheesecake chocolate cake sweet roll cupcake dragée croissant
                  muffin. Lemon drops cupcake croissant liquorice donut cookie cake. Gingerbread biscuit bear claw marzipan tiramisu topping. Jelly-o croissant
                  chocolate bar gummi bears dessert lemon drops gingerbread croissant. Donut candy jelly.
                </p>
                <ul className="list-unstyled">
                  <li>Croissant</li>
                  <li>Sesame snaps</li>
                  <li>Ice cream</li>
                  <li>Candy canes</li>
                  <li>Lemon drops</li>
                </ul>
                <h6 className="mb-3 mt-5 text-alternate">Muffin Sweet Roll Apple Pie</h6>
                <p>
                  Carrot cake gummi bears wafer sesame snaps soufflé cheesecake cheesecake cake. Sweet roll apple pie tiramisu bonbon sugar plum muffin sesame
                  snaps chocolate. Lollipop sweet roll gingerbread halvah sesame snaps powder. Wafer halvah chocolate soufflé icing. Cotton candy danish
                  lollipop jelly-o candy caramels.
                </p>
              </div>
            </Card.Body>
            <Card.Footer className="border-0 pt-0">
              <Row className="align-items-center">
                <Col xs="6">
                  <div className="d-flex align-items-center">
                    <div className="sw-5 d-inline-block position-relative me-3">
                      <img src="/img/profile/profile-1.webp" className="img-fluid rounded-xl" alt="thumb" />
                    </div>
                    <div className="d-inline-block">
                      <Button variant="link" className="lh-1 d-inline-block p-0">
                        Olli Hawkins
                      </Button>
                      <div className="text-muted text-small">Development Lead</div>
                    </div>
                  </div>
                </Col>
                <Col xs="6">
                  <Row className="g-0 justify-content-end">
                    <Col xs="auto" className="pe-3">
                      <CsLineIcons icon="eye" width="15" height="15" className="cs-icon icon text-primary me-1" />
                      <span className="align-middle">221</span>
                    </Col>
                    <Col xs="auto">
                      <CsLineIcons icon="message" width="15" height="15" className="cs-icon icon text-primary me-1" />
                      <span className="align-middle">17</span>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
          {/* Preview End */}
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
          <h2 className="small-title">Tags</h2>
          <Card className="mb-5">
            <Card.Body className="mb-n1">
              <Button size="sm" variant="outline-alternate" className="mb-1 me-1">
                Food (12)
              </Button>
              <Button size="sm" variant="outline-alternate" className="mb-1 me-1">
                Baking (3)
              </Button>
              <Button size="sm" variant="outline-alternate" className="mb-1 me-1">
                Sweet (1)
              </Button>
              <Button size="sm" variant="outline-alternate" className="mb-1 me-1">
                Molding (3)
              </Button>
              <Button size="sm" variant="outline-alternate" className="mb-1 me-1">
                Pastry (5)
              </Button>
              <Button size="sm" variant="outline-alternate" className="mb-1 me-1">
                Healthy (7)
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
      <Row className="mb-5">
        <h2 className="small-title">Curriculum</h2>
        <Accordion className="mb-n2" defaultActiveKey="1">
            <Card className="d-flex mb-2 flex-grow-1">
              <CustomAccordionToggle eventKey="1">Cupcake Lollipop Biscuit</CustomAccordionToggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="pt-0">
                  <p>
                    <strong>Moon Tempor</strong>
                  </p>
                  <p>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                    skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                    single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                    proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                    haven't heard of them accusamus labore sustainable VHS.
                  </p>
                  <br />
                  <p>
                    <strong>Accusamus Labore</strong>
                  </p>
                  <p>
                    Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                    beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    <br />
                    <br />
                    Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore
                    sustainable VHS. Ad vegan excepteur butcher vice lomo. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
                    excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of
                    them accusamus labore sustainable VHS.
                  </p>
                  <p className="mb-0">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                    skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                    single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                    proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                    haven't heard of them accusamus labore sustainable VHS.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="d-flex mb-2 flex-grow-1">
              <CustomAccordionToggle eventKey="2">Roll Marshmallow</CustomAccordionToggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="pt-0">
                  <p>
                    <strong>Moon Tempor</strong>
                  </p>
                  <p className="mb-0">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                    skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                    single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                    proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                    haven't heard of them accusamus labore sustainable VHS.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="d-flex mb-2 flex-grow-1">
              <CustomAccordionToggle eventKey="3">Pudding Soufflé Macaroon Carrot Cake</CustomAccordionToggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="pt-0">
                  <p>
                    <strong>Moon Tempor</strong>
                  </p>
                  <p className="mb-0">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                    skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                    single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                    proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                    haven't heard of them accusamus labore sustainable VHS.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="d-flex mb-2 flex-grow-1">
              <CustomAccordionToggle eventKey="4">Sesame Snaps Cheesecake Muffin</CustomAccordionToggle>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="pt-0">
                  <p>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                    skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                    single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                    proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                    haven't heard of them accusamus labore sustainable VHS.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="d-flex mb-2 flex-grow-1">
              <CustomAccordionToggle eventKey="5">Candy Cupcake Ice Cream Gummies Dessert Muffin</CustomAccordionToggle>
              <Accordion.Collapse eventKey="5">
                <Card.Body className="pt-0">
                  <p>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                    skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                    single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                    proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                    haven't heard of them accusamus labore sustainable VHS.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="d-flex mb-2 flex-grow-1">
              <CustomAccordionToggle eventKey="6">Powder Halvah Dessert Ice Cream</CustomAccordionToggle>
              <Accordion.Collapse eventKey="6">
                <Card.Body className="pt-0">
                  <p>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                    skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                    single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                    proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                    haven't heard of them accusamus labore sustainable VHS.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
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
      <Row className="mb-5 row-cols-1 row-cols-md-3 g-1">
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