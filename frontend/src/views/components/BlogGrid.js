import React, { useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Glide from 'components/carousel/Glide';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import { programs } from 'data/programs';
import Clamp from 'components/clamp';
import axios from "axios";
let x;
class BlogGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: '',
      name: '',
      email: '',
      phone: '',
      course:'',
      success:0,
      errorName: '',
      errorEmail: '',
      errorPhone: '',
      errorCourse: '',
      //dataValue: false
    };
      this.getName = this.getName.bind(this);
      this.getEmail = this.getEmail.bind(this);
      this.getPhone = this.getPhone.bind(this);
      this.getCourse = this.getCourse.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentWillReceiveProps(nextProps) {
    if (this.props.name !== nextProps.name) {
        this.setState({ dataValue: true });
    }
}
getName(event) {
  const { name} = this.state;
  this.setState({ errorName: '' });
  this.setState({ name: event });
}
getEmail(event) {
  const { email } = this.state;
  this.setState({ errorEmail: '' });
  this.setState({ email: event });
}
getPhone(event) {
  const { phone } = this.state;
  this.setState({ errorPhone: '' });
  this.setState({ phone: event });
}
getCourse(event) {
  const { course } = this.state;
  this.setState({ errorCourse: '' });
  this.setState({ course: event });
}
handleSubmit() {
  const { name, email,phone,course,success } = this.state;
      if (name === '') {
        this.setState({ errorName: 'Please enter Name', dataValue: false});
      
      } else if (email === '') {
      
        this.setState({ errorEmail: 'Please enter Email', dataValue: false });
      } 
      else if (phone === '') {
      
        this.setState({ errorPhone: 'Please enter Phone', dataValue: false });
      }
      else if (course === '') {
      
        this.setState({ errorCourse: 'Please select Course', dataValue: false });
      }
      else
      {     this.setState({ data: { name, email,phone,course } }, () => {
           // this.props.sendData(this.state.data);
            axios
            .post("http://localhost:4000/enquire", this.state.data)
            .then(response => {
              this.setState({ success: 1 });
              })
            .catch(function (error) {
              console.log(error);
            });
            });
           
      
        }    
  }
  // const BlogGrid = () => {
  // let ;
  // let [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   course: ''
  // });
  // handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // onFormSubmit = e => {
  //   e.preventDefault();
  //   axios
  //     .post("http://localhost:4000/enquire", formData)
  //     .then(response => {

  //       console.log('Enquiry added');

  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };
  render() {
    const { name, email,phone,course } = this.props;
    const { success } = this.state.success;
    console.log('lll');
    console.log(success);
    return (

      <Row>
        <Col>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-xl-3 g-2 mb-3">
            <Glide
              noDots={true}
              options={{
                perView: 3,
                breakpoints: {
                  400: {
                    perView: 1
                  }
                }
              }}>
              {programs.map((p) => {
                { x = '/programs/' + p.slug; }
                return (
                  <Glide.Item>
                    <Card className="mb-2">
                      {p.title == "Data Science for IT"
                        ? <Card.Img src="/img/banner/DataSciIT.webp" className="card-img-top sh-16" alt="card image" />
                        : p.title == "Data Science for Finance"
                          ? <Card.Img src="/img/banner/DataScienceforFinance.webp" className="card-img-top sh-16" alt="card image" />
                          : p.title == "Deep Learning"
                            ? <Card.Img src="/img/banner/DeepLearning.webp" className="card-img-top sh-16" alt="card image" />
                            : p.title == "Machine Learning With Python"
                              ? <Card.Img src="/img/banner/MachineLearning.webp" className="card-img-top sh-16" alt="card image" />
                              : p.title == "Data Analysis"
                                ? <Card.Img src="/img/banner/DataAnalytics.webp" className="card-img-top sh-16" alt="card image" />
                                : p.title == "Python Preparatory Course"
                                  ? <Card.Img src="/img/banner/Python.webp" className="card-img-top sh-16" alt="card image" />
                                  : ''
                      }
                      <Card.Body>
                        <h5 className="heading mb-0">
                          <NavLink to={x} className="body-link stretched-link">
                            <Clamp tag="span" clamp="1">{p.title}</Clamp>
                          </NavLink>
                        </h5>
                      </Card.Body>
                      <Card.Footer className="border-0 pt-0">
                        <Row className="g-0">
                          <Col xs="auto" className="pe-3">
                            <CsLineIcons icon="star" size="15" className="text-primary me-2" />
                            <span className="align-middle">4.8</span>
                          </Col>
                          <Col>
                            <CsLineIcons icon="clock" size="15" className="text-primary me-2" />
                            <span className="align-middle">00:40</span>
                          </Col>
                        </Row>
                      </Card.Footer>
                    </Card>
                  </Glide.Item>
                );
              })}
            </Glide>
          </Row>
        </Col>

        {/* Sidebar Start */}
        <Col xl="4" xxl="3">
          <Row className="mb-5">
            {/* Mailing List Start */}
            <Col xs="12">
              <Card>
                <Card.Body className="pb-4 pt-3">
                  {/* <div className="cta-3">Ready to make bread?</div> */}
                  <Form>
                    <div className="mb-2 pt-0 text-primary">Enquire Now</div>
                    {/* <div className="text-muted mb-3">Cheesecake chocolate carrot cake pie lollipop lemon drops.</div> */}
                    <Form.Control type="text" id="name" onChange={event => {
                        this.getName(event.target.value);
                      }} className="mb-1" placeholder="Name" />
                       <span style={{color:'red'}}>{this.state.errorName}</span>
                    <Form.Control type="text" id="#email" name="email" onChange={event => {
                        this.getEmail(event.target.value);
                      }} className="mb-1" placeholder="E-mail" />
                       <span style={{color:'red'}}>{this.state.errorEmail}</span>
                    <Form.Control type="text" id="#phone" name="phone" onChange={event => {
                        this.getPhone(event.target.value);
                      }}  className="mb-1" placeholder="Phone" />
                      <span style={{color:'red'}}>{this.state.errorPhone}</span>
                    <Form.Control
                      as="select"
                      className="mb-1" name="course" id="#course"  onChange={event => {
                        this.getCourse(event.target.value);
                      }}
                    > 
                      <option value="0">-- Select Course --</option>
                      <option value="Data Science for IT">Data Science for IT</option>
                      <option value="Data Science for Finance">Data Science for Finance</option>
                      <option value="Deep Learning">Deep Learning</option>
                      <option value="Machine Learning With Python">Machine Learning With Python</option>
                      <option value="Data Analysis">Data Analysis</option>
                      <option value="Python Preparatory Course">Python Preparatory Course</option>
                    </Form.Control><span style={{color:'red'}}>{this.state.errorCourse}</span>
                    <Button variant="primary" className="btn-icon btn-icon-start" type="button"  onClick={this.handleSubmit}>
                  <CsLineIcons icon="chevron-right"  /> <span>Submit</span>
                </Button>{
                this.state.success==1
                ?<span style={{color:'green'}}>Enquiry has been submitted</span>
                :''
                }
                    {/* <Button variant="primary" type="submit"><CsLineIcons icon="chevron-right" />Submit</Button> */}
                    {/* <input type="button" onClick={this.handleSubmit} value="Submit" 
       /> */}
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        {/* Sidebar End */}
      </Row>
  
);
  }

};

export default BlogGrid;
