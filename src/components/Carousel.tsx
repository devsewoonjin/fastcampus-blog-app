import { useState } from "react";

export default function Carousel() {
  const [activeImage, setActiveImage] = useState(1);
  const IMG1 =
    "https://images.unsplash.com/photo-1508857148929-3a9b41be6c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3538&q=80";
  const IMG2 =
    "https://images.unsplash.com/photo-1443466025693-9f6c5d2e8a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3438&q=80";
  const IMG3 =
    "https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3024&q=80";
  return (
    <>
      {activeImage}
      <div className="carousel">
        <ul className="carousel__slides">
          <input
            type="radio"
            name="radio-buttons"
            id="img1"
            checked={activeImage === 1}
            readOnly
          />
          <li className="carousel__slide-container">
            <div className="carousel__slide-img">
              <img src={IMG1} alt="scenery 1" />
            </div>
            <div className="carousel__controls">
              <label
                onClick={() => setActiveImage(3)}
                className="carousel__slide-prev"
              >
                <span>&lsaquo;</span>
              </label>
              <label
                onClick={() => setActiveImage(2)}
                className="carousel__slide-next"
              >
                <span>&rsaquo;</span>
              </label>
            </div>
          </li>
          <input
            type="radio"
            name="radio-buttons"
            id="img2"
            checked={activeImage === 2}
            readOnly
          />
          <li className="carousel__slide-container">
            <div className="carousel__slide-img">
              <img src={IMG2} alt="scenery 2" />
            </div>
            <div className="carousel__controls">
              <label
                onClick={() => setActiveImage(1)}
                className="carousel__slide-prev"
              >
                <span>&lsaquo;</span>
              </label>
              <label
                onClick={() => setActiveImage(3)}
                className="carousel__slide-next"
              >
                <span>&rsaquo;</span>
              </label>
            </div>
          </li>
          <input
            type="radio"
            name="radio-buttons"
            id="img3"
            checked={activeImage === 3}
            readOnly
          />
          <li className="carousel__slide-container">
            <div className="carousel__slide-img">
              <img src={IMG3} alt="scenery 3" />
            </div>
            <div className="carousel__controls">
              <label
                onClick={() => setActiveImage(2)}
                className="carousel__slide-prev"
              >
                <span>&lsaquo;</span>
              </label>
              <label
                onClick={() => setActiveImage(1)}
                className="carousel__slide-next"
              >
                <span>&rsaquo;</span>
              </label>
            </div>
          </li>
          <div className="carousel__dots">
            <label id="img-dot1" className="carousel__dot"></label>
            <label id="img-dot2" className="carousel__dot"></label>
            <label id="img-dot3" className="carousel__dot"></label>
          </div>
        </ul>
      </div>
    </>
  );
}
