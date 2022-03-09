import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Select from 'react-select';
import 'react-datepicker/dist/react-datepicker.css';
import axios from "axios";
class LayoutsBasic  extends React.Component{
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
            .post("http://localhost:4000/journey", this.state.data)
            .then(response => {
              this.setState({ success: 1 });
              })
            .catch(function (error) {
              console.log(error);
            });
            });
           
      
        }    
  }
  // Select
  // const [selectValue, setSelectValue] = useState();
  // const options = [
  //   { value: 'Data Science for IT', label: 'Data Science for IT' },
  //   { value: 'Data Science for Finance', label: 'Data Science for Finance' },
  //   { value: 'Deep Learning', label: 'Deep Learning' },
  //   { value: 'Machine Learning With Python', label: 'Machine Learning With Python' },
  //   { value: 'Data Analysis', label: 'Data Analysis' },
  //   { value: 'Python Preparatory Course', label: 'Python Preparatory Course' },
  // ];

  // let [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   course: ''
  // });
  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const onFormSubmit = e => {
  //   e.preventDefault();
  //   axios
  //       .post("http://localhost:4000/journey",formData)
  //       .then(response => {
          
  //         console.log('Student Journey added');
            
  //       })
  //       .catch(function(error) {
  //           console.log(error);
  //       });
  // };
  render() {
    const { name, email,phone,course } = this.props;
    const { success } = this.state.success;
  return (
    <Form>
      <div className="mb-2">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" id="#name" name="name"  onChange={event => {
                        this.getName(event.target.value);
                      }} /><span style={{color:'red'}}>{this.state.errorName}</span>
      </div>
      <div className="mb-2">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" id="#email" name="email"  onChange={event => {
                        this.getEmail(event.target.value);
                      }} /><span style={{color:'red'}}>{this.state.errorEmail}</span>
      </div>
      <div className="mb-2">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="phone" id="#phone" name="phone"  onChange={event => {
                        this.getPhone(event.target.value);
                      }}  /><span style={{color:'red'}}>{this.state.errorPhone}</span>
      </div>
      <div className="mb-3">
        <Form.Label>Select</Form.Label>
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
                    </Form.Control>
                      
                      <span style={{color:'red'}}>{this.state.errorCourse}</span>
      </div>
      <Button variant="primary"  onClick={this.handleSubmit}>Submit</Button>{
                this.state.success==1
                ?<span style={{color:'green'}}>Student Journey form has been submitted</span>
                :''
                }
    </Form>
  );
  }
};

export default LayoutsBasic;
