import React from 'react';
import { Card } from 'react-bootstrap';
import HtmlHead from 'components/html-head/HtmlHead';
import { Helmet } from 'react-helmet';

const Contact = () => {
  const title = 'Contact';
  const description = 'Contact';

  return (
    <>
      <HtmlHead title={title} description={description} />
      <Helmet>
        <link rel="canonical" href="/contact">
        </link>
      </Helmet>
      {/* Title Start */}
      <div className="page-title-container">
        <h1 className="mb-0 pb-0 display-4">{title}</h1>
      </div>
      {/* Title End */}

      <h2 className="small-title">Content Title</h2>
      <Card>
        <Card.Body>Content</Card.Body>
      </Card>
    </>
  );
};

export default Contact;