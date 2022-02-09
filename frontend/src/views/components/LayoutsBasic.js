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

  return (
    <Form>
      <div className="mb-2">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" />
      </div>
      <div className="mb-2">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" />
      </div>
      <div className="mb-2">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="phone" />
      </div>
      <div className="mb-3">
        <Form.Label>Select</Form.Label>
        <Select classNamePrefix="react-select" options={options} value={selectValue} onChange={setSelectValue} placeholder="" />
      </div>
      <Button variant="primary">Submit</Button>
    </Form>
  );
};

export default LayoutsBasic;
