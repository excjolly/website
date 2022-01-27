import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import ReactTags from 'react-tag-autocomplete';
import DatePicker from 'react-datepicker';
import Select from 'react-select';

import 'react-datepicker/dist/react-datepicker.css';

const LayoutsBasic = () => {
  // Tags
  const [tags, setTags] = useState([]);
  const onTagDelete = (i) => {
    const newTags = [...tags];
    newTags.splice(i, 1);
    setTags(newTags);
  };
  const onTagAddition = (tag) => {
    setTags(() => {
      return [...tags, tag];
    });
  };

  // Datepicker
  const [startDate, setStartDate] = useState(null);

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
