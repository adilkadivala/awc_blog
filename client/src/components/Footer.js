import { Link } from "react-router-dom";
import "../assets/css/footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer_container">
        <div className="about_company">
          <img
            src={require("../assets/images/logo.png")}
            alt="logo"
            width={160}
            height={80}
          />
          <p>
            Discover innovative solutions that protect surfaces against leaks
            and enhance longevity. Join us in elevating waterproofing standards.
          </p>

          <div className="icons">
            <i className="fa-brands fa-facebook-f social_icon"></i>
            <i className="fa-brands fa-x-twitter social_icon"></i>
            <i className="fa-brands fa-youtube social_icon"></i>
            <i className="fa-brands fa-linkedin-in social_icon"></i>
          </div>
        </div>
        <div className="naviagtion">
          <p className="title">Navigation</p>
          <Link to="">Home</Link>
          <Link to="">About Us</Link>
          <Link to="">Products</Link>
          <Link to="">Gallery </Link>
          <Link to="">Career </Link>
          <Link to="">Contact Us </Link>
          <Link to="">Blogs </Link>
          <Link to="">Testimonials </Link>
        </div>
        <div className="products">
          <p className="title">Our Products</p>
          <label className="title list">Roof Waterproofing</label>
          <ul>
            <li>AWC-ROOF 540</li>
            <li>AWC-ROOF 300</li>
            <li>AWC-ROOF 250</li>
          </ul>
          <label className="title list">Wall Section</label>
          <ul>
            <li>AWC-WALL MATE</li>
            <li>AWC-ELASTIC</li>
          </ul>
          <label className="title list">Exclusive Products</label>
          <ul>
            <li>AWC-TUFF COAT</li>
            <li>AWC-CLEAR COAT</li>
            <li>AWC-SWIFT PLAST</li>
          </ul>
        </div>
        <div className="contect">
          <p className="title">Contact Us</p>

          <div className="add">
            <p className="title list">AWC Lean Manufacturing Unit</p>
            <p>
              Survey/Plot No. 662 Village: Tembhi Taluka:- Umbergaon,Dist
              -Valsad,Umargam, Gujarat 396150
            </p>
            <p>Click here to view the map</p>
            <p>
              <span>Mobile:</span>+91 89 76 98 1053
              <span>E-mail:</span>factory@awcindia.in
            </p>
          </div>
          <div className="add">
            <p className="title list">Head Office</p>
            <p>
              A- 10/11, 4th Floor, Yojana CHS. Ltd, S.V Road, Malad (W), Mumbai-
              400 064.
            </p>
            <p>Click here to view the map</p>
            <p>
              <span>Mobile:</span>+91 86 86 86 2475
              <span>E-mail:</span> info@awcindia.in
              <span>E-mail:</span> www.awcindia.in
            </p>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>Copyright © 2023 AWC. All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Footer;
