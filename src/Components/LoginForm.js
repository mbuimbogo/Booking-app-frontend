import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../pages/Login";
import { Button, Error, Input, FormField, Label } from "../styles";


function LoginForm({ onLogin }) {
  const [user_name, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("https://restaurant-booking-app-production.up.railway.app/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_name, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => {
          alert("username or password is invalid")
          setErrors(err.errors)
          navigate('/login')
        })
       
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormField>
        <Label htmlFor="user_name">Username</Label>
        <Input
          type="text"
          id="user_name"
          autoComplete="off"
          value={user_name}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormField>
      <FormField>
        <Button variant="fill" color="primary" type="submit">
          {isLoading ? "Loading..." : "Login"}
        </Button>
      </FormField>
      <FormField>
        {errors? errors.map((err) => (
          <Error key={err}>{err}</Error>
        )):""}
      </FormField>
    </form>
  );
}

export default LoginForm;