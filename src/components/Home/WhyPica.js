// components/Home/WhyPica.js
const WhyPica = () => {
  return (
    <section className="py-5 pics-bg text-white position-relative w-100 overflow-hidden">
      <div className="container py-5">
        <div className=" w-100 text-center bottom-0 pb-5 bg-opacity-75">
          <div className="container">
            <p className="mb-1 ">Be a part of something groundbreaking.</p>
            <p className="mb-4">
              Your work here won't just be about a product — it will be about
              people, purpose, and possibility.
            </p>
          </div>
        </div>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Why PICA?</h2>
        </div>

        <div className="row g-4 mt-2 mx-4">
          <div className="col-md-4">
            <div className="h-100 p-4 text-center">
              <h3 className="h5 mb-5 text-uppercase fw-bold">Innovate with Purpose</h3>
              <p className="h5 fw-normal">
                We're solving critical challenges in clot removal — from stroke
                to vascular emergencies — with design thinking and real clinical
                insight.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="h-100 p-4 text-center">
             
              <h3 className="h5 mb-5 text-uppercase fw-bold">
                Collaborate Across Disciplines
              </h3>
              <p className="h5 fw-normal">
                From engineers to clinicians, our flat structure empowers
                everyone to speak, lead, and shape product outcomes.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="h-100 p-4 text-center">
              <h3 className="h5 mb-5 text-uppercase fw-bold">
                Pre-Launch, High Impact
              </h3>
              <p className="h5 fw-normal">
                We're in the early stages — your voice will help define the
                product, the culture, and the future of PICA.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative circle in background */}
      <div
        className="why-pica-border rounded-circle"
      ></div>
    </section>
  );
};

export default WhyPica;
