import React from 'react';
// reactstrap components
import { Col, Container, Row } from 'reactstrap';

// core components

function Images() {
  return (
    <>
      <div className="section section-images">
        <Container>
          <Row>
            <Col md="12">
              <div className="hero-images-container">
                <img
                  alt="..."
                  style={{ borderRadius: 5 }}
                  src={require('assets/img/house-design-hd.png')}></img>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Images;
