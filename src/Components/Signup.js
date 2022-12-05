import React from 'react'
import { useState } from 'react';
import img_avatar2 from '../assets/images/img_avatar2.png';

function SignUp({ onLogin }) {
    const [user_name, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_name,
          password,
          password_confirmation: passwordConfirmation,
        }),
      })
        .then((r) => r.json())
        .then(onLogin);
    }
  
    return (
       
      <form onSubmit={handleSubmit}>

    <div className="imgcontainer">
        <img src={img_avatar2} alt="Avatar" className="avatar"/>
     </div>

     <div className="container">
        <label htmlFor="user_name"><b>Username:</b></label>
             <input  type="text"  id="user_name" placeholder="Enter Username" value={user_name} required
             onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password"><b>Password:</b></label>
             <input type="password" id="password" placeholder="Enter Password" value={password} required
            onChange={(e) => setPassword(e.target.value)}
        />

        <label htmlFor="password_confirmation"><b>Confirm Password:</b></label>
            <input type="password" id="password_confirmation" value={passwordConfirmation} placeholder="Enter Password Confirmation"
             onChange={(e) => setPasswordConfirmation(e.target.value)}
        />

        <button type="submit">Submit</button>

        </div>
        <div className="container">
            <button type="button" className="cancelbtn">Cancel</button> 
            <span className="password"><a href="#">Forgot password?</a></span>
        </div>
      </form>

    );
  }


export default SignUp