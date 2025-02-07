import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-3">
            <h5 className="mb-3">ShopEase</h5>
            <p>Premium products at the best prices. Your one-stop shop for all your needs.</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/shop" className="text-white text-decoration-none">Shop</a></li>
              <li><a href="/about" className="text-white text-decoration-none">About Us</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Customer Support */}
          <div className="col-md-3">
            <h5 className="mb-3">Support</h5>
            <ul className="list-unstyled">
              <li><a href="/faq" className="text-white text-decoration-none">FAQs</a></li>
              <li><a href="/returns" className="text-white text-decoration-none">Returns</a></li>
              <li><a href="/privacy-policy" className="text-white text-decoration-none">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="col-md-3">
            <h5 className="mb-3">Follow Us</h5>
            <div>
              <a href="https://facebook.com" className="text-white me-3 fs-4">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="https://twitter.com" className="text-white me-3 fs-4">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="https://instagram.com" className="text-white fs-4">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
            <p className="mt-3">Email: support@shopease.com</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4">
          <p className="mb-0">&copy; {new Date().getFullYear()} ShopEase. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
