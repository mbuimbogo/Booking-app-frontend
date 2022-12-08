import React from 'react'

function ReviewCard({review}) {
  const cardStyles = {
    width: "100%",
    color:"white",
    height: "100px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
  }
const cardStyles2 = {
  color:"white",
}
  return (
    <div  className="column">
      <div className="card" style={cardStyles} >
        <h3>{review.user_name}</h3>
        <h3>{review.restaurant_id}</h3>
        <div style={cardStyles2}>
        <p >{review.body}</p>
        </div>
      </div>
    </div>
  )
}
export default ReviewCard;