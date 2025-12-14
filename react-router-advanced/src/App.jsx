import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import BlogPost from "./components/BlogPost";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>

        {/* Dynamic Blog Route */}
        <Route path="/blog/:id" element={<BlogPost />} />

        {/* Login Route */}
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />

        {/* Protected Profile Route */}
        <Route
          path="/profile/:userId"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        />

      </Routes>
    </Router>
  );
}

export default App;
