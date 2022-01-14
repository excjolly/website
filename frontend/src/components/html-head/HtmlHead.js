import { Helmet } from 'react-helmet';
import React from 'react';

const HtmlHead = ({ title = '', description = '', children = null }) => {
  // console.log(description, children);
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {children && children}
    </Helmet>
  );
};
export default HtmlHead;
