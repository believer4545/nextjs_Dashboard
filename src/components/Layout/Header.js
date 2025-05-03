// components/Layout/Header.js
import Link from "next/link";
const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark position-relative  w-100"
      style={{
        maxHeight: "235px",
        // marginTop:"23px",
        background: "transparent !important",
      }}
    >
      <div className="container py-3">
        <Link href="/" className="navbar-brand">
          <div className="d-flex align-items-center">
            <img src="./images/logo1.png" alt="logo" />
            {/* <span className="h4 text-white fw-bold mb-0">PICA</span> */}
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="container collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link href="/" className="nav-link text-white mx-2">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about-us" className="nav-link text-white mx-2">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/blog" className="nav-link text-white mx-2">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link text-white mx-2">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/careers" className="nav-link text-white mx-2">
                Careers
              </Link>
            </li>
            <li className="nav-item ms-2">
              <Link
                href="/contact"
                className="btn btn-info rounded-pill px-4 text-dark fw-bold border-0"
              >
                Let's Talk
              </Link>
            </li>
          </ul>
        </div>
        <img
          src="./images/Header_Image.png"
          className="position-absolute  end-0"
          style={{ top: "-22px" }}
        />
      </div>
      <img src="./images/Vector.png" className="position-absolute top-0 start-0" alt="Vector"
      // style={{position:"absolute",bottom}}
      />
       <img src="./images/RoundRing.png" className="position-absolute" alt="Vector"
      style={{top:"115px",left:"105px"}}
      />
    </nav>
  );
};
export default Header;