import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";

function NavBar({ user, setUser }) {



  function handleLogoutClick() {
    fetch("https://restaurant-booking-app-production.up.railway.app/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
 <Wrapper classNameName="navbar">
      <Logo>
        <Link to="/">Signature Restaurant</Link>
      </Logo>
      <div className="navv">
      <NavLink to="./" className="navbar-link" >Home</NavLink>
      <NavLink   to="./users" className="navbar-link" >Bookings</NavLink>
      <NavLink to="./reviews" className="navbar-link" >Reviews</NavLink> 
      </div>
      <Nav>
        <Button as={Link} to="/">
          Book With us
        </Button>
        <Button variant="outline" onClick={handleLogoutClick}>
          Logout
        </Button>
      </Nav>
    </Wrapper>
    
  );
  }

  const Wrapper = styled.header`
  display: flex;
  justify-content: ;
  align-items: center;
  padding: 8px;
  background-color: grey;
`;

const Logo = styled.h1`
  font-family: "Permanent Marker", cursive;
  font-size: 3rem;
  color: deeppink;
  margin: 0;
  line-height: 1;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  right: 8px;
`;


export default NavBar;
