import {useState, useEffect} from 'react';
import ReviewList from "./ReviewList";

function ReviewPages(){
    const [reviews, setReviews] = useState([]);
   
    useEffect(()=> {
        fetch("https://restaurant-booking-app-production.up.railway.app/reviews")
        .then(response => response.json())
        .then(data => setReviews(data))
      }, []);


  return (
    <div>
      <ReviewList reviews={reviews} setReviews={setReviews} />
    </div>
  )
}
export default ReviewPages;