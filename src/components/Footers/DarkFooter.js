/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="#about-us"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#about-us"
              >
                Our Services
              </a>
            </li>
            <li>
              <a
                href="#contact-us"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Bintang Renovasi | PT Indonesia Tekhnosindo Semesta{" "}.
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
