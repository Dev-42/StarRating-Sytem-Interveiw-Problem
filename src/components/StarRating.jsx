/* eslint-disable react/prop-types */
import { useState } from "react";
import { Star } from "lucide-react";
import "./style.css"; // Import the external CSS file

const StarRating = ({ maxStars = 5 }) => {
  const [hoveredStar, setHoveredStar] = useState(0);
  const [selectedStar, setSelectedStar] = useState(0);

  return (
    <div className="star-container">
      {Array.from({ length: maxStars }, (_, index) => {
        const starValue = index + 1; //Converts 0 based indexing to 1 based indexing
        return (
          <Star
            key={starValue}
            onMouseEnter={() => setHoveredStar(starValue)}
            onMouseLeave={() => setHoveredStar(0)}
            onClick={() => setSelectedStar(starValue)}
            fill="currentColor" // Ensure color works properly
            className={`star ${
              starValue <= (hoveredStar || selectedStar) ? "active" : ""
            }`}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
