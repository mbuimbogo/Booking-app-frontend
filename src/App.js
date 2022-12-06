import './App.css';
import {Routes, Route } from'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Reviews from './Components/Reviews';
import Bookings from './Components/Bookings'
import  Login from './pages/Login';




function App() {
  const [user, setUser] = useState(null);

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
          {/* <Route path="/new">
            <NewRecipe user={user} />
          </Route> */}
          {/* <Route path="/">
            <Login />
          </Route> */}
          <Route path='/' element={<Home/>}/>
      <Route exact path='/bookings' element={<Bookings/>}/>
      <Route exact path='/reviews' element={<Reviews/>}/>
        </Routes>
      </main>
    </>
  );
}



export default App;
