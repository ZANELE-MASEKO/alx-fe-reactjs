import React from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

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

       <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
};

export default Profile;

