// components/Home/WhoWeAre.js
const WhoWeAre = () => {
  return (
    <section className=" text-white w-100 overflow-hidden" style={{ backgroundColor: "#006C7B" }}>
      <div className="row align-items-center">
        <div className="col-lg-6  mb-lg-0">
          <div className="position-relative ">
            <div className="rounded-3 overflow-hidden h-100">
              <img src="/images/whoare.png" />
            </div>
          </div>
        </div>

        <div className="col-lg-6 ps-lg-5 Whoare ">
          <h2 className="fs-25 fs-4 mb-4" >
            Who We Are
          </h2>
          <p className="fs-4 mb-4 text-white">
            We’re a team of engineers, Med tech designers, clinical specialists,
            and creators. We're united by a shared goal: delivering better
            solutions for better care. We value curiosity, clarity, and
            compassion — and we love solving problems together.
          </p>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
