import React from 'react'
import ReviewCard from "./ReviewCard";

function ReviewList({reviews}) {
    const myReviews = reviews.map((review => {

    return <ReviewCard key={review.id} review={review} />
    
  }))
  const myReviewStyle = {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    padding: "0px 50px 100px",
    boxShadow: "10px 15px 50px rgb(19 8 73 /13%)",
    borderRadius: "20px",
    transition: "all .40s ease",
   backgroundColor:"white"
  }
const myHeader = {
  marginLeft: 600,
  alignItems: "center",
}
  return (
    <div>
        <div className="ui three column grid">
            <div className="row">
                <div style={myHeader}>
                      <h1 style={{color:"white"}}>Reviews</h1>
                </div>
                <div style={myReviewStyle}>
                    {myReviews}
                </div>
            </div>
        </div>
      </div>
  );
}
export default ReviewList