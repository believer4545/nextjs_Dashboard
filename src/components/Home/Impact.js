// components/Home/Impact.js
import Link from 'next/link';

const Impact = () => {
  return (
    <section className="py-5 bg-dark text-white position-relative overflow-hidden">
      <div className="container py-5 text-center">
        <h2 className="display-6 fw-bold mb-4">IMPACT THAT MATTERS</h2>
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-7">
            <p className="lead mb-5">
              At PICA, we're not just developing a tool. We're developing a platform for better lives, shorter 
              hospital stays, and fewer complications. This is your chance to join early — and grow with purpose.
            </p>
            
            <div className=" gap-3 mt-4">
              <Link 
                href="/careers" 
                className="btn btn-outline-info rounded-pill px-4 py-2 fw-bold"
                style={{ minWidth: '200px' }}
              >
                JOIN OUR TEAM
              </Link>
              
              <Link 
                href="/careers" 
                className="btn btn-link text-white text-decoration-none"
              >
                VIEW OUR JOB OPENINGS
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="position-absolute rounded-circle border border-info border-opacity-10 opacity-25" style={{
        bottom: '-100px',
        right: '-100px',
        width: '300px',
        height: '300px'
      }}></div>
    </section>
  );
};

export default Impact;