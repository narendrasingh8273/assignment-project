import React from "react";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-section">
          <h3>Contact us</h3>
          <p>Address: amet, consectetur sadipscing elitr, sed diam</p>
          <p>Email id: eirmod tempor invidunt ut labore et dolore</p>
          <p>Phone no: 123456789</p>
        </div>
        <div className="footer-section center">
          <h3>Follow us</h3>
          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-quora"></i>
          </div>
        </div>
        <div className="footer-section">
          <h3>Head Office</h3>
          <ul>
            <li><i className="fa-solid fa-location-dot"></i>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</li>
            <li><i className="fa-regular fa-clock"></i>Consetetur sadipscing elitr Consetetur sadipscing elitr</li>
            <li><i className="fa-regular fa-clock"></i>Consetetur sadipscing elitr Consetetur sadipscing elitr</li>
            <li><i className="fa-solid fa-train-subway"></i>Lorem ipsum asd asdsaweeq Lorem Ipsum</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2021 All Rights Reserved. Privacy Policy</p>
      </div>
    </footer>
  );
}

export default Footer;
