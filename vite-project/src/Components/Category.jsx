// import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Category.css"; // for hover styles
import  Language from '../assets/Language.png';
import  Cooking from '../assets/Cooking.png';
import  Music from '../assets/Music.png';
import  Art from '../assets/Art.png';
import  Yoga from '../assets/Yoga.png';
import  Academics from '../assets/Academics.png';
import  Roots from '../assets/Roots.png';
import  Funteresting from '../assets/Funteresting.png';
const categories = [
  { title: "Language", img:  Language },
  { title: "Cooking", img: Cooking },
  { title: "Music", img: Music },
  { title: "Arts & Craft", img: Art },
  { title: "Yoga", img: Yoga },
  { title: "Academics", img: Academics },
  { title: "Back to Roots", img: Roots },
  { title: "Funteresting", img: Funteresting },
];

const Category = () => {
  return (
    <div className="container my-5">
      <h3 className="fw-bold text-primary mb-4 text-start">Browse by category</h3>
      <div className="row g-4">
        {categories.map((cat, i) => (
          <div className="col-6 col-md-3 text-center" key={i}>
            <div className="category-card shadow-sm p-2 rounded-4">
              <div className="overflow-hidden rounded-4">
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="img-fluid category-img"
                />
              </div>
              <p className="mt-2 category-title">{cat.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
