import React from "react";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import FooterImg from '../assets/Footer.png';
const Footer = () => {
  return (
    <footer className="footer-section py-5">
      <div className="container">
        <div className="row gy-4">
          {/* Column 1 */}
          <div className="col-md-3 col-sm-6">
            <h6 className="footer-heading">Class Categories</h6>
            <ul className="list-unstyled footer-links">
              <li>Language</li>
              <li>Cooking</li>
              <li>Music</li>
              <li>Arts & Craft</li>
              <li>Yoga</li>
              <li>Academic</li>
              <li>Back To Roots</li>
              <li>Funteresting</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="col-md-3 col-sm-6">
            <h6 className="footer-heading">Company</h6>
            <ul className="list-unstyled footer-links">
              <li>About</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Refund Policy</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-md-2 col-sm-6">
            <h6 className="footer-heading">Learn</h6>
            <ul className="list-unstyled footer-links">
              <li>All Classes</li>
            </ul>

            <h6 className="footer-heading mt-4">Teach</h6>
            <ul className="list-unstyled footer-links">
              <li>Become A Teacher</li>
            </ul>
          </div>

          {/* Column 4 - Image Box */}
          <div className="col-md-4 col-sm-6 text-center">
            <div className="footer-image-box shadow-sm">
              <img
                src={FooterImg}
                // src="https://images.unsplash.com/photo-1588167056547-c183313da57c?auto=format&fit=crop&w=400&q=60"
                alt="Sell Products"
                className="img-fluid rounded-top"
              />
              <p className="mb-0 footer-img-caption">
                SELL YOUR PRODUCTS WITH US 
              </p>
            </div>
          </div>
        </div>

        <hr className="my-4" />

        {/* Bottom Row */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start">
          <p className="mb-2 mb-md-0 small">
            © Project 2025. All rights reserved.
          </p>
          <p className="mb-2 mb-md-0 small">
            Made with ❤️ by <span className="fw-semibold">Abc</span>
          </p>
          <div className="footer-social-icons d-flex gap-3">
            <Facebook size={18} />
            <Instagram size={18} />
            <Linkedin size={18} />
            <Youtube size={18} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
