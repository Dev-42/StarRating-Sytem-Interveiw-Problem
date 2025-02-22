/* eslint-disable react/prop-types */
import { Star } from "lucide-react";
import { useState } from "react";
import "./star.css";
export default function StarRatingPractice({ starCount = 2 }) {
  const [starEnter, setStarEnter] = useState(0);
  const [starClicked, setStarClicked] = useState(0);
  return (
    <div className="starContainer">
      {Array.from({ length: starCount }, (_, index) => {
        const starCount = index + 1;
        return (
          <Star
            key={starCount}
            onMouseEnter={() => setStarEnter(starCount)}
            onMouseLeave={() => setStarEnter(0)}
            onClick={() => setStarClicked(starCount)}
            fill="currentColor"
            className={`star ${
              starCount <= (starEnter || starClicked) ? "active" : ""
            }`}
          />
        );
      })}
    </div>
  );
}
