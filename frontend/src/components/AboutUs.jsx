import { useState, useEffect } from "react";
import "./AboutUs.css";

import img2 from "../assets/about2.jpg";

function AboutUs() {
  const slides = [
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    },
    {
      image: img2,
      text: "We grow and maintain plants with care and expertise.",
    },
    {
      text: "Your satisfaction is our top priority in every plant we offer.",
    },
  ];

  const [index, setIndex] = useState(0);

  const prevSlide = () =>
    setIndex(index === 0 ? slides.length - 1 : index - 1);

  const nextSlide = () =>
    setIndex(index === slides.length - 1 ? 0 : index + 1);

  /* === AUTO SLIDE PER 5 DETIK === */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 10000);

    return () => clearInterval(interval); // bersihkan interval
  }, []);

  return (
    <div className="about-us-section" id="about-us">
      <h2 className="about-us-title">About Us</h2>

      <div className="slider-wrapper">
        <button className="nav-btn left" onClick={prevSlide}>
          &lt;
        </button>

        <div
          className={`about-us-box ${!slides[index].image ? "no-image" : ""}`}
        >
          {slides[index].image && (
            <img
              src={slides[index].image}
              className="about-us-image"
              alt="slide"
            />
          )}

          <p className="about-us-text">{slides[index].text}</p>
        </div>

        <button className="nav-btn right" onClick={nextSlide}>
          &gt;
        </button>
      </div>
    </div>
  );
}

export default AboutUs;
