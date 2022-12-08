import React from 'react'

const BookingForm = ({formData, handleChange, handleSubmit}) => {

  formData = {

  }

  return (
    <div>
       <form onSubmit={handleSubmit}>
        <div className="form-group">
        <label htmlFor="name">Enter userId</label>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Enter user_id"
        value={formData.user_id}
      />
       </div>
       <div className="form-group">
        <label htmlFor="name">Enter status: booked/not_booked </label>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Enter status: booked/not_booked"
        value={formData.status}
      />
       </div>
   
      <button className='btn btn-primary' type="submit">Submit</button>
    </form>
    </div>
  )
}

export default BookingForm