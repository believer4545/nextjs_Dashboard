// components/Layout/Footer.js
import Link from "next/link";
 
const Footer = () => {
  return (
    <footer className="footer-section text-white position-relative" style={{ backgroundColor: "#10102B",maxWidth:"1860px",margin:"0 auto",border:"1px solid #ffffff1a",borderRadius:"30px"}}>
      <div className="">
        <div className="container">
          <div className="row gy-4 pb-4">
            {/* Logo and Tagline */}
            <div className="col-lg-5 mb-4 mb-lg-0">
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="me-2">
                  {/* Replace with your actual logo */}
                  <img src="./images/logo1.png" alt="logo1" />
                  {/* <span className="h4 fw-bold">PICA</span> */}
                </div>
                <div className="ms-2 d-flex gap-2 ">
                  <img
                    src="./images/logo2.png"
                    alt="logo1"
                    height="32px"
                    width="47px"
                  />
                  <div>
                    <small className=" fw-bold h6">
                      MOLECULAR MEDICAL SOLUTIONS LTD
                    </small>
                    <br />
                    <small className="fw-bold">
                      Redefining Internation Medicine
                    </small>
                  </div>
                </div>
              </div>
 
              <p className="mb-0 fw-bold">
                Cutting-edge thrombectomy for
                <br /> better health.
              </p>
 
              <div className="mt-4 d-flex gap-3">
                <a href="#" className=" rounded-circle footer-border ">
                 <img src="./images/facebook.png" alt="facebook"/>
                </a>
                <a href="#" className=" rounded-circle footer-border">
                <img src="./images/linkedin.png" alt="linkedin"/>
                </a>
                <a href="#" className=" rounded-circle footer-border">
                  <img src="./images/twitter.png" alt="twitter"/>
                </a>
                <a href="#" className=" rounded-circle footer-border">
                <img src="./images/instagram.png" alt="instagram"/>
                </a>
              </div>
            </div>
 
            {/* Quick Links */}
            <div className="col-lg-2 col-md-6">
              <h5 className="mb-4 text-info">Quick Links</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link href="/" className="text-decoration-none cotact-info">
                    Home
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/about-us"
                    className="text-decoration-none cotact-info"
                  >
                    About Us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/blog"
                    className="text-decoration-none cotact-info"
                  >
                    Blog
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/contact-us"
                    className="text-decoration-none cotact-info"
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/terms-of-service"
                    className="text-decoration-none cotact-info"
                  >
                    Terms of My Service
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/careers"
                    className="text-decoration-none cotact-info"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
 
            {/* Contact Information */}
            <div className="col-lg-5 col-md-6 ">
              <div className="d-flex align-items-start gap-4 mb-4">
               <img src="./images/location.png" alt="location"/>
                <div>
                  <h5 className="ourValueDesc">
                    MOLECULAR MEDICAL SOLUTIONS LTD
                  </h5>
                  <small className="cotact-info">
                    Registered office address
                  </small>
                  <p className="h6 cotact-info">
                    Unit 14b Occam Road, Surrey Research Park, Guildford,
                    England, GU2 7YG
                  </p>
                </div>
              </div>
 
              <div className="d-flex align-items-center gap-4 mb-4">
               <img src="./images/mobile.png" alt="mobile"/>
                <a
                  href="tel:+4407969399806"
                  className="text-decoration-none cotact-info ourValueDesc"
                >
                  +44 (0)7969 399806
                </a>
              </div>
 
              <div className="d-flex gap-4 align-items-center">
              <img src="./images/email.png" alt="email"/>
                <a
                  href="mailto:sean.willis@molecularmedical.com"
                  className="text-decoration-none cotact-info "
                >
                  <small className="ourValueDesc">sean.willis@molecularmedical.com</small>
                </a>
              </div>
            </div>
          </div>
 
          <div className="my-4  text-center" style={{border:"2px solid #ffffff1a"}}></div>
 
          <small className="text-white-50 text-center d-flex justify-content-center ourValueDesc">
            © 2025 Molecular Medical Limited. All rights reserved.
          </small>
        </div>
      </div>
      <img src="./images/Footer_image.png" className="position-absolute bottom-0" alt="footershape"
      // style={{position:"absolute",bottom}}
      />
    </footer>
  );
};
 
export default Footer;