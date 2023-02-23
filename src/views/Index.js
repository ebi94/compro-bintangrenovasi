import Service from 'components/Cards/Service.js';
import DarkFooter from 'components/Footers/DarkFooter.js';
import IndexHeader from 'components/Headers/IndexHeader.js';
// reactstrap components
// import {
// } from "reactstrap";
// core components
import IndexNavbar from 'components/Navbars/IndexNavbar.js';
import React from 'react';
import { Button, Col, Container, Row } from 'reactstrap';

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

  const servicesList = [
    {
      id: 1,
      title: 'Exterior',
      image: require('assets/img/interior-square-2.jpeg'),
      description: 'Exterior renovation'
    },
    {
      id: 2,
      title: 'Exterior',
      image: require('assets/img/exterior-square-2.jpeg'),
      description: 'Exterior renovation'
    },
    {
      id: 3,
      title: 'Interior',
      image: require('assets/img/interior-square-1.jpeg'),
      description: 'Exterior renovation'
    }
  ];
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          <Images />
          <div
            className="section-about-us"
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
              <div className="section-story-overview">
                <Row>
                  <Col md="6">
                    <div
                      className="image-container image-left"
                      style={{
                        backgroundImage: 'url(' + require('assets/img/home-renovation-1.jpg') + ')'
                      }}></div>
                  </Col>
                  <Col md="5">
                    <div
                      className="image-container image-right"
                      style={{
                        backgroundImage: 'url(' + require('assets/img/home-renovation-2.jpeg') + ')'
                      }}></div>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
          <div className="section section-nucleo-icons">
            <Container>
              <Row>
                <Col lg="6" md="12">
                  <h2 className="title">Our Visi</h2>
                  <h5 className="description">
                    Now UI Kit comes with 100 custom icons made by our friends from NucleoApp. The
                    official package contains over 2.100 thin icons which are looking great in
                    combination with Now UI Kit PRO Make sure you check all of them and use those
                    that you like the most.
                  </h5>
                </Col>
                <Col lg="6" md="12">
                  <div className="icons-container">
                    <img
                      alt="..."
                      className="rounded"
                      src={require('assets/img/rumah-minimalis-1.png')}></img>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="section section-nucleo-icons">
            <Container>
              <Row>
                <Col lg="6" md="12">
                  <div className="icons-container">
                    <img
                      alt="..."
                      className="rounded"
                      src={require('assets/img/rumah-minimalis-1.png')}></img>
                  </div>
                </Col>
                <Col lg="6" md="12" style={{ textAlign: 'end' }}>
                  <h2 className="title">Our Misi</h2>
                  <h5 className="description">
                    Now UI Kit comes with 100 custom icons made by our friends from NucleoApp. The
                    official package contains over 2.100 thin icons which are looking great in
                    combination with Now UI Kit PRO Make sure you check all of them and use those
                    that you like the most.
                  </h5>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="section section-team text-center">
            <Container>
              <h2 className="title">Here is our services</h2>
              <div className="team">
                <Row>
                  {servicesList.map((data) => (
                    <Col md="4" key={data.id}>
                      <Service
                        title={data.title}
                        image={data.image}
                        description={data.description}
                      />
                    </Col>
                  ))}
                </Row>
              </div>
            </Container>
          </div>
          <div className="section-contact-us text-center" style={{ paddingBottom: 70 }}>
            <Container>
              <h2 className="title">Want to work with us?</h2>
              <p className="description">Your project is very important to us.</p>
              <Row>
                <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                  <div className="send-button">
                    <Button
                      block
                      className="btn-round"
                      color="info"
                      href="#whatsapp"
                      onClick={(e) => e.preventDefault()}
                      size="lg">
                      Contact Us
                    </Button>
                  </div>
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
