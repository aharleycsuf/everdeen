import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ currentUser, signOut }) => {
  const sessionLinks = () => (
    <div>
      <Link to="/login">Login</Link>
      <br></br>
      <Link to="/signup">Sign up!</Link>
    </div>
  );

  const personalGreeting = () => (
    <div>
      <h3>Hi, {currentUser.email}!</h3>
      <button onClick={signOut}>Log Out</button>
    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
}

export default Navbar;
