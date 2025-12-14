import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";

const Profile = () => {
  const { userId } = useParams();

  return (
    <div>
      <h2>User Profile</h2>
      <p>User ID: {userId}</p>

      <nav>
        <Link to="details">Profile Details</Link> |{" "}
        <Link to="settings">Profile Settings</Link>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
};

export default Profile;

