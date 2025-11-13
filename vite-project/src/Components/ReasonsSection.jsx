import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ReasonsSection.css";
import resons1 from '../assets/resons1.png';
import resons2 from '../assets/resons2.png';
import resons3 from '../assets/resons3.png';
import resons4 from '../assets/resons4.png';
import resons5 from '../assets/resons5.png';
import resons6 from '../assets/resons6.png';
const reasons = [
  {
    id: 1,
    icon: resons1,
    // icon: "/icons/interactive.svg",
    title: "Interactive live online classes",
    text: "Learn at your convenient time slots with engaging, real-time sessions.",
  },
  {
    id: 2,
    icon: resons2,
    // icon: "/icons/teacher.svg",
    title: "Learning from passionate, trusted teachers",
    text: "Get guidance from talented and verified instructors who love to teach.",
  },
  {
    id: 3,
    icon: resons3,
    // icon: "/icons/globe.svg",
    title: "Cross country sharing",
    text: "Connect with learners and teachers from across the world.",
  },
  {
    id: 4,
    icon: resons4,
    // icon: "/icons/age.svg",
    title: "No age bar for learning",
    text: "Join your cherished hobby or activity class regardless of age.",
  },
  {
    id: 5,
    icon: resons5,
    // icon: "/icons/payment.svg",
    title: "Transparent fee structure",
    text: "Enjoy clear and structured fee payment options with no hidden costs.",
  },
  {
    id: 6,
    icon: resons6,
    // icon: "/icons/art.svg",
    title: "Reviving traditional art forms",
    text: "Contribute to nurturing and preserving traditional arts and crafts.",
  },
];

const ReasonsSection = () => {
  return (
    <div className="container my-5">
      <h3 className="fw-bold text-primary mb-5 text-start">
        Six reasons to choose our class
      </h3>

      <div className="row g-4">
        {reasons.map((reason) => (
          <div className="col-12 col-md-6 col-lg-4 text-center" key={reason.id}>
            <div className="reason-card p-4 rounded-4 shadow-sm h-100">
              <div className="icon-wrapper mb-3">
                <img
                  src={reason.icon}
                  alt={reason.title}
                  className="reason-icon"
                />
              </div>
              <h6 className="fw-bold mb-2">{reason.title}</h6>
              <p className="text-muted small">{reason.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReasonsSection;
