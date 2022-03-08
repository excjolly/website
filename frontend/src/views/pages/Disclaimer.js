import React from 'react';
import { Card } from 'react-bootstrap';
import HtmlHead from 'components/html-head/HtmlHead';
import { Helmet } from 'react-helmet';

const Disclaimer = () => {
  const title = 'Disclaimer';
  const description = 'Disclaimer';

  return (
    <>
      <HtmlHead title={title} description={description} />
      <Helmet>
        <link rel="canonical" href="/disclaimer">
        </link>
      </Helmet>
      {/* Title Start */}
      <div className="page-title-container">
        <h1 className="mb-0 pb-0 display-4">{title}</h1>
      </div>
      {/* Title End */}

      <Card>
        <Card.Body>
            <section class="divider">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <p>The Platforms and/or Programs may contain typographical errors or inaccuracies and may not be complete or updated. Excelsior, therefore, has every right to correct any inaccuracies, errors, or omissions (comprising of after a program or an order has been submitted) and to modify or change information at any time without any intimation.</p>
                    <p>The Platforms, Programs, and any information or Excelsior Content are provided on an “as is” and “as available” basis with all faults.</p>
                    <p>Excelsior makes no representations or warranties of any kind, whether expressed or implied, concerning Excelsior Content or services available on or through our Platforms and Programs, including, but not limited to, the implied warranties of fitness for a specific purpose, merchantability and non-infringement. Excelsior makes no warranty that the services will meet the user's requirements or that the services will be uninterrupted, timely, secure, or error-free; nor does Excelsior offer any warranty with the result that may be acquired from the use of the services, or as to the reliability or accuracy of any data obtained through the services, or that any issues or problems in the software will be rectified.</p>
                    <p>The user understands and agrees that the Excelsior Content and all other information, data, or other material downloaded or otherwise obtained through or from our Platforms or Programs is obtained at the user's discretion and risk and that the user will be solely responsible for any damage to the user, the user's computer system, electronic device or any loss of data resulting from the such data’s or material’s download.</p>
                    <p>No advice or information, whether oral or written, obtained by the user from Excelsior or through or from the services, shall create any warranty by Excelsior.</p>
                    <p>
                        No advice or information, whether oral or written, obtained by the user from Excelsior or through or from the services, shall create any warranty by Excelsior.
                    </p>
                </div>
            </div>
        </div>
    </section>
        </Card.Body>
      </Card>
    </>
  );
};

export default Disclaimer;