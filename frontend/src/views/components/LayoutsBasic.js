import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Select from 'react-select';
import 'react-datepicker/dist/react-datepicker.css';

const LayoutsBasic = () => {
  // Select
  const [selectValue, setSelectValue] = useState();
  const options = [
    { value: 'Breadstick', label: 'Breadstick' },
    { value: 'Biscotti', label: 'Biscotti' },
    { value: 'Fougasse', label: 'Fougasse' },
    { value: 'Lefse', label: 'Lefse' },
  ];

  let [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onFormSubmit = e => {
    e.preventDefault();
    console.log(formData, selectValue);
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <div className="mb-2">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" id="#name" name="name" value={formData.name} onChange={handleChange}/>
      </div>
      <div className="mb-2">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" id="#email" name="email" value={formData.email} onChange={handleChange}/>
      </div>
      <div className="mb-2">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="phone" id="#phone" name="phone" value={formData.phone} onChange={handleChange}/>
      </div>
      <div className="mb-3">
        <Form.Label>Select</Form.Label>
        <Select classNamePrefix="react-select" id="#option" options={options} value={selectValue} onChange={setSelectValue} placeholder="" />
      </div>
      <Button variant="primary" type="submit">Submit</Button>
    </Form>
  );
};

export default LayoutsBasic;
