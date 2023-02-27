import React from 'react';
// reactstrap components
import {
  Button,
  Collapse,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  UncontrolledTooltip
} from 'reactstrap';

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState('navbar-transparent');
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (document.documentElement.scrollTop > 399 || document.body.scrollTop > 399) {
        setNavbarColor('');
      } else if (document.documentElement.scrollTop < 400 || document.body.scrollTop < 400) {
        setNavbarColor('navbar-transparent');
      }
    };
    window.addEventListener('scroll', updateNavbarColor);
    return function cleanup() {
      window.removeEventListener('scroll', updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle('nav-open');
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={'fixed-top ' + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              href="/"
              id="navbar-brand"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('top').scrollIntoView({ behavior: 'smooth', top: 'start' });
              }}>
              Bintang Renovasi
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              PT Indonesia Tekhnosindo Semesta
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle('nav-open');
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button">
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse className="justify-content-end" isOpen={collapseOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink
                  href="#about-us"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById('about-us')
                      .scrollIntoView({ behavior: 'smooth', block: 'end' });
                  }}>
                  <p>About Us</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#our-service"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById('our-service')
                      .scrollIntoView({ behavior: 'smooth', block: 'end' });
                  }}>
                  <p>Our Services</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#our-team"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById('our-team')
                      .scrollIntoView({ behavior: 'smooth', block: 'end' });
                  }}>
                  <p>Our Team</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#our-partner"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById('our-partner')
                      .scrollIntoView({ behavior: 'smooth', block: 'end' });
                  }}>
                  <p>Our Partner</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <Button
                  className="nav-link btn-neutral"
                  color="info"
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById('contact')
                      .scrollIntoView({ behavior: 'smooth', block: 'end' });
                  }}>
                  <p>Contact Us</p>
                </Button>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://twitter.com/bintangrenovasi"
                  target="_blank"
                  id="twitter-tooltip">
                  <i className="fab fa-twitter"></i>
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  Follow us on Twitter
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.facebook.com/bintangrenovasi"
                  target="_blank"
                  id="facebook-tooltip">
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Like us on Facebook
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.instagram.com/bintangrenovasi"
                  target="_blank"
                  id="instagram-tooltip">
                  <i className="fab fa-instagram"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Follow us on Instagram
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
