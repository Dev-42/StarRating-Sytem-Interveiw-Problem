import "./App.css";
// import StarRating from "./components/StarRating";
import StarRatingPractice from "./components/StarRatingPractice";
function App() {
  return (
    <div>
      {/* <StarRating maxStars={6} /> */}
      <StarRatingPractice starCount={5} />
    </div>
  );
}

export default App;
