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
      title: 'Renovasi',
      image: require('assets/img/interior-square-2.jpeg'),
      description: 'Renovasi rumah,toko, gedung dll'
    },
    {
      id: 2,
      title: 'Cat Exterior & Interior',
      image: require('assets/img/exterior-square-2.jpeg'),
      description: 'Pengecetan Interior dan Exterior'
    },
    {
      id: 3,
      title: 'Design',
      image: require('assets/img/interior-square-1.jpeg'),
      description: 'Design Interior'
    }
  ];

  const teamList = [
    {
      id: 1,
      title: 'Ivan Anthony',
      image: require('assets/img/ivan.png'),
      description: 'Direktur Utama'
    },
    {
      id: 2,
      title: 'Dzaki Arrahman',
      image: require('assets/img/dzaki.png'),
      description: 'Direktur Operasional'
    },
    {
      id: 3,
      title: 'Rayyan Muhammad Ra`uf Juliansyah',
      image: require('assets/img/rayyan.png'),
      description: 'Estimator Manager'
    }
  ];

  const whyList = [
    {
      id: 1,
      title: 'Team yang berpengalaman dengan lulusan Arsitek',
      image: require('assets/img/interior-square-2.jpeg')
    },
    {
      id: 2,
      title: 'Team Anak Muda dengan Kreatifitas tinggi',
      image: require('assets/img/exterior-square-2.jpeg')
    },
    {
      id: 3,
      title:
        'Tukang yang berpengalaman dalam pembangunan dan pengawas agar sesuai dengan time line kerja',
      image: require('assets/img/interior-square-1.jpeg')
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
                    Kami dari Bintang Renovasi yang bergerak dibidang Renovasi rumah, toko, gedung
                    dan bangunan lainya yang mengusung konsep mudah dan bisa disesuaikan dengan
                    kemampuan dari pemilik dengan bentuk atau gambar rumah sesuai keinginan.
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
          <div className="section-nucleo-icons">
            <Container>
              <Row>
                <Col lg="6" md="12">
                  <h2 className="title">Our Visi</h2>
                  <h5 className="description">
                    <ul>
                      <li>
                        Visi kami menjadi bidang usaha yang dibutuhkan oleh seluruh masyarakat
                        Indonesia
                      </li>
                      <li>Visi Kami Mampu Bersaing di dalam usaha renovasi</li>
                    </ul>
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
          <div className="section-nucleo-icons">
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
                    <ul>
                      <li>
                        Misi kami menjawab kebutuhan pelanggan dalam me rubah dan memperbaiki
                        bangunan sesuai dengan kemampuan
                      </li>
                      <li>
                        Misi kami menjaga Amanah dan Jujur dalam menjalankan usaha untuk memuaskan
                        para pelanggan kami.
                      </li>
                    </ul>
                  </h5>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="section-team text-center">
            <Container>
              <h2 className="title">Our team</h2>
              <div className="team">
                <Row>
                  {teamList.map((data) => (
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
          <div className="section-team text-center">
            <Container>
              <h2 className="title">Why us ?</h2>
              <div className="team">
                <Row>
                  {whyList.map((data) => (
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
