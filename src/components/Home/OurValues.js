import Link from "next/link";
 
// components/Home/OurValues.js
const OurValues = () => {
  return (
    <section className="py-5 text-white position-relative" style={{ background: "#020216" }}>
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-6 mb-3 fw-bold">Our Values</h2>
          <p className="h4 fw-normal">
            Our work is guided by values that define how we innovate,
            collaborate, and grow.
          </p>
        </div>
 
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card p-4 bg-transparent border border-info border-opacity-25">
              <div className="card-body ">
                <div className="d-flex align-items-center ">
                  <div
                    className="bg-info bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center me-3"
                    style={{ width: "56px", height: "56px" }}
                  >
                    <img src="./images/ourValue1.png" />
                  </div>
                  <div>
                    <h3 className=" mb-0 text-uppercase ourValue">
                      Purpose First
                    </h3>
                    <p className="mb-0 ourValueDesc">
                      Patients are at the heart of every decision.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
 
          <div className="col-md-6 ">
            <div className="card p-4 bg-transparent border border-info border-opacity-25">
              <div className="card-body ">
                <div className="d-flex align-items-center">
                  <div
                    className="bg-info bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center me-3"
                    style={{ width: "56px", height: "56px" }}
                  >
                    <img src="./images/ourValue2.png" />
                  </div>
                  <div>
                    <h3 className="ourValue mb-0 text-uppercase">
                      Create Boldly
                    </h3>
                    <p className="mb-0 ourValueDesc">
                      We take calculated risks, test often, and learn fast.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
 
          <div className="col-md-6 ">
            <div className="card p-4 bg-transparent border border-info border-opacity-25">
              <div className="card-body ">
                <div className="d-flex align-items-center ">
                  <div
                    className="bg-info bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center me-3"
                    style={{ width: "56px", height: "56px" }}
                  >
                    <img src="./images/ourValue3.png" />
                  </div>
                  <div>
                  <h3 className="ourValue mb-0 text-uppercase">
                    Integrity Always
                  </h3>
                  <p className="mb-0 ourValueDesc">
                  We act with honesty, responsibility, and transparency.
                </p>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
 
          <div className="col-md-6">
            <div className="card p-4 bg-transparent border border-info border-opacity-25">
              <div className="card-body ">
                <div className="d-flex align-items-center">
                  <div
                    className="bg-info bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center me-3"
                    style={{ width: "56px", height: "56px" }}
                  >
                    <img src="./images/ourValue4.png" />
                  </div>
                  <div>
                  <h3 className="ourValue mb-0 text-uppercase">
                    Respect Diversity
                  </h3>
                  <p className="mb-0 ourValueDesc">
                  Great ideas come from inclusive teams with diverse voices.
                </p>
                </div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" py-5 text-center w-100 overflow-hidden">
        <p className=" fw-semibold mb-4" style={{color:'#93F2FF'}}>IMPACT THAT MATTERS</p>
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-7">
            <p className="fw-normal mb-5">
              At PICA, we're not just developing a tool. We're developing a platform for better lives, shorter
              hospital stays, and fewer complications. This is your chance to join early — and grow with purpose.
            </p>
           
            <div className="d-grid justify-content-center mt-4">
              <Link
                href="/careers"
                className="join-btn fw-bold"
                style={{ minWidth: '200px' }}
              >
                JOIN OUR TEAM
              </Link>
             
              <Link
                href="/careers"
                className="btn fs-4 fw-bold btn-link text-white text-decoration-none"
              >
                VIEW OUR JOB OPENINGS
              </Link>
            </div>
          </div>
        </div>
      </div>
      <img src="./images/Vector.png" className="position-absolute top-0 start-0 " alt="Vector"
      />
       <img src="./images/roundRing2.png" className=" float-end position-absolute " alt="Vector"
      style={{bottom:"0px",right:"0px"}}
      />
   
    </section>
  );
};
 
export default OurValues;