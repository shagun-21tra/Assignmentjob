import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ChevronLeft, ChevronRight, ChevronUp } from "lucide-react";
import "./Sectionn.css";
import Kalpana from '../assets/Kalpana.png';
import Kirti from '../assets/Kirti.png';
import Karandeep from '../assets/Karandeep.png';
import Karandeepyoga from '../assets/Karandeepyoga.png';
import Asierarts from '../assets/Asierarts.png';
import Mariusacademics from '../assets/Mariusacademics.png';
// import Nicholalanguage from '../assets/Nicholalanguage.png';
import image2 from '../assets/Image2.png';
import blog1 from '../assets/blog1.png';
import blog2 from '../assets/blog2.png';
import blog3 from '../assets/blog3.png';
const Sectionn = () => {
 
  const [teacherIndex, setTeacherIndex] = useState(0);
  const [showTop, setShowTop] = useState(false);


  const testimonials = [
    {
      name: "Karandeep",
      image: Kalpana,
      text: "It is nice to be on an international platform where there are teachers from around the world.",
    },
    {
      name: "Kalpana",
        image: Kirti,
      text: "The best thing about these classes is that they are live and interactive. They help us learn specialities and famous activities from other countries.",
    },
    {
      name: "Kirti",
        image: Karandeep,
       text: "As a student, I get to explore and learn about the different cultural specialities of another country with native teachers.",
    },
   
  ];

  const teachers = [
    { name: "Karandeep", subject: "Yoga", image: Karandeepyoga },
    { name: "Asier", subject: "Arts & Craft", image: Asierarts },
    { name: "Marius Neilson", subject: "Academics", image: Mariusacademics },
    // { name: "Nichola", subject: "Language", image: Nicholalanguage },
  ];

  const blogs = [
    {
      title: "Blog name - Lorem ipsum dolor sit amet",
      category: "Category 01",
      image: blog1,
    },
    {
      title: "Blog name - Lorem ipsum dolor sit amet",
      category: "Category 02",
      image: blog2,
    },
    {
      title: "Blog name - Lorem ipsum dolor sit amet",
      category: "Category 03",
      image: blog3,
    },
  ];
  const [activeTestimonial, setActiveTestimonial] = useState(0);

   const prevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    
    const prevIndex =
      (activeTestimonial - 1 + testimonials.length) % testimonials.length;
    const nextIndex = (activeTestimonial + 1) % testimonials.length;
    return [testimonials[prevIndex], testimonials[activeTestimonial], testimonials[nextIndex]];
  };

  const visible = getVisibleTestimonials();

  const nextTeacher = () => {
    setTeacherIndex((prev) => (prev + 1) % teachers.length);
  };
  const prevTeacher = () => {
    setTeacherIndex((prev) => (prev === 0 ? teachers.length - 1 : prev - 1));
  };

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

 
  return (
    <div className="home-page">
      

     
        <section className="container my-5 text-start">
      <h3 className="fw-bold text-primary mb-4">Love from community</h3>

      <div className="position-relative d-flex justify-content-center align-items-center">
      
        <button className="btn btn-outline-primary me-3" onClick={prevTestimonial}>
          ❮
        </button>

       
        <div className="row justify-content-center g-4 w-75">
          {visible.map((t, i) => (
            <div
              key={i}
              className={`col-12 col-md-4 testimonial-card text-center p-4 rounded-4 ${
                i === 1 ? "active-card" : "inactive-card"
              }`}
            >
              <img
                src={t.image}
                alt={t.name}
                className="rounded-circle mb-3"
                width="60"
                height="60"
              />
              <h6 className="fw-bold mb-2">{t.name}</h6>
              <p className="small mb-0">{t.text}</p>
            </div>
          ))}
        </div>

      
        <button className="btn btn-outline-primary ms-3" onClick={nextTestimonial}>
          ❯
          
        </button>
      </div>
    </section>
    
      <section className="container my-5 text-start">
        <h3 className="fw-bold text-primary mb-4">Meet our teachers</h3>
        <div className="d-flex align-items-center justify-content-center position-relative">
          <button className="btn nav-btn left-btn" onClick={prevTeacher}>
            <ChevronLeft size={20} />
          </button>

          <div className="row w-100 justify-content-center">
            {teachers
              .slice(teacherIndex, teacherIndex + 3)
              .concat(
                teachers.slice(0, Math.max(0, 3 - (teachers.length - teacherIndex)))
              )
              .map((t, i) => (
                <div className="col-12 col-md-4 col-lg-3 text-center" key={i}>
                  <div className="teacher-card p-3 rounded-4 shadow-sm">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="rounded-4 mb-3 img-fluid"
                    />
                    <h6 className="fw-bold mb-1">{t.name}</h6>
                    <p className="text-danger small fw-semibold">{t.subject}</p>
                  </div>
                </div>
              ))}
          </div>

          <button className="btn nav-btn right-btn" onClick={nextTeacher}>
            <ChevronRight size={20} />
          </button>
        </div>
      </section>

      
      <section className="container my-5 d-flex flex-column flex-md-row align-items-center gap-4">
        <img
          src= {image2}
          alt="Become a teacher"
          className="img-fluid w-50"
        />
        <div>
          <h3 className="fw-bold text-primary">Become a certified teacher</h3>
          <ul className="mt-3">
            <li>Make your own schedule</li>
            <li>Teach students on an international platform</li>
            <li>Join our community of passionate educators</li>
          </ul>
          <button className="btn btn-primary mt-3 px-4">Start Teaching</button>
        </div>
      </section>

      <section className="container my-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="fw-bold text-primary mb-0">Our blogs</h3>
          <a href="#" className="text-danger fw-semibold small">
            SHOW ALL
          </a>
        </div>
        <div className="row g-4">
          {blogs.map((b, i) => (
            <div className="col-12 col-md-4" key={i}>
              <div className="blog-card p-2 rounded-4 shadow-sm">
                <img
                  src={b.image}
                  alt={b.title}
                  className="rounded-4 mb-3 img-fluid"
                />
                <span className="badge bg-danger-subtle text-danger mb-2">
                  {b.category}
                </span>
                <h6 className="fw-bold">{b.title}</h6>
                <p className="text-muted small mb-1">Publisher name</p>
              </div>
            </div>
          ))}
        </div>
      </section>

   
      <section className="footer-cta text-center d-flex flex-column justify-content-center align-items-center">
  <h4 className="fw-bold mb-3 text-white">
    Start learning new skills today and pursue your passion
  </h4>
  <p className="text-white mb-4">
    Join the community of global learners and start exploring today.
  </p>
  <div className="d-flex justify-content-center align-items-center gap-2">
    <input
      type="email"
      placeholder="Enter your email"
      className="form-control w-auto rounded-pill px-3"
      style={{ maxWidth: "280px" }}
    />
    <button className="btn btn-light rounded-pill px-4 fw-semibold">
      Get Started
    </button>
  </div>
</section>


      {showTop && (
        <button className="go-to-top-btn" onClick={scrollToTop}>
          <ChevronUp size={25} color="black" />
        </button>
      )}
    </div>
  );
};

export default Sectionn; ;
