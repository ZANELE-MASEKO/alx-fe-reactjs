import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>

        <Route path="/profile/:userId" element={<Profile />}>
          
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />

        </Route>

      </Routes>
    </Router>
  );
}

export default App;
