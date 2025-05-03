const Hero = () => {
return (
<div className="position-relative d-flex align-items-center bg-dark text-white pt-5 pb-5" style={{
minHeight: '753px',
marginTop:"141px",
zIndex: 1,
backgroundImage: `url('/images/hero-bg.png')`,
backgroundSize: 'cover',
backgroundPosition: 'center',
}}>
<div className="container">
<div className="row justify-content-center text-center">
<div className="col-md-10 col-lg-8">
<h1 className="display-3 fw-bold mb-4">
Join Us in Redefining Vascular Care
</h1>
<p className="lead mb-5">
At PICA, We Are Pioneering A New Frontier in Thrombectomy Technology. As We Prepare To Launch Our First-Generation
Solution, We're Building A Passionate Team Dedicated To Advancing Patient Outcomes Through Innovation And Integrity.
</p>
</div>
</div>
</div>

</div>
);
};
export default Hero;