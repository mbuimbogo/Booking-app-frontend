import './App.css';
import {Routes, Route } from'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import BookingForm from './Components/BookingForm';
import ReviewPages from './Components/ReviewPage';
import UserList from './Components/UserList';
import  Login from './pages/Login';

function App() {
  const [user, setUser] = useState("");
 
  const [formData, setFormData] = useState("");
  
  function handleSubmit(event) {
    event.preventDefault();

    fetch("https://restaurant-booking-app-production.up.railway.app/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => setFormData(data));
  }
 
  function handleChange(event) {
    const key = event.target.name;
    setFormData({
      ...formData,
      [key]: event.target.value,
    })
  }

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <Navbar user={user} setUser={setUser} />
      <main>
        <Routes>
      <Route path='/' element={<BookingForm
      
      formData = {formData}
      handleChange={handleChange}
        handleSubmit = {handleSubmit}
      />}/>
      <Route exact path='/users' element={<UserList/>}/>
      <Route exact path='/reviews' element={<ReviewPages/>}/>
        </Routes>
      </main>
    </>
  );
}



export default App;
