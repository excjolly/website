/* eslint-disable no-unused-vars */
import React from 'react';
import { Wizard, Steps, Step, WithWizard } from 'react-albus';
import { Button, Form } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import { connect } from 'react-redux';
import { q1, q2, q3, q4, q5, q6, q7 } from 'redux/form/formAction';

const WizardBasic = ({ form, q1, q2, q3, q4, q5, q6, q7 }) => {
  const onClickNext = (goToNext, steps, step) => {
    step.isDone = true;
    if (steps.length - 1 <= steps.indexOf(step)) {
      return;
    }
    console.log(steps,step);
    goToNext();
  };

  const onClickPrev = (goToPrev, steps, step) => {
    if (steps.indexOf(step) <= 0) {
      return;
    }
    goToPrev();
  };

  const getClassName = (steps, step, index, stepItem) => {
    if (steps.indexOf(step) === index) {
      return 'step-doing';
    }
    if (steps.indexOf(step) > index || stepItem.isDone) {
      stepItem.isDone = true;
      return 'step-done';
    }
    return 'step';
  };

  const handleChange1 = (e) => {
    q1(e.target.value);
  }

  const handleChange2 = (e) => {
    q2(e.target.value);
  }

  const handleChange3 = (e) => {
    q3(e.target.value);
  }

  const handleChange4 = (e) => {
    q4(e.target.value);
  }

  const handleChange5 = (e) => {
    q5(e.target.value);
  }

  const handleChange6 = (e) => {
    q6(e.target.value);
  }

  const handleChange7 = (e) => {
    q7(e.target.value);
  }

  return (
    <div className="wizard wizard-default mt-1">
      <Wizard>
        <Steps>
          <Step id="step1">
            <div className="sh-30">
              <Form>
                <h5 className="card-title">Question 1</h5>
                <p className="card-text text-alternate mb-4">Are you interested in learning or doing coding or programming?</p>
                <Form.Control
                    as="select"
                    className="mb-2 mt-2"
                    onChange = {handleChange1}
                    value = {form.q1}
                  >
                    {/* <option value="">Choose...</option> */}
                    <option value="Y">Yes</option>
                    <option value="N">No</option>
                  </Form.Control>
              </Form>
            </div>
          </Step>
          <Step id="step2">
            <div className="sh-30">
              <Form>
                <h5 className="card-title">Question 2</h5>
                <p className="card-text text-alternate mb-4">How much will you rate yourself in coding or programming?</p>
                <Form.Control
                    as="select"
                    className="mb-2 mt-2"
                    onChange = {handleChange2}
                    value = {form.q2}
                  >
                    <option value="0">0-1</option>
                    <option value="1">1-2</option>
                    <option value="2">2-3</option>
                    <option value="3">3-4</option>
                    <option value="4">4-5</option>
                  </Form.Control>
              </Form>
            </div>
          </Step>
          <Step id="step3">
            <div className="sh-30">
              <Form>
                <h5 className="card-title">Question 3</h5>
                <p className="card-text text-alternate mb-4">Are you intersted in learning or doing Mathematics and Statistics?</p>
                 <Form.Control
                    as="select"
                    className="mb-2 mt-2"
                    onChange = {handleChange3}
                    value = {form.q3}
                  >
                    <option value="Y">Yes</option>
                    <option value="N">No</option>
                  </Form.Control>
              </Form>
            </div>
          </Step>
          <Step id="step4">
            <div className="sh-30">
              <Form>
                <h5 className="card-title">Question 4</h5>
                <p className="card-text text-alternate mb-4">How much will you rate yourself in 10th Level Maths?</p>
                <Form.Control
                    as="select"
                    className="mb-2 mt-2"
                    onChange = {handleChange4}
                    value = {form.q4}
                  >
                    <option value="0">0-1</option>
                    <option value="1">1-2</option>
                    <option value="2">2-3</option>
                    <option value="3">3-4</option>
                    <option value="4">4-5</option>
                  </Form.Control>
              </Form>
            </div>
          </Step>
          <Step id="step5">
            <div className="sh-30">
              <Form>
                <h5 className="card-title">Question 5</h5>
                <p className="card-text text-alternate mb-4">Are you good at problem solving?</p>
                <Form.Control
                    as="select"
                    className="mb-2 mt-2"
                    onChange = {handleChange5}
                    value = {form.q5}
                  >
                    <option value="0">0-1</option>
                    <option value="1">1-2</option>
                    <option value="2">2-3</option>
                    <option value="3">3-4</option>
                    <option value="4">4-5</option>
                  </Form.Control>
              </Form>
            </div>
          </Step>
          <Step id="step6">
            <div className="sh-30">
              <Form>
                <h5 className="card-title">Question 6</h5>
                <p className="card-text text-alternate mb-4">Minimum CTC Expectation?</p>
                <Form.Control
                    as="select"
                    className="mb-2 mt-2"
                    onChange = {handleChange6}
                    value = {form.q6}
                  >
                    <option value="1">6-8 LPA</option>
                    <option value="2">8-10 LPA</option>
                    <option value="3">10+ LPA</option>
                  </Form.Control>
              </Form>
            </div>
          </Step>
          <Step id="step7">
            <div className="sh-30">
              <Form>
                <h5 className="card-title">Question 7</h5>
                <p className="card-text text-alternate mb-4">Choose a field.</p>
                <Form.Control
                    as="select"
                    className="mb-2 mt-2"
                    onChange = {handleChange7}
                    value = {form.q7}
                  >
                    <option value="1">IT</option>
                    <option value="2">Marketing</option>
                    <option value="3">Research</option>
                    <option value="4">Finance</option>
                    <option value="5">Automobile</option>
                    <option value="6">Trading</option>
                  </Form.Control>
              </Form>
            </div>
          </Step>
          <Step id="step8" hideTopNav>
            <div className="sh-30 d-flex flex-column justify-content-center align-items-center">
              <h3 className="mb-2">Thank You!</h3>
              <p>Your registration completed successfully!</p>
              {form.q1+form.q2+form.q3+form.q4+form.q5+form.q6+form.q7}
            </div>
          </Step>
        </Steps>
        <WithWizard
          render={({ next, previous, step, steps }) => (
            <div className="wizard-buttons d-flex justify-content-center">
              <Button
                variant="outline-primary"
                className={`btn-icon btn-icon-start me-1 ${steps.indexOf(step) <= 0 ? 'disabled' : ''}`}
                onClick={() => {
                  onClickPrev(previous, steps, step);
                }}
              >
                <CsLineIcons icon="chevron-left" /> <span>Back</span>
              </Button>
              <Button
                variant="outline-primary"
                className={`btn-icon btn-icon-end ${steps.indexOf(step) >= steps.length - 1 ? 'disabled' : ''}`}
                onClick={() => {
                  onClickNext(next, steps, step);
                }}
              >
                <span>Next</span> <CsLineIcons icon="chevron-right" />
              </Button>
            </div>
          )}
        />
      </Wizard>
    </div>
  );
};

const mapStateToProps = (state) => ({
    form: state.form,
});

const mapDispatchToProps = (dispatch) => ({
    q1: (body) => dispatch(q1(body)),
    q2: (body) => dispatch(q2(body)),
    q3: (body) => dispatch(q3(body)),
    q4: (body) => dispatch(q4(body)),
    q5: (body) => dispatch(q5(body)),
    q6: (body) => dispatch(q6(body)),
    q7: (body) => dispatch(q7(body)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WizardBasic);
