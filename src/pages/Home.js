import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to React CRUD App</h1>
      <nav>
        <ul>
          <li>
            <Link to="/users">View Users</Link>
          </li>
          <li>
            <Link to="/add-user">Add User</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
