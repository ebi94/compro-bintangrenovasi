import DarkFooter from 'components/Footers/DarkFooter.js';
import IndexHeader from 'components/Headers/IndexHeader.js';
// reactstrap components
// import {
// } from "reactstrap";
// core components
import IndexNavbar from 'components/Navbars/IndexNavbar.js';
import React from 'react';
import { Col, Container, Row } from 'reactstrap';

// sections for this page
import Images from './index-sections/Images.js';

function Index() {
  React.useEffect(() => {
    document.body.classList.add('index-page');
    document.body.classList.add('sidebar-collapse');
    document.documentElement.classList.remove('nav-open');
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove('index-page');
      document.body.classList.remove('sidebar-collapse');
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          <Images />
          <div
            className="section section-about-us"
            style={{ marginTop: '-25vh', backgroundColor: 'transparent' }}>
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                  <h2 className="title">Who we are?</h2>
                  <h4 className="description">
                    According to the National Oceanic and Atmospheric Administration, Ted, Scambos,
                    NSIDClead scentist, puts the potentially record low maximum sea ice extent tihs
                    year down to low ice extent in the Pacific and a late drop in ice extent in the
                    Barents Sea.
                  </h4>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
